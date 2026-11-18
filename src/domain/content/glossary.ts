// Poker glossary. Terms (and aliases) found in lesson text are underlined automatically
// and show this definition on hover (pointer) or long-press (touch).
// Keep definitions short: one or two sentences a beginner can read in a popover.

export interface GlossaryEntry {
  id: string;
  term: string;
  en?: string;
  def: string;
  /** Other spellings that should link to this entry. */
  aliases?: string[];
  /** Latin-script matches need word boundaries; set for abbreviations like "BB". */
  caseSensitive?: boolean;
}

export const GLOSSARY: GlossaryEntry[] = [
  // ---- game basics ----
  { id: 'holdem', term: 'テキサスホールデム', en: "Texas Hold'em", def: '手札2枚と全員共通の場札5枚で役を作るポーカー。最も広く遊ばれている形式。', aliases: ['ホールデム'] },
  { id: 'hand', term: 'ハンド', en: 'Hand', def: '自分に配られた2枚の手札のこと。また、配られてから決着までの1回のゲームを指すこともある。', aliases: ['ホールカード'] },
  { id: 'board', term: 'ボード', en: 'Board', def: '全員が共有して使う場のカード（最大5枚）。コミュニティカードとも言う。', aliases: ['コミュニティカード'] },
  { id: 'pot', term: 'ポット', en: 'Pot', def: 'そのハンドで全員が出したチップの合計。勝った人が受け取る。' },
  { id: 'chip', term: 'チップ', en: 'Chips', def: 'ゲームで賭けに使う点棒。このアプリでは bb 単位で数える。' },
  { id: 'stack', term: 'スタック', en: 'Stack', def: '各プレイヤーの手元にあるチップの量。' },
  { id: 'effective-stack', term: '有効スタック', en: 'Effective stack', def: '対戦する相手同士のうち、少ない方のスタック。実際に奪い合えるのはこの額まで。' },
  { id: 'blind', term: 'ブラインド', en: 'Blinds', def: 'カードを見る前に強制的に出す賭け金。SB が 0.5bb、BB が 1bb。', aliases: ['ビッグブラインド', 'スモールブラインド'] },
  { id: 'bb-unit', term: 'bb', en: 'Big blinds', def: 'ビッグブラインド何枚分か、という金額の単位。100bb、2.5bb のように使う。', caseSensitive: true },
  { id: 'street', term: 'ストリート', en: 'Street', def: '賭けのラウンドの区切り。プリフロップ・フロップ・ターン・リバーの4つ。', aliases: ['ベッティングラウンド'] },
  { id: 'preflop', term: 'プリフロップ', en: 'Preflop', def: '手札2枚だけが配られ、場札がまだ出ていない段階。' },
  { id: 'flop', term: 'フロップ', en: 'Flop', def: '最初に一度に開かれる3枚の場札。また、その後の賭けのラウンド。' },
  { id: 'turn', term: 'ターン', en: 'Turn', def: '4枚目の場札。また、その後の賭けのラウンド。', aliases: ['ターンカード'] },
  { id: 'river', term: 'リバー', en: 'River', def: '5枚目（最後）の場札。この後の賭けが最後のラウンド。' },
  { id: 'showdown', term: 'ショーダウン', en: 'Showdown', def: '最後まで残ったプレイヤーが手札を見せ合い、役の強さで勝者を決めること。' },
  { id: 'split', term: 'スプリット', en: 'Split pot', def: '役が完全に同じ強さで、ポットを分け合うこと。' },
  { id: 'all-in', term: 'オールイン', en: 'All-in', def: '持っているチップをすべて賭けること。' },
  { id: 'six-max', term: '6-max', en: '6-max', def: '最大6人で遊ぶテーブル。オンラインで最も一般的な形式。', caseSensitive: true },

  // ---- actions ----
  { id: 'action', term: 'アクション', en: 'Action', def: '自分の番で選ぶ行動。チェック・ベット・コール・レイズ・フォールドの5種類。' },
  { id: 'check', term: 'チェック', en: 'Check', def: 'チップを出さずに次の人へ回すこと。まだ誰もベットしていないときだけ選べる。' },
  { id: 'bet', term: 'ベット', en: 'Bet', def: 'そのラウンドで最初にチップを出すこと。' },
  { id: 'call', term: 'コール', en: 'Call', def: '直前のベット（レイズ）と同じ額を出して続けること。' },
  { id: 'raise', term: 'レイズ', en: 'Raise', def: '直前のベットより多い額を出すこと。', aliases: ['リレイズ', 'レイザー'] },
  { id: 'fold', term: 'フォールド', en: 'Fold', def: '手札を捨てて降りること。それまでに出したチップは戻らない。' },
  { id: 'limp', term: 'リンプ', en: 'Limp', def: 'プリフロップで誰もレイズしていないときに、レイズせず BB と同額だけコールして参加すること。' },
  { id: 'open', term: 'オープン', en: 'Open raise', def: '前の全員がフォールドした状態で、最初にレイズして参加すること。', aliases: ['オープンレイズ', 'RFI'] },
  { id: '3bet', term: '3bet', en: '3-bet', def: 'プリフロップでオープンレイズに対してさらにレイズすること（BB を1回目の賭けと数えて3回目）。', aliases: ['3ベット'] },
  { id: '4bet', term: '4bet', en: '4-bet', def: '3bet に対してさらにレイズすること。' },
  { id: 'squeeze', term: 'スクイーズ', en: 'Squeeze', def: 'オープンとコールが入った後に 3bet すること。両者に圧力をかけられる。' },
  { id: 'isolate', term: 'アイソレートレイズ', en: 'Isolation raise', def: 'リンプした相手に対してレイズし、1対1の状況を作ること。' },
  { id: 'check-raise', term: 'チェックレイズ', en: 'Check-raise', def: '一度チェックし、相手のベットに対してレイズすること。強い手かセミブラフで使う。' },
  { id: 'cbet', term: 'Cベット', en: 'Continuation bet', def: 'プリフロップで最後にレイズした人が、フロップでも続けてベットすること。', aliases: ['コンティニュエーションベット'] },
  { id: 'barrel', term: 'バレル', en: 'Barrel', def: '前のストリートに続けてベットすること。フロップとターンで続けると「ダブルバレル」。', aliases: ['ダブルバレル'] },
  { id: 'float', term: 'フロート', en: 'Float', def: '後のストリートで奪うことを狙って、弱い手でベットにコールすること。' },
  { id: 'slowplay', term: 'スロープレイ', en: 'Slowplay', def: '強い手をあえて弱く見せ、チェックやコールで相手に打たせること。' },
  { id: 'overbet', term: 'オーバーベット', en: 'Overbet', def: 'ポットより大きい額のベット。' },
  { id: 'defend', term: 'ディフェンス', en: 'Defend', def: '相手のオープンやベットに対して、フォールドせずコールまたはレイズで続けること。' },

  // ---- positions ----
  { id: 'position', term: 'ポジション', en: 'Position', def: 'テーブル上の席順。フロップ以降は後から行動できる席ほど有利。' },
  { id: 'ip', term: 'インポジション', en: 'In position (IP)', def: '相手より後に行動できる状態。情報が多く有利。' },
  { id: 'oop', term: 'アウトオブポジション', en: 'Out of position (OOP)', def: '相手より先に行動しなければならない状態。不利になりやすい。' },
  { id: 'utg', term: 'UTG', en: 'Under the gun', def: 'プリフロップで最初に行動する席。後ろに最も多くの人が残っている。', aliases: ['アンダー・ザ・ガン'], caseSensitive: true },
  { id: 'hj', term: 'HJ', en: 'Hijack', def: 'UTG の次の席（6人卓）。', aliases: ['ハイジャック'], caseSensitive: true },
  { id: 'co', term: 'CO', en: 'Cutoff', def: 'BTN の1つ前の席。後ろは BTN とブラインドだけ。', aliases: ['カットオフ'], caseSensitive: true },
  { id: 'btn', term: 'BTN', en: 'Button', def: 'ディーラーボタンの席。フロップ以降は必ず最後に行動できる最も有利な席。', aliases: ['ディーラーボタン'], caseSensitive: true },
  { id: 'sb', term: 'SB', en: 'Small blind', def: 'BTN の左隣。0.5bb を強制的に出す。フロップ以降は最初に行動する。', caseSensitive: true },
  { id: 'bb', term: 'BB', en: 'Big blind', def: 'SB の左隣。1bb を強制的に出す。安くコールできるがポジションは不利。', caseSensitive: true },
  { id: 'spot', term: 'スポット', en: 'Spot', def: 'ポジションやそれまでのアクションで決まる、判断が必要な1つの状況（例：BTN で全員フォールドして回ってきた場面）。' },
  { id: 'multiway', term: 'マルチウェイ', en: 'Multiway', def: '3人以上でフロップ以降を戦う状況。' },

  // ---- hands and ranks ----
  { id: 'starting-hand', term: 'スターティングハンド', en: 'Starting hand', def: '最初に配られる2枚の組み合わせ。スートを区別しなければ169種類。' },
  { id: 'suited', term: 'スーテッド', en: 'Suited', def: '2枚の手札が同じスート（マーク）であること。AKs のように s を付けて書く。' },
  { id: 'offsuit', term: 'オフスート', en: 'Offsuit', def: '2枚の手札のスートが違うこと。AKo のように o を付けて書く。' },
  { id: 'suit', term: 'スート', en: 'Suit', def: 'カードのマーク。スペード・ハート・ダイヤ・クラブの4種類。' },
  { id: 'pocket-pair', term: 'ポケットペア', en: 'Pocket pair', def: '手札の2枚が同じ数字であること。' },
  { id: 'premium', term: 'プレミアムペア', en: 'Premium pair', def: 'AA・KK・QQ などの非常に強いポケットペア。' },
  { id: 'connector', term: 'コネクター', en: 'Connector', def: '数字が連続している2枚（87 など）。ストレートを作りやすい。' },
  { id: 'suited-connector', term: 'スーテッドコネクター', en: 'Suited connector', def: '同じスートで数字が連続した2枚（87s など）。プレイアビリティが高い。', aliases: ['スーテッド・コネクター'] },
  { id: 'broadway', term: 'ブロードウェイ', en: 'Broadway', def: 'T・J・Q・K・A の高いカード。これらだけの手を指すこともある。' },
  { id: 'kicker', term: 'キッカー', en: 'Kicker', def: '役が同じときに勝敗を決める、役に使われていない残りのカード。' },
  { id: 'top-pair', term: 'トップペア', en: 'Top pair', def: '場札で一番高いカードと手札でペアになっていること。' },
  { id: 'middle-pair', term: 'ミドルペア', en: 'Middle pair', def: '場札の真ん中の高さのカードとペアになっていること。', aliases: ['セカンドペア'] },
  { id: 'overcard', term: 'オーバーカード', en: 'Overcard', def: '場札のどれよりも高い手札のカード。' },
  { id: 'set', term: 'セット', en: 'Set', def: 'ポケットペアが場札の1枚と合わさってできたスリーカード。' },
  { id: 'nuts', term: 'ナッツ', en: 'The nuts', def: 'その時点の場札で作れる最も強い手。' },
  { id: 'nut-flush', term: 'ナッツフラッシュ', en: 'Nut flush', def: 'A を含む、最も強いフラッシュ。' },
  { id: 'wheel', term: 'ホイール', en: 'Wheel', def: 'A-2-3-4-5 のストレート。A を1として使う最も弱いストレート。' },
  { id: 'high-card', term: 'ハイカード', en: 'High card', def: '役がない状態。一番高いカードで強さを比べる。' },
  { id: 'one-pair', term: 'ワンペア', en: 'One pair', def: '同じ数字が2枚の役。' },
  { id: 'two-pair', term: 'ツーペア', en: 'Two pair', def: 'ペアが2組ある役。' },
  { id: 'trips', term: 'スリーカード', en: 'Three of a kind', def: '同じ数字が3枚の役。' },
  { id: 'straight', term: 'ストレート', en: 'Straight', def: '数字が5枚連続した役（スートは問わない）。' },
  { id: 'flush', term: 'フラッシュ', en: 'Flush', def: '同じスートが5枚そろった役。' },
  { id: 'full-house', term: 'フルハウス', en: 'Full house', def: 'スリーカードとワンペアの組み合わせ。' },
  { id: 'quads', term: 'フォーカード', en: 'Four of a kind', def: '同じ数字が4枚の役。' },
  { id: 'straight-flush', term: 'ストレートフラッシュ', en: 'Straight flush', def: '同じスートで数字が5枚連続した、最も強い役。' },
  { id: 'dominated', term: 'ドミネート', en: 'Dominated', def: '相手と同じカードを持ち、キッカーで負けている状態（AJ に対する AK など）。逆転が難しい。' },
  { id: 'air', term: 'エアー', en: 'Air', def: 'ペアもドローもない、何もできていない手。' },

  // ---- draws ----
  { id: 'draw', term: 'ドロー', en: 'Draw', def: 'あと1〜2枚で強い役が完成する、未完成の手。' },
  { id: 'flush-draw', term: 'フラッシュドロー', en: 'Flush draw', def: '同じスートが4枚そろい、あと1枚でフラッシュになる状態。アウツは9枚。' },
  { id: 'straight-draw', term: 'ストレートドロー', en: 'Straight draw', def: 'あと1枚でストレートになる状態。' },
  { id: 'oesd', term: 'オープンエンド', en: 'Open-ended straight draw', def: '4枚連続していて、両端のどちらが来てもストレートになるドロー。アウツは8枚。' },
  { id: 'gutshot', term: 'ガットショット', en: 'Gutshot', def: '間の1つの数字が来たときだけストレートになるドロー。アウツは4枚。' },
  { id: 'backdoor', term: 'バックドア', en: 'Backdoor draw', def: 'ターンとリバーの2枚が両方来て初めて完成するドロー。' },
  { id: 'combo-draw', term: 'コンボドロー', en: 'Combo draw', def: 'フラッシュドローとストレートドローを同時に持つ、アウツの多いドロー。' },
  { id: 'outs', term: 'アウツ', en: 'Outs', def: '自分の手を勝ち手に変える残りのカードの枚数。', aliases: ['ダーティアウツ'] },

  // ---- math ----
  { id: 'equity', term: 'エクイティ', en: 'Equity', def: 'ショーダウンまで進んだ場合に、ポットのうち平均で何％を獲得できるか（≒勝率）。' },
  { id: 'pot-odds', term: 'ポットオッズ', en: 'Pot odds', def: 'コールするのに必要な勝率。コール額 ÷ コール後のポット合計 で計算する。' },
  { id: 'implied-odds', term: 'インプライドオッズ', en: 'Implied odds', def: 'ドローが完成した後に、さらに相手から得られる見込みのチップ。' },
  { id: 'fold-equity', term: 'フォールドエクイティ', en: 'Fold equity', def: 'ベットやレイズで相手を降ろして、その場でポットを取れる見込み。' },
  { id: 'ev', term: '期待値', en: 'Expected value (EV)', def: 'その選択を何度も繰り返したときに、平均して得られる（失う）チップ。', aliases: ['EV'] },
  { id: 'combo', term: 'コンボ', en: 'Combo', def: 'スートまで区別した手札の組み合わせ数。AA は6通り、AKs は4通り、AKo は12通り。', aliases: ['コンボカウント'] },
  { id: 'spr', term: 'SPR', en: 'Stack-to-pot ratio', def: '有効スタック ÷ フロップ時のポット。小さいほど少ない強さの手でもオールインしやすい。', aliases: ['スタック・トゥ・ポット・レシオ'], caseSensitive: true },
  { id: 'mdf', term: 'MDF', en: 'Minimum defense frequency', def: '相手のブラフが自動的に儲からないために、最低限フォールドせずに続けるべき割合。ポット ÷（ポット＋ベット）。', aliases: ['ミニマム・ディフェンス・フリークエンシー'], caseSensitive: true },

  // ---- ranges and strategy ----
  { id: 'range', term: 'レンジ', en: 'Range', def: 'ある状況でプレイヤーが持っている可能性のある手札の集合。' },
  { id: 'range-advantage', term: 'レンジアドバンテージ', en: 'Range advantage', def: 'ボードに対して、レンジ全体の平均的な強さで相手を上回っていること。' },
  { id: 'nut-advantage', term: 'ナッツアドバンテージ', en: 'Nut advantage', def: 'ボードに対して、非常に強い手（ナッツ級）を相手より多く持っていること。' },
  { id: 'capped', term: 'キャップ', en: 'Capped range', def: 'それまでのアクションから、最強クラスの手を持っていないと推測できるレンジの状態。' },
  { id: 'polarized', term: 'ポラライズ', en: 'Polarized', def: '非常に強い手とブラフに二極化したレンジ。中くらいの手は含まない。大きいベットと相性が良い。' },
  { id: 'merged', term: 'マージ', en: 'Merged / linear', def: '強い手から中くらいの手まで連続して含むレンジ。小さいベットと相性が良い。', aliases: ['リニア'] },
  { id: 'value', term: 'バリュー', en: 'Value', def: '相手のより弱い手から払ってもらう目的でベットすること。また、そのための強い手。', aliases: ['バリューベット', 'バリューハンド'] },
  { id: 'thin-value', term: 'シンバリュー', en: 'Thin value', def: 'ぎりぎり勝っている程度の手で、小さく取りにいくバリューベット。' },
  { id: 'bluff', term: 'ブラフ', en: 'Bluff', def: '弱い手でベットやレイズをして、相手に強い手を降ろさせること。' },
  { id: 'semi-bluff', term: 'セミブラフ', en: 'Semi-bluff', def: '今は負けているが、ドローで逆転できる手で行うブラフ。' },
  { id: 'bluff-catch', term: 'ブラフキャッチ', en: 'Bluff catch', def: '相手のブラフにだけ勝てる手でコールすること。' },
  { id: 'blocker', term: 'ブロッカー', en: 'Blocker', def: '自分が持っていることで、相手がその手を持つ組み合わせを減らすカード。' },
  { id: 'showdown-value', term: 'ショーダウンバリュー', en: 'Showdown value', def: 'ベットしなくても、ショーダウンまで行けばそこそこ勝てる強さ。' },
  { id: 'playability', term: 'プレイアビリティ', en: 'Playability', def: 'フロップ以降に強い手やドローになりやすく、扱いやすいかどうか。' },
  { id: 'equity-realization', term: 'エクイティ実現', en: 'Equity realization', def: '持っているエクイティを実際の利益に変えられる度合い。ポジションがないと下がる。', aliases: ['エクイティ実現率'] },
  { id: 'initiative', term: 'イニシアチブ', en: 'Initiative', def: '直前のラウンドで最後にベット・レイズした側が持つ主導権。' },
  { id: 'board-texture', term: 'ボードテクスチャ', en: 'Board texture', def: '場札の性質。ドロー・ペア・スートの偏りなどで分類する。' },
  { id: 'dry', term: 'ドライ', en: 'Dry board', def: 'ドローがほとんどなく、順位が入れ替わりにくいボード（K72 のバラバラなど）。', aliases: ['ドライボード'] },
  { id: 'wet', term: 'ウェット', en: 'Wet board', def: 'ストレートやフラッシュのドローが多く、順位が入れ替わりやすいボード。' },
  { id: 'monotone', term: 'モノトーン', en: 'Monotone', def: '3枚とも同じスートのフロップ。' },
  { id: 'paired-board', term: 'ペアボード', en: 'Paired board', def: '場札に同じ数字が2枚あるボード。' },
  { id: 'free-card', term: 'フリーカード', en: 'Free card', def: '相手がチェックしたことで、追加のチップを払わずに見られる次の場札。' },
  { id: 'geometric', term: 'ジオメトリックサイズ', en: 'Geometric sizing', def: '各ストリートで同じ割合のベットを続けると、リバーでちょうどオールインになるように決めたサイズ。' },
  { id: 'bet-size', term: 'ベットサイズ', en: 'Bet size', def: 'ベットする額。ポットに対する割合（1/3、2/3 など）で表すことが多い。' },
  { id: 'hand-reading', term: 'ハンドリーディング', en: 'Hand reading', def: '相手のアクションから、持っていそうなハンドの範囲（レンジ）を絞り込むこと。' },
  { id: 'gto', term: 'GTO', en: 'Game theory optimal', def: 'ゲーム理論上、相手にどう対応されても損をしない（エクスプロイトされない）戦略。', caseSensitive: true },
  { id: 'nash', term: 'ナッシュ均衡', en: 'Nash equilibrium', def: 'お互いに、自分だけ戦略を変えても得をしない状態。GTO はこれを目指す。' },
  { id: 'solver', term: 'ソルバー', en: 'Solver', def: 'GTO に近い戦略をコンピュータで計算するソフト。' },
  { id: 'mixed', term: '混合戦略', en: 'Mixed strategy', def: '同じ状況・同じ手で、複数のアクションを決まった頻度で使い分けること。' },
  { id: 'exploit', term: 'エクスプロイト', en: 'Exploit', def: '相手の偏りを突いて、GTO から意図的に外れて利益を最大化すること。' },
  { id: 'calling-station', term: 'コーリングステーション', en: 'Calling station', def: 'なかなかフォールドせず、何でもコールしてくる相手。' },
  { id: 'nit', term: 'ニット', en: 'Nit', def: '強い手でしか参加しない、非常にタイトな相手。' },
  { id: 'lag', term: 'ルースアグレッシブ', en: 'Loose-aggressive (LAG)', def: '多くのハンドに参加し、ベット・レイズを多用する相手。' },
  { id: 'fit-or-fold', term: 'フィット・オア・フォールド', en: 'Fit or fold', def: 'フロップで当たらなければすぐ降りる傾向の相手。' },
  { id: 'tight', term: 'タイト', en: 'Tight', def: '参加するハンドを絞っていること。反対はルース。' },
];

