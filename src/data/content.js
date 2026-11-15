(() => {
// Each star links to a project and can animate an illustration or a frame sequence.
const carouselItems = [
  { projectId: "mix", src: "./assets/illustrations/producer-mayu.webp", action: "producer" },
  { projectId: "mix", src: "./assets/illustrations/dj-mayu.webp", action: "dj" },

  { projectId: "social", src: "./assets/illustrations/social-mayu.webp", action: "social" },
  { projectId: "graphic", src: "./assets/illustrations/graphic-mayu.webp", action: "graphic" },
  { projectId: "performance", src: "./assets/illustrations/performance-mayu.webp", action: "performance" },
  { projectId: "creative", src: "./assets/illustrations/creative-mayu.webp", action: "creative" },
  { projectId: "set-design", src: "./assets/illustrations/set-design-mayu.webp", action: "set-design" },
  { projectId: "animation", src: "./assets/illustrations/animation-mayu.webp", action: "animation" },
  { projectId: "app-development", src: "./assets/illustrations/app-development-mayu.webp", action: "app-development" },
  { projectId: "storytelling", src: "./assets/illustrations/storytelling-mayu.webp", action: "storytelling" },
];
const carouselSettings = { minimumTiles: 6, secondsPerTile: 7 };

// Add another project object to extend the home page.
const projects = [
  {
    "id": "mix",
    "title": "DJ והפקה מוזיקלית",
    "cover": "./assets/illustrations/dj-mayu.png",
    "contain": true,
    "description": "מיקס, רמיקסים והפקה מוזיקלית.",
    "tags": [
      "מוזיקה",
      "מיקס",
      "הפקה"
    ],
    "media": [
      {
        "type": "image",
        "src": "./assets/illustrations/dj-mayu.png",
        "alt": "איור DJ Mayu",
        "caption": "DJ Mayu",
        "tags": [
          "איור",
          "מוזיקה"
        ]
      }
    ]
  },
  {
    "id": "creative",
    "title": "קריאייטיב",
    "cover": "./assets/images/lobby-2.webp",
    "description": "רעיונות וחיבורים בין תוכן, עיצוב וחוויה.",
    "tags": [
      "קריאייטיב",
      "שפה חזותית",
      "חוויה"
    ],
    "media": [
      {
        "type": "image",
        "src": "./assets/images/lobby-2.webp",
        "alt": "תמונת אווירה למשבצת הקריאייטיב",
        "tags": [
          "קריאייטיב",
          "חוויה"
        ]
      }
    ]
  },
  {
    "id": "social",
    "title": "סושיאל ותוכן",
    "cover": "./assets/images/social-1.webp",
    "description": "שני סרטוני סושיאל. התפקיד שלי הוא הופעה מול מצלמה ואלתור. הקונספט והעריכה נעשו על ידי אחרים.",
    "tags": [
      "סושיאל",
      "הופעה מול מצלמה",
      "אלתור"
    ],
    "media": [
      {
        "type": "video",
        "src": "./assets/videos/social-1.mp4",
        "poster": "./assets/images/social-1.webp",
        "alt": "סרטון סושיאל 1",
        "tags": [
          "סושיאל",
          "הופעה מול מצלמה",
          "אלתור"
        ]
      },
      {
        "type": "video",
        "src": "./assets/videos/social-2.mp4",
        "poster": "./assets/images/social-2.webp",
        "alt": "סרטון סושיאל 2",
        "tags": [
          "סושיאל",
          "הופעה מול מצלמה",
          "אלתור"
        ]
      }
    ]
  },
  {
    "id": "set-design",
    "title": "עיצוב תפאורה וחלל",
    "cover": "./assets/images/lobby-3.webp",
    "description": "עיצוב לובי, תפאורה ואביזרים. מהעבודה בסדנה ופרטי החיבורים ועד למיצגים בחלל המלון.",
    "tags": [
      "תפאורה",
      "עיצוב חלל",
      "אביזרים",
      "עבודת יד"
    ],
    "media": [
      {
        "type": "image",
        "src": "./assets/images/lobby-3.webp",
        "alt": "תפאורת מסגרות ירוקות בלובי",
        "tags": [
          "תפאורה",
          "עיצוב חלל",
          "הקמה"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/lobby-2.webp",
        "alt": "מיצג אדום ולב מבלונים",
        "tags": [
          "תפאורה",
          "עיצוב חלל",
          "הקמה"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/lobby-1.webp",
        "alt": "מיצג עם בלונים ודמויות בלובי",
        "tags": [
          "תפאורה",
          "עיצוב חלל",
          "הקמה"
        ]
      },
      {
        "type": "video",
        "src": "./assets/videos/set-process.mp4",
        "poster": "./assets/images/set-poster.webp",
        "alt": "תהליך עבודה על התפאורה",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-6.webp",
        "alt": "מסגרת תפאורה מעוטרת בעלים",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-5.webp",
        "alt": "סדנת העבודה",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-4.webp",
        "alt": "חלקי תפאורה בסדנה",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-3.webp",
        "alt": "קישוט ידית עץ",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-10.webp",
        "alt": "חיבור באביזר צהוב",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-7.webp",
        "alt": "פין ושרשרת במסגרת",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-8.webp",
        "alt": "רצועת חיבור באביזר",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-1.webp",
        "alt": "עבודה על כובע",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      },
      {
        "type": "image",
        "src": "./assets/images/set-2.webp",
        "alt": "עבודה על אביזר מקופל",
        "tags": [
          "תפאורה",
          "אביזרים",
          "עבודת יד"
        ]
      }
    ]
  },
  {
    "id": "performance",
    "title": "פרפורמנס",
    "cover": "./assets/images/social-2.webp",
    "description": "הופעה מול מצלמה ואלתור.",
    "tags": [
      "הופעה",
      "אלתור",
      "מול מצלמה"
    ],
    "media": [
      {
        "type": "video",
        "src": "./assets/videos/social-2.mp4",
        "poster": "./assets/images/social-2.webp",
        "alt": "הופעה מול מצלמה",
        "tags": [
          "הופעה",
          "אלתור",
          "מול מצלמה"
        ]
      }
    ]
  },
  {
    "id": "animation",
    "title": "איור ואנימציה",
    "cover": "./assets/illustrations/dj-mayu.png",
    "contain": true,
    "description": "איורים, דמויות ותנועה.",
    "tags": [
      "איור",
      "אנימציה",
      "דמויות"
    ],
    "media": [
      {
        "type": "image",
        "src": "./assets/illustrations/dj-frame-2.svg",
        "alt": "DJ Mayu — פריים מתוך האיור",
        "tags": [
          "איור",
          "אנימציה",
          "דמויות"
        ]
      }
    ]
  },
  {
    "id": "graphic",
    "title": "עיצוב גרפי",
    "cover": "./assets/illustrations/dj-mayu.png",
    "contain": true,
    "description": "איור DJ Mayu והזהות החזותית של PICKY, כלי לבחירת צבעים לכרום.",
    "tags": [
      "איור",
      "עיצוב גרפי",
      "עיצוב ממשק"
    ],
    "media": [
      {
        "type": "image",
        "src": "./assets/illustrations/dj-mayu.png",
        "alt": "DJ Mayu — איור של דמות מתקלטת",
        "caption": "DJ Mayu",
        "tags": [
          "איור",
          "מוזיקה",
          "עיצוב גרפי"
        ]
      },
      {
        "type": "image",
        "src": "./assets/branding/picky.png",
        "alt": "האייקון של PICKY",
        "caption": "PICKY",
        "link": "https://github.com/MayaBachrach/picky",
        "tags": [
          "עיצוב גרפי",
          "עיצוב ממשק",
          "כלי צבע"
        ]
      }
    ]
  },
  {
    "id": "app-development",
    "title": "מוצרים דיגיטליים",
    "cover": "./assets/illustrations/digital-products.svg",
    "contain": true,
    "description": "מוצרים דיגיטליים, ממשקים וכלים אינטראקטיביים.",
    "tags": [
      "פיתוח אפליקציות",
      "ממשק משתמש",
      "מוצרים דיגיטליים"
    ],
    "media": [
      {
        "type": "image",
        "src": "./assets/branding/picky.png",
        "alt": "PICKY — תמונה למשבצת הפיתוח",
        "tags": [
          "פיתוח אפליקציות",
          "מוצרים דיגיטליים"
        ]
      }
    ]
  },
  {
    "id": "storytelling",
    "title": "סטוריטלינג",
    "cover": "./assets/images/social-1.webp",
    "description": "סיפורים, דמויות ונרטיבים — מהרעיון ועד לאופן שבו הסיפור פוגש את הקהל.",
    "tags": [
      "סטוריטלינג",
      "סיפור",
      "דמויות"
    ],
    "media": [
      {
        "type": "image",
        "src": "./assets/images/social-1.webp",
        "alt": "תמונת אווירה למשבצת הסטוריטלינג",
        "tags": [
          "סטוריטלינג",
          "סיפור"
        ]
      }
    ]
  }
];


const starActions = {
  "social": {"cut":"M141 143L156 139 171 146 170 160 151 163 137 159Z","pivot":[143,156],"travel":[0,2.7],"angle":3,"marks":"M197 137l10-8m-8 14l13-2m-15 8l11 5","duration":1550},
  "graphic": {"cut":"M74 110L92 104 104 113 100 130 115 139 109 159 89 158 78 172 69 171 69 152Z","pivot":[106,147],"travel":[5,1],"angle":-6,"marks":"M78 167q7-3 15 0l6 2m-19 2l16 4","duration":1750},
  "performance": {"cut":"M103 67L127 65 130 79 119 98 101 107 87 109 86 100 96 87Z","pivot":[89,103],"travel":[3,-2],"angle":-7,"marks":"M123 63l6-9m-1 14l11-4m-10 10l10 2","duration":1420},
  "creative": {"cut":"M129 198L163 193 170 185 190 184 197 204 187 229 133 237 113 229 115 210Z","pivot":[175,202],"travel":[-7,0],"angle":-4,"marks":"M116 201l-1-8m4 10l4-7m-12 7l-7-4","duration":1750},
  "set-design": {"cut":"M84 145L89 145 92 155 95 159 91 168 81 168 78 160 82 153Z","pivot":[86,146],"travel":[0,0],"angle":26,"marks":"M100 154l6-5m-5 10l7-1","duration":1540},
  "animation": {"cut":"M137 110L149 97 169 98 170 116 152 128 143 122Z","pivot":[145,118],"travel":[-3,-1],"angle":-18,"marks":"M168 98q4-8 8-10m-5 14l10-4","duration":1040},
  "app-development": {"cut":"M101 167L118 163 128 164 132 174 117 182 102 182 98 177Z","pivot":[123,170],"travel":[-2,3],"angle":-6,"marks":"M70 149l8 10-6-1-3 5z M66 148l-4-3m5 8l-4 2","duration":1500},
  "storytelling": {"cut":"M129 125Q148 109 173 105L178 116Q147 119 129 139L123 138Z","pivot":[129,132],"travel":[-9,-3],"angle":-25,"marks":"M132 130q-7-22-31-28 10 12 19 29m24-22q12-5 21-5","duration":1850},
  "dj": {"cut":"M47 173L58 158 75 160 77 175 70 190 48 194 42 187Z","pivot":[69,167],"travel":[4,2],"angle":-9,"marks":"M45 204q12 10 30 4l-5-4m11-11q-11-5-23-2","duration":1150},
  "producer": {"cut":"M132 140L144 130 157 131 166 139 161 153 146 156 133 151Z","pivot":[151,136],"travel":[1,3],"angle":7,"marks":"M150 164l4 5m6-7l7 3m-10-20l4-6","duration":1230},
};

window.PORTFOLIO_CONTENT = { carouselItems, carouselSettings, projects, starActions };
})();
