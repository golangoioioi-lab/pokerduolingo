import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'rb-blinds-pot',
  blocks: [
  {
    "t": "p",
    "text": "ポーカーは、毎回ポットにお金を出すところから始まります。その仕組みと、計算に使う単位を整理します。"
  },
  {
    "t": "h",
    "text": "ブラインドとbb"
  },
  {
    "t": "p",
    "text": "SBは0.5bb、BBは1bbです。bb（ビッグブラインド）は金額の単位で、100bbならBBの100倍。レートが違っても、bbで考えれば同じように判断できます。"
  },
  {
    "t": "seats",
    "seats": [
      {
        "pos": "SB",
        "bet": 0.5,
        "action": "SB"
      },
      {
        "pos": "BB",
        "bet": 1,
        "action": "BB"
      }
    ],
    "pot": 1.5,
    "caption": "カードを配る時点でのポットは1.5bb。"
  },
  {
    "t": "h",
    "text": "ポットはどう増えるか"
  },
  {
    "t": "p",
    "text": "BTNが2.5bbにオープンし、BBだけがコールした場合を考えます。ポットは 2.5 + 2.5 + 0.5（SBが捨てた分）= 5.5bb です。ここからのベットで、ポットとスタックの関係が変わります。"
  },
  {
    "t": "pot",
    "steps": [
      {
        "label": "プリフロップ後",
        "pot": 5.5,
        "stack": 97.5
      },
      {
        "label": "フロップ（3.5bbベット→コール）",
        "pot": 12.5,
        "stack": 94
      },
      {
        "label": "ターン（9bbベット→コール）",
        "pot": 30.5,
        "stack": 85
      }
    ],
    "caption": "SPR（残りスタック÷ポット）が小さくなっていく。"
  },
  {
    "t": "p",
    "text": "SPRは、スタックがポットの何倍残っているかの指標です。SPRが小さいほど、少ないベットでオールインに近づきます。"
  },
  {
    "t": "h",
    "text": "ポットに対するベット額"
  },
  {
    "t": "p",
    "text": "ベットの大きさは「ポットの何割か」で表すのが一般的です。ポット12bbに6bbなら、ポットの半分（1/2ポット）です。"
  },
  {
    "t": "formula",
    "text": "ベット比率 = ベット額 ÷ ポット",
    "note": "ポット12bbに6bbのベット → 6 ÷ 12 = 1/2ポット"
  },
  {
    "t": "estimate",
    "q": "SBとBBが払った額の合計は何bb？",
    "min": 0,
    "max": 5,
    "answer": 1.5,
    "tolerance": 0.25,
    "explain": "SBが0.5bb、BBが1bbなので合計1.5bbです。",
    "unit": "bb",
    "step": 0.5
  },
  {
    "t": "estimate",
    "q": "ポット20bbに10bbのベットは、ポットの何%？",
    "min": 0,
    "max": 150,
    "answer": 50,
    "tolerance": 10,
    "explain": "10 ÷ 20 = 0.5 なので1/2ポット（50%）です。",
    "unit": "%",
    "step": 5
  },
  {
    "t": "estimate",
    "q": "BTNが2.5bbでオープンし、BBだけがコール。ポットは何bb？",
    "min": 0,
    "max": 12,
    "answer": 5.5,
    "tolerance": 0.5,
    "explain": "BTNの2.5 + BBの2.5 + SBの0.5 = 5.5bbです。",
    "hand": [
      "Ts",
      "9s"
    ],
    "unit": "bb",
    "step": 0.5
  },
  {
    "t": "estimate",
    "q": "スタック100bb、ポット25bbのときのSPRは？",
    "min": 0,
    "max": 10,
    "answer": 4,
    "tolerance": 0.5,
    "explain": "SPR = 100 ÷ 25 = 4 です。",
    "step": 0.5
  },
  {
    "t": "quiz",
    "q": "bbを単位に使う利点は？",
    "options": [
      "レートが違っても同じ感覚で判断できる",
      "計算が不要になる",
      "ルールで決まっている",
      "必ず勝てる"
    ],
    "answer": 0,
    "explain": "金額ではなくBBの倍数で考えると、どのレートでも同じ基準で判断できます。"
  }
],
};

export default lesson;
