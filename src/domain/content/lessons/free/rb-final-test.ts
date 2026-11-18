import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-final-test',
  blocks: [
  {
    "t": "p",
    "text": "復習の締めくくりです。1問ずつ考えてから答えましょう。"
  },
  {
    "t": "h",
    "text": "場面の確認"
  },
  {
    "t": "seats",
    "seats": [
      {
        "pos": "CO",
        "action": "オープン",
        "bet": 2.5
      },
      {
        "pos": "BTN",
        "action": "フォールド",
        "folded": true
      },
      {
        "pos": "SB",
        "action": "フォールド",
        "folded": true
      },
      {
        "pos": "BB",
        "hero": true,
        "action": "判断中",
        "bet": 1,
        "cards": [
          "Kh",
          "Jd"
        ]
      }
    ],
    "pot": 4,
    "caption": "BBでKJoを持ち、COが2.5bbにオープン。"
  },
  {
    "t": "p",
    "text": "ポットは 2.5 + 1 + 0.5 = 4bb。BBの追加コール額は1.5bbなので、必要勝率は 1.5 ÷（4 + 1.5 + 1.5）≒ 21%。最終ポット7bbのうち1.5bbを払う計算です。ポジションが悪いぶん実際には少し上乗せして考えます。"
  },
  {
    "t": "odds",
    "pot": 4,
    "bet": 1.5,
    "equity": 35,
    "caption": "ポット4bbに1.5bbを追加。必要勝率は約21%。勝率35%は説明用の例。"
  },
  {
    "t": "compare",
    "left": {
      "title": "BTNでJTs",
      "cards": [
        "Jh",
        "Th"
      ],
      "points": [
        "後ろの席でスーテッド",
        "参加価値あり"
      ],
      "verdict": "good"
    },
    "right": {
      "title": "UTGでK9o",
      "cards": [
        "Ks",
        "9d"
      ],
      "points": [
        "前の席で弱いオフスート",
        "支配されやすい"
      ],
      "verdict": "bad"
    },
    "caption": "席と手の組み合わせで判断が変わる。"
  },
  {
    "t": "quiz",
    "q": "最も強い役はどれ？",
    "options": [
      "ストレート",
      "フラッシュ",
      "フルハウス"
    ],
    "answer": 2,
    "explain": "強さは、フルハウス、フラッシュ、ストレートの順です。",
    "optionCards": [
      [
        "9s",
        "8d",
        "7c",
        "6h",
        "5d"
      ],
      [
        "Kh",
        "Jh",
        "8h",
        "5h",
        "2h"
      ],
      [
        "Js",
        "Jd",
        "Jc",
        "4h",
        "4d"
      ]
    ]
  },
  {
    "t": "estimate",
    "q": "BBでKJoを持っています。COが2.5bbにオープン。コールに追加で払う額は？",
    "min": 0,
    "max": 5,
    "answer": 1.5,
    "tolerance": 0.25,
    "explain": "2.5 − 1 = 1.5bbです。",
    "hand": [
      "Kh",
      "Jd"
    ],
    "unit": "bb",
    "step": 0.5
  },
  {
    "t": "estimate",
    "q": "ポット20bbに10bbのベット。必要勝率は？",
    "min": 0,
    "max": 60,
    "answer": 25,
    "tolerance": 3,
    "explain": "10 ÷（20 + 10 + 10）= 25% です。",
    "unit": "%",
    "step": 1
  },
  {
    "t": "estimate",
    "q": "フロップでフラッシュドロー（9アウツ）。リバーまでの勝率の目安は？",
    "min": 0,
    "max": 80,
    "answer": 36,
    "tolerance": 5,
    "explain": "9 × 4 = 36% です。",
    "hand": [
      "Ah",
      "9h"
    ],
    "board": [
      "Kh",
      "7h",
      "2c"
    ],
    "unit": "%",
    "step": 1
  },
  {
    "t": "estimate",
    "q": "A♥K♦（AKo）は何通りある？",
    "min": 0,
    "max": 20,
    "answer": 12,
    "tolerance": 0.5,
    "explain": "4 × 3 = 12通りです。",
    "hand": [
      "Ah",
      "Kd"
    ],
    "unit": "通り",
    "step": 1
  },
  {
    "t": "quiz",
    "q": "フロップ以降、最後に行動する席は？",
    "options": [
      "UTG",
      "SB",
      "BB",
      "BTN"
    ],
    "answer": 3,
    "explain": "ボタンは各ストリートで最後に行動します。"
  },
  {
    "t": "quiz",
    "q": "最初のレイズを何と呼ぶ？",
    "options": [
      "3ベット",
      "Cベット",
      "ドンクベット",
      "オープン"
    ],
    "answer": 3,
    "explain": "最初のレイズはオープンです。"
  },
  {
    "t": "tip",
    "text": "間違えた分野は、そのレッスンに戻ってもう一度解いてみましょう。"
  }
],
};

export default lesson;