// ---- lookup ----
export const GLOSSARY_BY_ID = new Map(GLOSSARY.map((g) => [g.id, g]));

interface Matcher { text: string; id: string; latin: boolean }

const MATCHERS: Matcher[] = GLOSSARY.flatMap((g) =>
  [g.term, ...(g.aliases ?? [])].map((text) => ({ text, id: g.id, latin: /^[A-Za-z0-9-]+$/.test(text) })),
).sort((a, b) => b.text.length - a.text.length); // longest match first

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Latin abbreviations need boundaries ("CO" must not match inside "COMBO"); Japanese
// has no spaces, so katakana/kanji terms match anywhere, longest first.
const PATTERN = new RegExp(
  MATCHERS.map((m) => (m.latin ? `(?<![A-Za-z])${escape(m.text)}(?![A-Za-z])` : escape(m.text))).join('|'),
  'g',
);
const BY_TEXT = new Map(MATCHERS.map((m) => [m.text, m.id]));

export type GlossarySegment = { text: string; id?: string };

/** Splits text into plain runs and glossary-term runs. */
export function splitTerms(text: string): GlossarySegment[] {
  const out: GlossarySegment[] = [];
  let last = 0;
  for (const m of text.matchAll(PATTERN)) {
    const i = m.index ?? 0;
    if (i > last) out.push({ text: text.slice(last, i) });
    out.push({ text: m[0], id: BY_TEXT.get(m[0]) });
    last = i + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last) });
  return out;
}
