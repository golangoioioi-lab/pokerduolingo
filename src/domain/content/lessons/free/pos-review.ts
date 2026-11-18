import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-review",
  "blocks": [
    {
      "t": "p",
      "text": "これまでのレッスンを、席ごとの考え方とレンジの広さで整理します。ポジションは、「後ろに何人いるか」と「ポストフロップで位置があるか」で決まります。"
    },
    {
      "t": "table",
      "head": [
        "席",
        "後ろの人数",
        "オープン頻度の目安",
        "考え方"
      ],
      "rows": [
        [
          "UTG",
          "5人",
          "約15%",
          "強い手に絞る"
        ],
        [
          "HJ",
          "4人",
          "約19%",
          "少し広げる"
        ],
        [
          "CO",
          "3人",
          "約27%",
          "スーテッドを増やす"
        ],
        [
          "BTN",
          "2人（ブラインドのみ）",
          "約45%",
          "最も広く開ける"
        ],
        [
          "SB",
          "1人（BB）",
          "約40%",
          "レイズか降りるかを軸に"
        ],
        [
          "BB",
          "0人（最後に行動）",
          "—",
          "安く守りつつ3betを混ぜる"
        ]
      ]
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
          "action": "オープン 2.5bb",
          "bet": 2.5
        },
        {
          "pos": "BTN",
          "action": "コール 2.5bb",
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
          "action": "スクイーズ？",
          "bet": 1,
          "cards": [
            "As",
            "3s"
          ]
        }
      ],
      "pot": 6.5,
      "caption": "オープンとコールの後ろ。スクイーズやコールの判断が求められます。"
    },
    {
      "t": "h",
      "text": "状況別の整理"
    },
    {
      "t": "list",
      "items": [
        "誰かがオープン：位置があればコールドコールも、強い手は3bet",
        "2人が入ったあと：スクイーズを選ぶ",
        "ブラインドを取りに行く：後ろの席から広く",
        "スチールに直面：3betとコールを混ぜる",
        "3人以上：強い手とナッツを作りやすい手を中心に"
      ]
    },
    {
      "t": "compare",
      "left": {
        "title": "位置がある席（BTN、CO）",
        "points": [
          "広くオープンできる",
          "コールドコールが成り立つ",
          "ブラフも通しやすい"
        ],
        "verdict": "good"
      },
      "right": {
        "title": "位置がない席（SB、BB）",
        "points": [
          "3betか降りるかが基本",
          "コールは安いときだけ",
          "先に動くので情報が少ない"
        ],
        "verdict": "bad"
      },
      "caption": "位置の有無が、レンジの広さを決めます。"
    },
    {
      "t": "p",
      "text": "数字は目安です。相手のタイプやスタックで、広げたり絞ったりします。"
    },
    {
      "t": "range",
      "spot": "rfi-btn",
      "caption": "BTNのオープンレンジの目安。"
    },
    {
      "t": "quiz",
      "q": "ポジション別にオープン頻度が広い順に並べたものは？",
      "options": [
        "BTN > CO > HJ > UTG",
        "UTG > HJ > CO > BTN",
        "CO > BTN > UTG > HJ",
        "HJ > CO > UTG > BTN"
      ],
      "answer": 0,
      "explain": "後ろの人数が少ない席ほど、広く開けられます。"
    },
    {
      "t": "quiz",
      "q": "COオープン、BTNコール。BBのA♠3♠が大きめに3betする行動の名前は？",
      "options": [
        "スクイーズ",
        "コールドコール",
        "スチール",
        "リンプ"
      ],
      "answer": 0,
      "explain": "2人が既にお金を出しているところに3betすることを、スクイーズと言います。",
      "hand": [
        "As",
        "3s"
      ]
    },
    {
      "t": "estimate",
      "q": "BBがBTN 2.5bbオープン（SBは降りた）にコールするのに必要な勝率は？",
      "min": 0,
      "max": 60,
      "step": 1,
      "unit": "%",
      "answer": 21,
      "tolerance": 4,
      "explain": "ポット4bbに追加1.5bb。1.5 ÷（4 + 3）≈ 21%です。"
    },
    {
      "t": "quiz",
      "q": "UTGでは開けにくいが、BTNなら開けやすくなる手は？",
      "options": [
        "65s",
        "AKs",
        "QQ",
        "AJs"
      ],
      "answer": 0,
      "explain": "スーテッドコネクターは、後ろが少なく位置がある席で価値が上がります。他の3つはUTGでも開けます。",
      "optionCards": [
        [
          "6h",
          "5h"
        ],
        [
          "As",
          "Ks"
        ],
        [
          "Qs",
          "Qd"
        ],
        [
          "Ac",
          "Jc"
        ]
      ]
    },
    {
      "t": "try",
      "text": "トレーニングで、席ごとのオープン判断を練習しましょう。",
      "tab": "train"
    }
  ]
};

export default lesson;
