import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-btn",
  "blocks": [
    {
      "t": "p",
      "text": "BTN（ボタン）は、ポストフロップで常に最後に行動する席です。後ろにいるのはブラインドの2人だけで、オープンレンジは全体の45%前後まで広がります。6つの席の中で、最も利益が出やすい席です。"
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
          "hero": true,
          "action": "オープン 2.5bb",
          "bet": 2.5,
          "cards": [
            "7h",
            "6h"
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
      "caption": "全員が降りたBTN。相手はブラインドの2人だけです。"
    },
    {
      "t": "h",
      "text": "位置の価値"
    },
    {
      "t": "p",
      "text": "最後に動けると、相手の行動を見てから決められます。同じ手でも位置がある側は勝率（エクイティ）を実現しやすく、弱めのスーテッドやコネクターでも開けられます。"
    },
    {
      "t": "compare",
      "left": {
        "title": "BTNで76sを持つ",
        "cards": [
          "7h",
          "6h"
        ],
        "points": [
          "最後に動ける",
          "スーテッドで、フラッシュやストレートを狙える",
          "ブラインドが降りれば1.5bbを獲得"
        ],
        "verdict": "good"
      },
      "right": {
        "title": "UTGで76sを持つ",
        "cards": [
          "7h",
          "6h"
        ],
        "points": [
          "後ろに5人いる",
          "先に動くので情報が少ない",
          "強い手に囲まれやすい"
        ],
        "verdict": "bad"
      },
      "caption": "同じ手でも、席でプレイの価値が変わります。"
    },
    {
      "t": "range",
      "spot": "rfi-btn",
      "caption": "BTNのオープンレンジの目安。"
    },
    {
      "t": "h",
      "text": "BTNが3betされたら"
    },
    {
      "t": "p",
      "text": "3betされたBTNは位置があるので、AQs、JJ、TT、スーテッドコネクターなどをコールで続けられます。"
    },
    {
      "t": "p",
      "text": "ただし、ブラインドの3betレンジが強い相手には、コールを減らして4betか降りるかに分けましょう。"
    },
    {
      "t": "odds",
      "pot": 4,
      "bet": 2.5,
      "equity": 34,
      "caption": "たとえばCOのオープン（2.5bb）にBTNがコールする場面。ポット4bbに対して2.5bbを払うので、必要勝率は約28%です。"
    },
    {
      "t": "quiz",
      "q": "BTNのオープンレンジが最も広い理由は？",
      "options": [
        "後ろの人数が少なく、ポストフロップで最後に動けるから",
        "BTNは配る人だから",
        "ブラインドが免除されるから",
        "スタックが多いから"
      ],
      "answer": 0,
      "explain": "後ろにいるのはブラインドの2人だけで、ポストフロップでは常に位置があります。"
    },
    {
      "t": "quiz",
      "q": "BTN、全員フォールド。7♥6♥はどうする？",
      "options": [
        "オープンする",
        "フォールドする",
        "リンプする"
      ],
      "answer": 0,
      "explain": "スーテッドコネクターは、位置があるときに価値が上がる代表的な手です。",
      "hand": [
        "7h",
        "6h"
      ]
    },
    {
      "t": "estimate",
      "q": "BTNがオープンし、SBとBBが降りた。BTNが得るのは何bb？",
      "min": 0,
      "max": 5,
      "step": 0.5,
      "unit": "bb",
      "answer": 1.5,
      "tolerance": 0.5,
      "explain": "SBの0.5bbとBBの1bbで合計1.5bbです。"
    },
    {
      "t": "estimate",
      "q": "ポット4bbのところにCOが2.5bbオープン。BTNがコールするのに必要な勝率は？",
      "min": 0,
      "max": 60,
      "step": 1,
      "unit": "%",
      "answer": 28,
      "tolerance": 4,
      "explain": "2.5 ÷（4 + 2×2.5）= 2.5 ÷ 9 ≈ 28%です。"
    }
  ]
};

export default lesson;
