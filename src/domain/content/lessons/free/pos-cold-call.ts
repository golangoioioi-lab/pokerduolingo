import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-cold-call",
  "blocks": [
    {
      "t": "p",
      "text": "自分がまだブラインドを払っていない状態で、誰かのオープンにコールすることをコールドコールと言います。BTNやCOなど、位置があるときに使うことの多い選択肢です。"
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
          "action": "オープン 2.5bb",
          "bet": 2.5
        },
        {
          "pos": "CO",
          "action": "フォールド",
          "folded": true
        },
        {
          "pos": "BTN",
          "hero": true,
          "action": "コールドコール 2.5bb",
          "bet": 2.5,
          "cards": [
            "Jh",
            "Th"
          ]
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
      "caption": "HJのオープンに、BTNがコールドコール。"
    },
    {
      "t": "h",
      "text": "必要勝率"
    },
    {
      "t": "p",
      "text": "HJがオープンした場面で、BTNがコールするときの必要勝率です。ポットは 2.5 + 0.5 + 1 = 4bb、コールは2.5bbです。"
    },
    {
      "t": "odds",
      "pot": 4,
      "bet": 2.5,
      "equity": 32,
      "caption": "必要勝率は約28%。位置があると、実際の勝率を実現しやすくなります。"
    },
    {
      "t": "p",
      "text": "ただし、SBやBBにスクイーズされるリスクがあるので、降りられる手が中心です。"
    },
    {
      "t": "h",
      "text": "コールドコールに向く手"
    },
    {
      "t": "p",
      "text": "位置があれば、スーテッドブロードウェイ（KQs、QJs、JTs）、AQs、77〜JJ、スーテッドコネクターが中心です。QQ+とAKは通常3betしますが、混ぜてコールすることもあります。"
    },
    {
      "t": "combos",
      "groups": [
        {
          "label": "コールが中心の手",
          "hands": [
            "JJ",
            "TT",
            "99",
            "88",
            "77",
            "66",
            "AQs",
            "KQs",
            "QJs",
            "JTs",
            "T9s",
            "98s"
          ]
        },
        {
          "label": "3betが中心の手",
          "hands": [
            "AA",
            "KK",
            "QQ",
            "AKs",
            "AKo"
          ]
        }
      ],
      "caption": "位置があるときの目安。相手の席と3betされやすさで調整します。"
    },
    {
      "t": "h",
      "text": "位置がないときは減らす"
    },
    {
      "t": "p",
      "text": "SBやBBは常に位置がないので、コールの価値は下がります。SBはコールを控え、BBは必要勝率が低い場面で広く守ります。"
    },
    {
      "t": "tip",
      "text": "コールドコールのメリットは、レンジを隠せること。デメリットは、後ろから3betされることです。後ろのプレイヤーがよく3betするなら、コールを減らします。"
    },
    {
      "t": "estimate",
      "q": "HJの2.5bbオープン（ポット4bb）に、BTNがコールドコールする必要勝率は？",
      "min": 0,
      "max": 60,
      "step": 1,
      "unit": "%",
      "answer": 28,
      "tolerance": 4,
      "explain": "2.5 ÷（4 + 5）≈ 27.8%です。"
    },
    {
      "t": "quiz",
      "q": "コールドコールで気をつけたいリスクは？",
      "options": [
        "後ろからのスクイーズ",
        "ボードが出ないこと",
        "ブラインドが払えないこと",
        "ポットが小さいこと"
      ],
      "answer": 0,
      "explain": "後ろのプレイヤーに3betされると、コールだけの手は降りることになります。"
    },
    {
      "t": "quiz",
      "q": "HJのオープンに、BTNでコールドコールしやすい手は？",
      "options": [
        "JTs",
        "K4o",
        "83o",
        "J3o"
      ],
      "answer": 0,
      "explain": "JTsは位置があるとき、ポストフロップで勝率を実現しやすいスーテッドブロードウェイです。",
      "optionCards": [
        [
          "Jh",
          "Th"
        ],
        [
          "Kd",
          "4c"
        ],
        [
          "8s",
          "3d"
        ],
        [
          "Jc",
          "3h"
        ]
      ]
    },
    {
      "t": "quiz",
      "q": "HJオープン、BTNで7♥7♦。基本の選択は？",
      "options": [
        "コール",
        "3bet",
        "フォールド"
      ],
      "answer": 0,
      "explain": "中くらいのペアは、位置があればコールで入ってセットを狙います。",
      "hand": [
        "7h",
        "7d"
      ]
    }
  ]
};

export default lesson;
