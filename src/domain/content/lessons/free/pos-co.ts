import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-co",
  "blocks": [
    {
      "t": "p",
      "text": "CO（カットオフ）はBTNの1つ前の席です。後ろにいるのはBTN、SB、BBの3人だけなので、オープンレンジは全体の27%前後まで広がります。"
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
          "action": "フォールド",
          "folded": true
        },
        {
          "pos": "CO",
          "hero": true,
          "action": "オープン 2.5bb",
          "bet": 2.5,
          "cards": [
            "Qh",
            "Js"
          ]
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
      "caption": "前の2人が降りたCOのオープン。"
    },
    {
      "t": "h",
      "text": "COで広がる手"
    },
    {
      "t": "p",
      "text": "K9s、Q9s、J9sなどのスーテッド、98sや87sのようなスーテッドコネクター、A9s〜A2sのスーテッドAxが入ってきます。オフスートではATo、KJo、QJoあたりまでが目安です。"
    },
    {
      "t": "combos",
      "groups": [
        {
          "label": "HJまでの中心",
          "hands": [
            "AA",
            "KK",
            "QQ",
            "JJ",
            "TT",
            "99",
            "88",
            "77",
            "66",
            "55",
            "AKs",
            "AQs",
            "AJs",
            "ATs",
            "KQs",
            "KJs",
            "QJs",
            "JTs",
            "AKo",
            "AQo"
          ]
        },
        {
          "label": "COで加わる手",
          "hands": [
            "44",
            "33",
            "A9s",
            "A5s",
            "K9s",
            "Q9s",
            "J9s",
            "T9s",
            "98s",
            "87s",
            "ATo",
            "KJo",
            "QJo"
          ]
        }
      ],
      "caption": "COは足し算で広げ、スーテッドの手を増やします。"
    },
    {
      "t": "range",
      "spot": "rfi-co",
      "caption": "COのオープンレンジの目安。"
    },
    {
      "t": "h",
      "text": "BTNという壁"
    },
    {
      "t": "p",
      "text": "COの最大の悩みは後ろのBTNです。BTNは広く3betしてくることが多く、3betされるとこちらは位置がありません。対応は次の通りです。"
    },
    {
      "t": "list",
      "items": [
        "強い手（QQ+、AK）は4betかコール",
        "中程度の手（TT、AQs）は状況を見て続ける",
        "弱い手（K9s、J9s）は降りる"
      ]
    },
    {
      "t": "range",
      "spot": "btn-vs-co",
      "caption": "BTNがCOのオープンに対して3betやコールをする目安。"
    },
    {
      "t": "p",
      "text": "COがオープンしてBTNが降りれば、ブラインドを取りに行く形になり、ボタンの有利さを間接的に使えます。"
    },
    {
      "t": "estimate",
      "q": "COのオープン頻度の目安は？（全ハンドに対する%）",
      "min": 0,
      "max": 60,
      "step": 1,
      "unit": "%",
      "answer": 27,
      "tolerance": 5,
      "explain": "COは約27%です。後ろがBTN、SB、BBの3人だけなので、HJの約19%より広げられます。"
    },
    {
      "t": "quiz",
      "q": "COから開けてよい手はどれ？",
      "options": [
        "K9s",
        "72o",
        "J4o",
        "83o"
      ],
      "answer": 0,
      "explain": "K9sはCOから開き始める代表的なスーテッドの手です。72oなどはBTNでも基本的に開けません。",
      "optionCards": [
        [
          "Kh",
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
      "q": "BTNに3betされた。降りやすいのはどれ？",
      "options": [
        "J9s",
        "AA",
        "KK",
        "AKs"
      ],
      "answer": 0,
      "explain": "J9sは3betされると続けにくい手です。強い手は4betやコールで続けます。",
      "optionCards": [
        [
          "Jh",
          "9h"
        ],
        [
          "As",
          "Ad"
        ],
        [
          "Ks",
          "Kd"
        ],
        [
          "Ac",
          "Kc"
        ]
      ]
    },
    {
      "t": "quiz",
      "q": "COでQ♥J♠。前の2人が降りた。どうする？",
      "options": [
        "2.5bbオープン",
        "フォールド",
        "リンプ"
      ],
      "answer": 0,
      "explain": "QJoはCOで加わる手の1つです。後ろは3人だけなので、オープンで入れます。",
      "hand": [
        "Qh",
        "Js"
      ]
    }
  ]
};

export default lesson;
