import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-starting-hands',
  blocks: [
  {
    "t": "p",
    "text": "最初の2枚は全部で169種類に分類できます。まず形の呼び方、次に強さを確認しましょう。"
  },
  {
    "t": "h",
    "text": "3つの形"
  },
  {
    "t": "list",
    "items": [
      "ペア：AA、77など。6通り",
      "スーテッド：AKsなど。同じスートで4通り",
      "オフスート：AKoなど。違うスートで12通り"
    ]
  },
  {
    "t": "combos",
    "groups": [
      {
        "label": "AA",
        "hands": [
          "AA"
        ]
      },
      {
        "label": "AKs",
        "hands": [
          "AKs"
        ]
      },
      {
        "label": "AKo",
        "hands": [
          "AKo"
        ]
      }
    ],
    "caption": "AAは6通り、AKsは4通り、AKoは12通り。AKはあわせて16通り。"
  },
  {
    "t": "p",
    "text": "AAは出にくく、AKoは出やすい理由が分かります。なお、全体は1326通り（52 × 51 ÷ 2）です。"
  },
  {
    "t": "h",
    "text": "強い手の基準"
  },
  {
    "t": "p",
    "text": "強い手とは、ペアが高い、高いカードが2枚、同じスート、つながっている、のどれかを持つ手です。たとえば AA〜JJ と AK だけで 24 + 16 = 40通り、全体の約3%にすぎません。"
  },
  {
    "t": "combos",
    "groups": [
      {
        "label": "最強クラス",
        "hands": [
          "AA",
          "KK",
          "QQ",
          "JJ",
          "AK"
        ]
      },
      {
        "label": "プレイ可能",
        "hands": [
          "TT",
          "99",
          "AQs",
          "KQs",
          "JTs"
        ]
      }
    ],
    "caption": "強い手は全体のごく一部。"
  },
  {
    "t": "h",
    "text": "プレイアビリティ"
  },
  {
    "t": "p",
    "text": "スーテッドは、フラッシュの可能性があるぶん、勝率が2〜4%ほど上がります。一方、K2o のような弱い高カードは、強い手に支配されやすい手です。"
  },
  {
    "t": "equity",
    "players": [
      {
        "label": "AKs",
        "cards": [
          "As",
          "Ks"
        ],
        "pct": 46
      },
      {
        "label": "QQ",
        "cards": [
          "Qh",
          "Qd"
        ],
        "pct": 54
      }
    ],
    "caption": "AKsとQQは、ほぼ互角（目安）。"
  },
  {
    "t": "try",
    "text": "レンジ表で、BTNのオープンにどんな手が含まれているか確認しましょう。",
    "tab": "ranges"
  },
  {
    "t": "estimate",
    "q": "A♥K♦（AKo）は何通りある？",
    "min": 0,
    "max": 20,
    "answer": 12,
    "tolerance": 0.5,
    "explain": "ランクの組み合わせ4 × 3 = 12通りです。",
    "hand": [
      "Ah",
      "Kd"
    ],
    "unit": "通り",
    "step": 1
  },
  {
    "t": "quiz",
    "q": "組み合わせ（コンボ）が最も少ないのはどれ？",
    "options": [
      "A♠A♥（AA）",
      "A♠K♠（AKs）",
      "A♠K♦（AKo）"
    ],
    "answer": 1,
    "explain": "AAは6通り、AKsは4通り、AKoは12通り。スーテッドが最も少なくなります。",
    "optionCards": [
      [
        "As",
        "Ah"
      ],
      [
        "As",
        "Ks"
      ],
      [
        "As",
        "Kd"
      ]
    ]
  },
  {
    "t": "quiz",
    "q": "AKsとQQのプリフロップの勝率は？",
    "options": [
      "AKsが圧倒的に有利",
      "ほぼ互角（QQがやや有利）",
      "QQが圧倒的に有利",
      "AKsが必ず勝つ"
    ],
    "answer": 1,
    "explain": "ペアと高カード2枚はコインフリップで、QQが約54%です（目安）。",
    "hand": [
      "As",
      "Ks"
    ]
  },
  {
    "t": "quiz",
    "q": "スーテッド（同じスート）の手はどれ？",
    "options": [
      "A♠K♠",
      "A♥K♦",
      "Q♥Q♦",
      "J♣7♦"
    ],
    "answer": 0,
    "explain": "同じマークの2枚がスーテッドです。フラッシュの可能性が加わります。",
    "optionCards": [
      [
        "As",
        "Ks"
      ],
      [
        "Ah",
        "Kd"
      ],
      [
        "Qh",
        "Qd"
      ],
      [
        "Jc",
        "7d"
      ]
    ]
  },
  {
    "t": "quiz",
    "q": "スタート時の手札の組み合わせは全部で？",
    "options": [
      "169通り",
      "2652通り",
      "52通り",
      "1326通り"
    ],
    "answer": 3,
    "explain": "52 × 51 ÷ 2 = 1326通りです。"
  }
],
};

export default lesson;
