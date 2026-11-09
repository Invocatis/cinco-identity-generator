window.sequences = {...window.sequences, ...{
  "celery man": {
    "title": "Celery Man",
    "loading": true,
    "prompt": "Yes, Paul.",
    "beep": true,
    "clear": true,
    "music": "sequences/celery man/celery.mp3",
    "ordered": true,
    "sync": true,
    "arranged": true,
    "async": true,
    "windows": [
      {
        "time": 300,
        "media": "sequences/celery man/celerytall1.mp4"
      },
      {
        "time": 2400,
        "media": "sequences/celery man/celery1.mp4"
      },
      {
        "time": 8000,
        "swap": "celerytall1",
        "media": "sequences/celery man/celerytall2.mp4"
      },
      {
        "time": 8000,
        "swap": "celery1",
        "media": "sequences/celery man/celery2.mp4"
      },
      {
        "time": 16000,
        "swap": "celerytall1",
        "media": "sequences/celery man/toetaptall.mp4"
      },
      {
        "time": 16000,
        "swap": "celery1",
        "media": "sequences/celery man/toetap.mp4"
      }
    ],
    "id": "celery-man",
    "modes": {},
    "nsfw": false
  },
  "oyster": {
    "title": "Oyster",
    "prompt": "add sequence: OYSTER",
    "music": "sequences/oyster/oyster.mp3",
    "loading": false,
    "wait": 500,
    "ordered": true,
    "windows": [
      {
        "time": 200,
        "id": "oyster1",
        "media": "sequences/oyster/oyster1.mp4",
        "swap": "celery1",
        "addIfNoSwap": true
      },
      {
        "time": 1500,
        "id": "oyster2",
        "media": "sequences/oyster/oyster2.mp4"
      },
      {
        "time": 1600,
        "id": "oyster3",
        "media": "sequences/oyster/oyster3.mp4"
      }
    ],
    "id": "oyster",
    "modes": {},
    "nsfw": false
  },
  "tayne": {
    "frames": [
      {
        "music": null,
        "clear": true,
        "prompt": "I have a BETA sequence I have been working on.",
        "wait": 350,
        "id": "tayne",
        "title": "tayne",
        "loading": false,
        "modes": {},
        "nsfw": false
      },
      {
        "prompt": "Would you like to see it?",
        "waitForSpeech": [
          "sure",
          "alright",
          "all right",
          "okay"
        ],
        "id": "tayne",
        "title": "tayne",
        "loading": false,
        "modes": {},
        "nsfw": false
      },
      {
        "loading": true,
        "prompt": "Okay.",
        "title": "Tayne",
        "clear": true,
        "ordered": true,
        "wait": [
          "videoend",
          1500
        ],
        "arranged": true,
        "hidePrompt": true,
        "container": true,
        "windows": [
          {
            "time": 0,
            "media": "sequences/tayne/imtayne.mp4",
            "audio": true,
            "once": true
          },
          {
            "time": 1250,
            "media": "sequences/tayne/taynepink.jpg"
          },
          {
            "time": 2200,
            "media": "sequences/tayne/boing.webm",
            "window": false,
            "once": true,
            "persist": true
          }
        ],
        "id": "tayne",
        "modes": {},
        "nsfw": false
      },
      {
        "prompt": "",
        "title": "Tayne",
        "hidePrompt": true,
        "clear": true,
        "wait": 1000000,
        "arranged": true,
        "music": "sequences/tayne/tayne.mp3",
        "windows": [
          {
            "time": 0,
            "media": "sequences/tayne/tayne18.png"
          },
          {
            "time": 0,
            "media": "sequences/tayne/tayne1.mp4"
          },
          {
            "time": 0,
            "media": "sequences/tayne/tayne2.mp4"
          }
        ],
        "id": "tayne",
        "loading": false,
        "modes": {},
        "nsfw": false
      },
      {
        "title": "Tayne",
        "hidePrompt": true,
        "clear": true,
        "arranged": true,
        "music": "sequences/tayne/tayne.mp3",
        "sync": true,
        "windows": [
          {
            "media": "sequences/tayne/tayne3.mp4",
            "id": "tayne3-0",
            "time": 250
          },
          {
            "media": "sequences/tayne/tayne3.mp4",
            "id": "tayne3-1",
            "time": 255
          },
          {
            "media": "sequences/tayne/tayne3.mp4",
            "id": "tayne3-2",
            "time": 260
          }
        ],
        "id": "tayne",
        "loading": false,
        "modes": {},
        "nsfw": false
      }
    ]
  }
}};
  for (const url of [
  "sequences/celery man/celery_man.css",
  "sequences/oyster/oyster.css",
  "sequences/tayne/tayne.css"
]) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }
  