import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-bb",
  "blocks": [
    {
      "t": "p",
      "text": "BB（ビッグブラインド）は最後に行動できますが、フロップ以降は先に動きます。すでに1bbを払っているので、オープンに対してコールするコストが小さいのが特徴です。"
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
          "action": "フォールド",
          "folded": true
        },
        {
          "pos": "BTN",
          "action": "オープン 2.5bb",
          "bet": 2.5
        },
        {
          "pos": "SB",
          "action": "フォールド",
          "folded": true,
          "bet": 0.5
        },
        {
          "pos": "BB",
          "hero": true,
          "action": "判断",
          "bet": 1,
          "cards": [
            "Ts",
            "8s"
          ]
        }
      ],
      "pot": 4,
      "caption": "BTNのオープンにBBが直面する典型的な形。"
    },
    {
      "t": "h",
      "text": "安い値段で守る"
    },
    {
      "t": "p",
      "text": "BTNが2.5bbオープンして、SBが降りた場面を考えます。ポットは 2.5 + 0.5 + 1 = 4bb で、BBが払うのは追加の1.5bbです。"
    },
    {
      "t": "odds",
      "pot": 4,
      "bet": 1.5,
      "equity": 38,
      "caption": "必要勝率は 1.5 ÷ (4 + 3) ≈ 21%。たとえば38%の勝率があれば、ポストフロップで多少不利でもコールの価値があります。"
    },
    {
      "t": "p",
      "text": "必要勝率が低いのでBBは広く守れますが、位置がないので全部の手でコールするわけではありません。"
    },
    {
      "t": "range",
      "spot": "bb-vs-btn",
      "caption": "BBがBTNのオープンに対して取る行動の目安。"
    },
    {
      "t": "h",
      "text": "3betも混ぜる"
    },
    {
      "t": "p",
      "text": "コールだけだと、BTNは広いレンジで開け放題になります。AQ+、JJ+とA5sのようなブロッカー付きの手を3betに混ぜます。サイズは11bb前後です。"
    },
    {
      "t": "tip",
      "text": "BBが「安いから」と何でもコールするのは典型的なミスです。スーテッド、コネクター、Axなど、ポストフロップで勝率を実現しやすい手を優先しましょう。"
    },
    {
      "t": "p",
      "text": "UTGなど前の席のオープンは強いので、守る範囲を絞ります。"
    },
    {
      "t": "estimate",
      "q": "BTN 2.5bbオープン、SBフォールド。BBがコールするのに必要な勝率は？",
      "min": 0,
      "max": 60,
      "step": 1,
      "unit": "%",
      "answer": 21,
      "tolerance": 4,
      "explain": "ポットは4bb、追加は1.5bb。1.5 ÷（4 + 3）≈ 21%です。"
    },
    {
      "t": "quiz",
      "q": "BTN 2.5bbオープン、SBフォールド。BBのT♠8♠は？",
      "options": [
        "コールする",
        "フォールドする",
        "オールイン"
      ],
      "answer": 0,
      "explain": "T8sはスーテッドで必要勝率も低く、コールで守れる手です。",
      "hand": [
        "Ts",
        "8s"
      ]
    },
    {
      "t": "quiz",
      "q": "BBでBTNのオープンをコールするのに向く手は？",
      "options": [
        "87s",
        "K3o",
        "J2o",
        "94o"
      ],
      "answer": 0,
      "explain": "スーテッドコネクターはポストフロップで勝率を実現しやすい手です。他は支配されやすく、位置もありません。",
      "optionCards": [
        [
          "8h",
          "7h"
        ],
        [
          "Kd",
          "3c"
        ],
        [
          "Js",
          "2d"
        ],
        [
          "9c",
          "4h"
        ]
      ]
    },
    {
      "t": "quiz",
      "q": "BBでBTNに3betするとき、手の選び方として良いのは？",
      "options": [
        "強い手と、A5sのようなブロッカー付きの手を混ぜる",
        "弱い手だけを3betする",
        "3betは一切しない",
        "常にオールインする"
      ],
      "answer": 0,
      "explain": "強い手をバリューに、ブロッカー付きの手をブラフにして、レンジを組み立てます。"
    }
  ]
};

export default lesson;
