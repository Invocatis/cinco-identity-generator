import { readdir, readFile, writeFile } from "node:fs/promises";
import Path from "node:path";

async function loadSequence(path) {
  let root = "sequences/" + path.join("/") + "/";
  let files = await readdir(root, { withFileTypes: true });

  let music = files.filter((x) => x.name.endsWith(".mp3"));

  let visualMedia = files.filter(
    (x) =>
      x.name.endsWith(".mp4") ||
      x.name.endsWith(".webm") ||
      x.name.endsWith(".png") ||
      x.name.endsWith(".jpg"),
  );

  let windows = [];
  for (let file of visualMedia) {
    windows.push({
      media: root + file.name,
    });
  }

  let modes_array = await Promise.all(
    files
      .filter((f) => f.type === "directory")
      .map(async (f) => {
        let p = path.slice();
        p.push(f.name);
        let s = await sequence.loadSequence(p);
        return [f.name, s];
      }),
  );

  let modes = Object.fromEntries(modes_array);

  let title = path[path.length - 1];

  let f = files.filter((x) => x.name.endsWith(".json"));
  var sequence_stub = {};

  // ADD CSS
  files
    .filter((f) => f.name.endsWith(".css"))
    .forEach((f) => {
      css.push(root + f.name);
    });

  let nsfw = title == "nude" || title == "nsfw";

  let parseFromFile = function (sequence_stub) {
    if (sequence_stub.frames) {
      sequence_stub.frames = sequence_stub.frames.map(parseFromFile);
      return sequence_stub;
    }
    if (sequence_stub.windows) {
      sequence_stub.windows.forEach((w) => (w.media = root + w.media));
    }

    let file_name = path[path.length - 1].split(".")[0];
    sequence_stub.id = file_name.replace(" ", "-");
    sequence_stub.title = sequence_stub.title || path[path.length - 1];
    sequence_stub.loading =
      sequence_stub.loading === undefined ? false : sequence_stub.loading;
    sequence_stub.modes = sequence_stub.modes || modes;
    sequence_stub.nsfw = sequence_stub.nsfw || nsfw;
    if (sequence_stub.music) {
      sequence_stub.music = root + sequence_stub.music;
    }

    if (sequence_stub.nsfw) {
      sequence_stub.audio = "audio/computer/nsfw.mp3";
      sequence_stub.prompt = null;
      sequence_stub.clear = true;
    }

    return sequence_stub;
  };

  if (f.length != 0) {
    sequence_stub = JSON.parse(await readFile(Path.join(root, f[0].name), "utf8"));

    if (Array.isArray(sequence_stub)) {
      sequence_stub = sequence_stub.map((s) => parseFromFile(s));
    } else {
      sequence_stub = parseFromFile(sequence_stub);
    }
  } else {
    if (title == "nude") {
      let who = path[path.length - 2];
      title += " " + who;
    }

    sequence_stub = {
      id: path.join(".").replace(" ", "-"),
      title: title,
      music: music.length > 0 ? root + music[0].name : "",
      windows: windows,
      loading: true,
      modes: modes,
      prompt: "random",
      nsfw: nsfw,
    };
  }


  return sequence_stub;
};

const static_sequences = ["celery man", "oyster", "tayne"]


const data = {};
const css = [];

for (const sequence of static_sequences) {
  const s = await loadSequence([sequence]);
  data[sequence] = s;
}

await writeFile(
  "./js/static_sequences.js",
  `window.sequences = {...window.sequences, ...${JSON.stringify(data, null, 2)}};
  for (const url of ${JSON.stringify(css, null, 2)}) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }
  `
);
