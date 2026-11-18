import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-utg",
  "blocks": [
    {
      "t": "p",
      "text": "UTG（アンダー・ザ・ガン）はプリフロップで最初に行動する席です。後ろにHJ、CO、BTN、SB、BBの5人がいて、フロップ以降もほとんど先に動きます。"
    },
    {
      "t": "p",
      "text": "このため、UTGのオープンレンジは6つの席の中で最も狭くなります。目安は全体の15%前後です。"
    },
    {
      "t": "seats",
      "seats": [
        {
          "pos": "UTG",
          "hero": true,
          "action": "オープン 2.5bb",
          "bet": 2.5,
          "cards": [
            "Ah",
            "Qs"
          ]
        },
        {
          "pos": "HJ",
          "action": "未行動"
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
      "caption": "UTGは5人を残して行動します。"
    },
    {
      "t": "h",
      "text": "なぜ狭くするのか"
    },
    {
      "t": "p",
      "text": "たとえばUTGからKJoで開くと、続けてくる相手のAK、KQ、AJにKが支配されて、ペアを作っても負けやすくなります。"
    },
    {
      "t": "p",
      "text": "AA〜TT、AK、AQsは後ろに誰がいても強いままです。UTGはこれを中心に、スーテッドとペアで補います。"
    },
    {
      "t": "combos",
      "groups": [
        {
          "label": "ペア（77+）",
          "hands": [
            "AA",
            "KK",
            "QQ",
            "JJ",
            "TT",
            "99",
            "88",
            "77"
          ]
        },
        {
          "label": "スーテッド",
          "hands": [
            "AKs",
            "AQs",
            "AJs",
            "ATs",
            "KQs",
            "KJs",
            "QJs",
            "JTs"
          ]
        },
        {
          "label": "オフスート",
          "hands": [
            "AKo",
            "AQo",
            "KQo"
          ]
        }
      ],
      "caption": "UTGの中心になる手。合計116コンボで、全体（1326コンボ）の約9%です。実際のレンジには、ここに66以下の一部やA5sなどが加わります。"
    },
    {
      "t": "range",
      "spot": "rfi-utg",
      "caption": "UTGのオープンレンジの目安。"
    },
    {
      "t": "h",
      "text": "サイズとその後"
    },
    {
      "t": "p",
      "text": "サイズは2.5bbが基本です。小さすぎても大きすぎても得をしません。"
    },
    {
      "t": "p",
      "text": "3betされたら相手のレンジは強い手に偏っています。AA〜QQとAKは続け、AJsやTTのような手は相手とスタックを見て判断します。"
    },
    {
      "t": "quiz",
      "q": "UTGのレンジが最も狭い理由として正しいものは？",
      "options": [
        "後ろに行動するプレイヤーが5人いるから",
        "UTGは配られるカードが悪いから",
        "ブラインドを払っていないから",
        "ディーラーに近いから"
      ],
      "answer": 0,
      "explain": "後ろに残る人数が多いほど、誰かが強い手を持つ確率が上がり、フロップ以降も先に動きます。そのため強い手に絞ります。"
    },
    {
      "t": "quiz",
      "q": "UTGでK♥J♦。オープンしますか？",
      "options": [
        "フォールド寄り。AK、KQ、AJに支配されやすい",
        "オープンする。Kが入っているから",
        "オープンする。ポジションが良いから"
      ],
      "answer": 0,
      "explain": "KJoは続けてくる相手のAK、KQ、AJに負けやすい手です。ペアを作っても支配されるため、UTGではフォールド寄りです。",
      "hand": [
        "Kh",
        "Jd"
      ]
    },
    {
      "t": "estimate",
      "q": "UTGが2.5bbオープンし、BBだけがコール（SBは降りた）。ポットは何bb？",
      "min": 0,
      "max": 12,
      "step": 0.5,
      "unit": "bb",
      "answer": 5.5,
      "tolerance": 0.5,
      "explain": "2.5 + 2.5 + SBの0.5 = 5.5bbです。SBが降りても0.5bbはポットに残ります。"
    },
    {
      "t": "quiz",
      "q": "UTGから開けやすいのはどれ？",
      "options": [
        "AQs",
        "KTo",
        "85o",
        "J4o"
      ],
      "answer": 0,
      "explain": "AQsは後ろの強い手にも負けにくい手です。KTo、85o、J4oはUTGでは外します。",
      "optionCards": [
        [
          "As",
          "Qs"
        ],
        [
          "Kd",
          "Th"
        ],
        [
          "8c",
          "5d"
        ],
        [
          "Js",
          "4h"
        ]
      ]
    },
    {
      "t": "try",
      "text": "レンジ表でUTGのオープンレンジを確認しましょう。",
      "tab": "ranges"
    }
  ]
};

export default lesson;
