import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-hj",
  "blocks": [
    {
      "t": "p",
      "text": "HJ（ハイジャック）はUTGの1つ隣で、後ろにCO、BTN、SB、BBの4人がいます。UTGより1人少ないだけですが、レンジは目安で全体の19%前後まで広がります。"
    },
    {
      "t": "seats",
      "seats": [
        {
          "pos": "UTG",
          "action": "フォールド",
          "folded": true
        },
        {
          "pos": "HJ",
          "hero": true,
          "action": "オープン 2.5bb",
          "bet": 2.5,
          "cards": [
            "Th",
            "9h"
          ]
        },
        {
          "pos": "CO",
          "action": "未行動"
        },
        {
          "pos": "BTN",
          "action": "未行動"
        },
        {
          "pos": "SB",
          "action": "未行動",
          "bet": 0.5
        },
        {
          "pos": "BB",
          "action": "未行動",
          "bet": 1
        }
      ],
      "pot": 4,
      "caption": "UTGが降りて、HJが動く場面。後ろは4人です。"
    },
    {
      "t": "h",
      "text": "何が加わるか"
    },
    {
      "t": "p",
      "text": "UTGのレンジに、66、55、スーテッドのAx、スーテッドブロードウェイ、T9sなどが加わります。AToやKJoのようなオフスートは、まだ慎重に扱います。"
    },
    {
      "t": "combos",
      "groups": [
        {
          "label": "UTGから共通",
          "hands": [
            "AA",
            "KK",
            "QQ",
            "JJ",
            "TT",
            "99",
            "88",
            "77",
            "AKs",
            "AQs",
            "AJs",
            "ATs",
            "KQs",
            "AKo",
            "AQo"
          ]
        },
        {
          "label": "HJで加わりやすい手",
          "hands": [
            "66",
            "55",
            "A9s",
            "A5s",
            "KJs",
            "KTs",
            "QJs",
            "QTs",
            "JTs",
            "T9s",
            "AJo",
            "KQo"
          ]
        }
      ],
      "caption": "レンジは足し算のイメージで広がります。"
    },
    {
      "t": "range",
      "spot": "rfi-hj",
      "caption": "HJのオープンレンジの目安。"
    },
    {
      "t": "h",
      "text": "後ろの2人を意識する"
    },
    {
      "t": "p",
      "text": "最も気をつけたい相手はCOとBTNです。位置があるので、3betされるとこちらが先に動くことになります。"
    },
    {
      "t": "p",
      "text": "この2人がよく3betするテーブルでは、T9sやAJoを外します。後ろがタイトなら少し広げても構いません。"
    },
    {
      "t": "table",
      "head": [
        "席",
        "オープン頻度の目安"
      ],
      "rows": [
        [
          "UTG",
          "約15%"
        ],
        [
          "HJ",
          "約19%"
        ],
        [
          "CO",
          "約27%"
        ],
        [
          "BTN",
          "約45%"
        ]
      ]
    },
    {
      "t": "quiz",
      "q": "UTGよりHJのほうが広く開けられる主な理由は？",
      "options": [
        "後ろの人数が1人少ないから",
        "スタックが深いから",
        "ブラインドが小さいから",
        "ポジションが最後だから"
      ],
      "answer": 0,
      "explain": "HJの後ろはCO、BTN、SB、BBの4人です。行動する相手が減ると強い手に当たる確率が下がり、その分レンジを広げられます。"
    },
    {
      "t": "estimate",
      "q": "HJのオープン頻度の目安は？（全ハンドに対する%）",
      "min": 0,
      "max": 60,
      "step": 1,
      "unit": "%",
      "answer": 19,
      "tolerance": 5,
      "explain": "HJは約19%です。UTG約15%、CO約27%、BTN約45%と、後ろが減るほど広がります。"
    },
    {
      "t": "quiz",
      "q": "HJのレンジに加わる手として最も自然なものは？",
      "options": [
        "T9s",
        "72o",
        "J4o",
        "83o"
      ],
      "answer": 0,
      "explain": "T9sはスーテッドコネクターで、ストレートやフラッシュを狙えます。72oなどは広げても入りません。",
      "optionCards": [
        [
          "Th",
          "9h"
        ],
        [
          "7s",
          "2d"
        ],
        [
          "Jc",
          "4d"
        ],
        [
          "8h",
          "3s"
        ]
      ]
    },
    {
      "t": "quiz",
      "q": "UTGでは開けにくいが、HJでは開ける手はどれ？",
      "options": [
        "66",
        "KK",
        "AQs",
        "AKo"
      ],
      "answer": 0,
      "explain": "66はHJで加わる小さめのペアです。KK、AQs、AKoはUTGでも開けます。",
      "optionCards": [
        [
          "6h",
          "6d"
        ],
        [
          "Ks",
          "Kd"
        ],
        [
          "As",
          "Qs"
        ],
        [
          "Ac",
          "Kh"
        ]
      ]
    }
  ]
};

export default lesson;
