import { RANKS } from '../poker/cards';
import { POSITIONS, type Freq, type Spot } from '../poker/ranges';

export interface Explanation {
  points: string[];
  lesson: { id: string; title: string };
}

/** Rule-based "why" for a preflop decision. Generic study notes, not solver reasoning. */
export function explainHand(spot: Spot, label: string, freq: Freq | undefined): Explanation {
  const raise = freq?.raise ?? 0;
  const call = freq?.call ?? 0;
  const fold = Math.max(0, 1 - raise - call);
  const points: string[] = [];

  // ---- spot context ----
  if (spot.kind === 'rfi') {
    const behind = 5 - POSITIONS.indexOf(spot.hero);
    if (spot.hero === 'SB') {
      points.push('SBのオープンはBBとの1対1。参加は広めですが、フロップ以降は常に先に行動するので、BTNほどは広げられません。');
    } else if (behind >= 4) {
      points.push(`${spot.hero}は後ろに${behind}人残っています。誰かが強い手を持っている確率が高く、ポジションも不利になりやすいので、レンジはタイトにします。`);
    } else {
      points.push(`${spot.hero}は後ろが${behind}人だけ。ブラインドを奪える確率が上がり、ポジションも取りやすいので、前のポジションよりレンジを広げられます。`);
    }
  } else if (spot.hero === 'BB') {
    points.push('BBはすでに1bb払っているので、2.5bbオープンにはあと1.5bbでコールでき、必要な勝率は約27%。広くディフェンスします。ただしポジションがないので、弱いオフスートはフォールドします。');
  } else if (spot.hero === 'SB') {
    points.push('SBでコールすると、ポジションがないうえに後ろのBBにも参加されやすくなります。そのため「3betかフォールド」が基本です。');
  } else {
    points.push(`${spot.opener}のオープンに対し、${spot.hero}はポジションがあります。中くらいの強さの手はコール、強い手とブロッカーのある手は3betに回します。`);
  }

  // ---- hand characteristics ----
  const hi = RANKS.indexOf(label[0]);
  const lo = RANKS.indexOf(label[1]);
  const pair = label.length === 2;
  const suited = label[2] === 's';
  const gap = hi - lo;
  // Whether the hand note below describes strengths (vs. weaknesses).
  let positive = true;

  if (pair) {
    if (hi >= 8) points.push(`${label}はプレミアムペア。プリフロップで大きなエクイティがあり、ポットを大きくしたいハンドです。`);
    else if (hi >= 4) points.push(`${label}はミドルペア。そのままでも勝てることがあり、セットになればさらに大きく勝てます。`);
    else points.push(`${label}のような小さいペアの価値は、主にセットを引くこと（フロップで約12%）。大きなポットを勝てる見込み（インプライドオッズ）が必要です。`);
  } else if (label[0] === 'A') {
    if (suited && lo <= 3) points.push(`${label}は、Aのブロッカー（相手のAA・AKを減らす）、ナッツフラッシュ、A-5のストレートの可能性を持つ、ブラフやオープンの好候補です。`);
    else if (suited && lo >= 8) points.push(`${label}は高いキッカーのスーテッドA。トップペアでも強く、ナッツフラッシュも狙えます。`);
    else if (suited) points.push(`${label}はナッツフラッシュの可能性がありますが、キッカーが中途半端で、ストレートにもなりにくいハンドです。`);
    else if (lo >= 8) points.push(`${label}は強いオフスートのA。トップペアで良いキッカーになりやすい手です。`);
    else {
      positive = false;
      points.push(`${label}はキッカーが弱く、Aを持つ相手に負けている（ドミネートされている）ことが多い手。オフスートなのでプレイアビリティも低めです。`);
    }
  } else if (hi >= 8 && lo >= 8) {
    points.push(suited
      ? `${label}は高いカード2枚のスーテッド。トップペア・ストレート・フラッシュと多くの形で勝てます。`
      : `${label}はオフスートのブロードウェイ。トップペアを作りやすい一方、より強いキッカーにドミネートされやすい点に注意。`);
  } else if (suited && gap <= 2 && hi <= 9) {
    points.push(`${label}はスーテッドコネクター系。生の強さは低いですが、ストレートやフラッシュで大きなポットを勝てるプレイアビリティがあります。`);
  } else if (suited) {
    points.push(`${label}は高いカード1枚＋スーテッド。フラッシュの可能性で、同じランクのオフスートより価値が高くなります。`);
  } else if (gap <= 2) {
    positive = false;
    points.push(`${label}はオフスートのコネクター。ストレートの可能性はありますが、フラッシュがなく、ペアになっても弱いことが多い手です。`);
  } else {
    positive = false;
    points.push(`${label}はオフスートでつながりもなく、フロップ以降に強い手になりにくいハンドです。`);
  }

  // ---- conclusion ----
  const name = (a: 'raise' | 'call' | 'fold') =>
    a === 'raise' ? (spot.kind === 'rfi' ? 'レイズ' : '3bet') : a === 'call' ? 'コール' : 'フォールド';
  const entries = (['raise', 'call', 'fold'] as const)
    .map((a) => ({ a, f: a === 'raise' ? raise : a === 'call' ? call : fold }))
    .filter((x) => x.f > 0.01)
    .sort((x, y) => y.f - x.f);
  if (entries.length === 1) {
    const only = entries[0].a;
    if (only === 'fold' && positive)
      points.push('ただし、この場面ではレンジの外側です。長所はあっても、相手のレンジやポジションを考えると参加は損になるので**フォールド**します。');
    else if (only !== 'fold' && !positive)
      points.push(`単体では弱く見えますが、この場面では相手のレンジが広い・必要な勝率が低いなどの理由で、**${name(only)}**する方が利益になります。`);
    else points.push(`この場面では常に**${name(only)}**します。`);
  } else {
    points.push(
      `この場面では${entries.map((e) => `${name(e.a)} ${Math.round(e.f * 100)}%`).join('・')}の**混合戦略**。期待値の差が小さいボーダーのハンドです。`,
    );
  }

  let lesson = { id: 'rfi', title: 'オープンレイズ（RFI）の考え方' };
  if (spot.id === 'bb-vs-btn') lesson = { id: 'bb-defense', title: 'BBディフェンス' };
  else if (spot.id === 'sb-vs-btn' || spot.id === 'rfi-sb') lesson = { id: 'sb-play', title: 'SBの戦い方' };
  else if (spot.kind === 'vsOpen') lesson = { id: '3bet', title: '3betの理論：バリューとブラフ' };

  return { points, lesson };
}
