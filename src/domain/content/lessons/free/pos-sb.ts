import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-sb",
  "blocks": [
    {
      "t": "p",
      "text": "SB（スモールブラインド）は、フロップ以降は常にBTNの次に動き、BBを除けば最も不利な位置です。すでに0.5bbを払っているので、降りるのが惜しく感じやすい席でもあります。"
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
          "action": "フォールド",
          "folded": true
        },
        {
          "pos": "SB",
          "hero": true,
          "action": "レイズ 3bb",
          "bet": 3,
          "cards": [
            "Kh",
            "Td"
          ]
        },
        {
          "pos": "BB",
          "action": "未行動",
          "bet": 1
        }
      ],
      "pot": 1.5,
      "caption": "全員が降りたSB。相手はBBだけです。"
    },
    {
      "t": "h",
      "text": "全員が降りたとき"
    },
    {
      "t": "p",
      "text": "全員が降りたら、3bb前後にレイズしてBBだけと戦うのが基本です。位置がないので、BBが安く入れないよう少し大きめにします。"
    },
    {
      "t": "p",
      "text": "コールだけ（リンプ）の場合、追加は0.5bbです。"
    },
    {
      "t": "odds",
      "pot": 1.5,
      "bet": 0.5,
      "equity": 35,
      "caption": "ポット1.5bbに0.5bbを足すので、必要勝率は20%です。ただしBBがレイズすることもあり、位置もないため、実際の勝率はもっと低くなります。"
    },
    {
      "t": "p",
      "text": "必要勝率20%は低く見えますが、リンプするとフロップ以降ずっとBBに位置を取られます。レイズかフォールドを軸にしましょう。"
    },
    {
      "t": "range",
      "spot": "rfi-sb",
      "caption": "SBのオープンレンジの目安。"
    },
    {
      "t": "h",
      "text": "BTNのオープンに対して"
    },
    {
      "t": "p",
      "text": "BTNの広いオープンに対して、SBはコールしにくい席です。後ろにBBがいて位置もないので、強い手とA5sのようなブラフ候補を3betし、残りは降ります。"
    },
    {
      "t": "range",
      "spot": "sb-vs-btn",
      "caption": "SBがBTNのオープンに3betする目安。"
    },
    {
      "t": "p",
      "text": "BTNが2.5bbオープンしたとき、SBの追加は2bb、ポットは 2.5 + 0.5 + 1 = 4bb です。"
    },
    {
      "t": "quiz",
      "q": "SBがコールだけで入るのが好まれにくい主な理由は？",
      "options": [
        "フロップ以降ずっと位置がなく、BBもいるから",
        "SBはブラインドを払っているから",
        "コールは禁止されているから",
        "ポットが小さすぎるから"
      ],
      "answer": 0,
      "explain": "SBはポストフロップで常に先に動くので、コールで入ると位置の不利を抱えたまま戦うことになります。"
    },
    {
      "t": "estimate",
      "q": "BTNが2.5bbオープン。SBがコールするのに必要な勝率は？",
      "min": 0,
      "max": 60,
      "step": 1,
      "unit": "%",
      "answer": 25,
      "tolerance": 4,
      "explain": "ポットは 2.5 + 0.5 + 1 = 4bb、追加は 2bb。2 ÷（4 + 4）= 25%です。"
    },
    {
      "t": "quiz",
      "q": "全員フォールド。SBのK♥T♦はどうする？",
      "options": [
        "3bb前後にレイズ",
        "フォールド",
        "リンプ"
      ],
      "answer": 0,
      "explain": "位置がないぶん、BBが安く入れないように3bb前後でレイズします。KToはSBから開けられる手です。",
      "hand": [
        "Kh",
        "Td"
      ]
    },
    {
      "t": "quiz",
      "q": "BTNのオープンに対して、SBが3betのブラフに使いやすいのは？",
      "options": [
        "A5s",
        "K7o",
        "T6o",
        "94o"
      ],
      "answer": 0,
      "explain": "A5sはAのブロッカーを持ち、コールされてもフラッシュやストレートの可能性があります。",
      "optionCards": [
        [
          "As",
          "5s"
        ],
        [
          "Kh",
          "7d"
        ],
        [
          "Tc",
          "6d"
        ],
        [
          "9s",
          "4h"
        ]
      ]
    }
  ]
};

export default lesson;
