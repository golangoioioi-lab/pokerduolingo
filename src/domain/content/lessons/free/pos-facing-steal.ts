import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  "id": "pos-facing-steal",
  "blocks": [
    {
      "t": "p",
      "text": "BTNやCOからのオープンは、ブラインドを取りに来ている（スチール）場合が多く、レンジが広い傾向があります。ブラインドは払うコストが小さい代わりに、ポストフロップで位置がありません。"
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
          "action": "未行動",
          "bet": 0.5
        },
        {
          "pos": "BB",
          "hero": true,
          "action": "判断",
          "bet": 1,
          "cards": [
            "Ac",
            "4c"
          ]
        }
      ],
      "pot": 4,
      "caption": "BTNのオープンに、SBとBBが直面します。"
    },
    {
      "t": "h",
      "text": "3つの選択肢"
    },
    {
      "t": "list",
      "items": [
        "3bet：強い手と、ブロッカー付きのブラフ（A5sなど）",
        "コール：スーテッドや連続した手など、ポストフロップで勝率を実現しやすい手",
        "フォールド：支配されやすい弱い手"
      ]
    },
    {
      "t": "p",
      "text": "SBは後ろにBBがいて位置もないので、コールを減らして3betか降りるかに分けます。BBは追加額が小さいので、コールの範囲が広くなります。"
    },
    {
      "t": "range",
      "spot": "bb-vs-btn",
      "caption": "BBの対応の目安。"
    },
    {
      "t": "range",
      "spot": "sb-vs-btn",
      "caption": "SBの対応の目安。"
    },
    {
      "t": "h",
      "text": "3betのサイズ"
    },
    {
      "t": "p",
      "text": "位置がない側の3betは、オープンの4倍強にします。BTN 2.5bbオープンなら11bb前後で、BTNが安くコールして位置を使うのを防ぎます。"
    },
    {
      "t": "compare",
      "left": {
        "title": "BBでA4sを3bet",
        "cards": [
          "Ac",
          "4c"
        ],
        "points": [
          "Aのブロッカーで相手のAA、AKを減らす",
          "コールされてもナッツフラッシュの可能性",
          "フォールドされれば4bb+を獲得"
        ],
        "verdict": "good"
      },
      "right": {
        "title": "BBでK6oをコール",
        "cards": [
          "Kd",
          "6s"
        ],
        "points": [
          "Kが相手のK7+などに支配される",
          "ポストフロップで勝率を実現しにくい",
          "位置もない"
        ],
        "verdict": "bad"
      },
      "caption": "3betに向く手と、降りたほうがよい手。"
    },
    {
      "t": "tip",
      "text": "スチールに対して、ブラインドが降りすぎると、BTNは何でも開けて利益を出します。守る頻度を一定に保つことで、相手に簡単に取らせません。"
    },
    {
      "t": "quiz",
      "q": "BTN 2.5bbオープンに対して、SB（位置なし）の基本的な方針は？",
      "options": [
        "3betかフォールドを中心にする",
        "何でもコール",
        "何でもオールイン",
        "リンプする"
      ],
      "answer": 0,
      "explain": "SBはコールするとポストフロップで不利なので、3betか降りるかに分けるのが基本です。"
    },
    {
      "t": "estimate",
      "q": "BTN 2.5bbオープンに、BBが3betするサイズの目安は？",
      "min": 0,
      "max": 30,
      "step": 0.5,
      "unit": "bb",
      "answer": 11,
      "tolerance": 2,
      "explain": "位置がない側はオープンの4倍強の大きめにして、BTNが安くコールできないようにします。"
    },
    {
      "t": "quiz",
      "q": "BBでA♣4♣。BTNが2.5bbオープン。",
      "options": [
        "3betのブラフ候補",
        "必ずフォールド",
        "オールイン"
      ],
      "answer": 0,
      "explain": "Aを持つと相手のAA、AKが減り、スーテッドならナッツフラッシュの可能性もあります。",
      "hand": [
        "Ac",
        "4c"
      ]
    },
    {
      "t": "quiz",
      "q": "BBがBTNのオープンにフォールドしやすいのは？",
      "options": [
        "K6o",
        "76s",
        "A5s",
        "98s"
      ],
      "answer": 0,
      "explain": "K6oは相手のK7+などに支配され、位置もありません。スーテッドの手は続けやすくなります。",
      "optionCards": [
        [
          "Kd",
          "6s"
        ],
        [
          "7h",
          "6h"
        ],
        [
          "As",
          "5s"
        ],
        [
          "9h",
          "8h"
        ]
      ]
    }
  ]
};

export default lesson;
