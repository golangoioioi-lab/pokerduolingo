import type { LessonBody } from '../../types';

const lesson: LessonBody = {
  id: 'board-ip-oop',
  blocks: [
    { t: 'h', text: 'あなたはIP？ OOP？' },
    {
      t: 'rapid',
      q: 'フロップ以降、自分はIP（後に行動）？ OOP（先に行動）？',
      choices: ['IP', 'OOP'],
      items: [
        { text: 'BTNオープン、BBコール。あなたは**BTN**', answer: 0 },
        { text: 'COオープン、BTNコール。あなたは**CO**', answer: 1, why: 'BTNはフロップ以降いつも最後に行動します。' },
        { text: 'SBオープン、BBコール。あなたは**BB**', answer: 0, why: 'ブラインド同士では、BBがSBより後に行動します。' },
        { text: 'UTGオープン、BBコール。あなたは**UTG**', answer: 0 },
        { text: 'COオープン、BBコール。あなたは**BB**', answer: 1 },
        { text: 'HJオープン、COコール。あなたは**CO**', answer: 0 },
        { text: 'BTNオープン、SBが3bet、BTNコール。あなたは**SB**', answer: 1 },
      ],
    },
    { t: 'h', text: '位置はエクイティの実現を変える' },
    {
      t: 'p',
      text: 'IPは相手の行動を見てから決められるので、同じエクイティでも多く実現できます。OOPは先に動く分、強い手でもチェックが増えます。',
    },
    {
      t: 'compare',
      left: { title: 'IP（BTN）', points: ['相手を見てから決める', 'チェックバックで安く次のカード', 'エクイティを多く実現'], verdict: 'good' },
      right: { title: 'OOP（BB）', points: ['先に行動する', '強い手でもチェックしやすい', '実現率が下がる'], verdict: 'bad' },
      caption: '位置はエクイティの「実現しやすさ」を変える。',
    },
    {
      t: 'equity',
      players: [{ label: 'BTNレンジ', pct: 53 }, { label: 'BBレンジ', pct: 47 }],
      board: ['Ks', '9d', '4c'],
      caption: 'K♠9♦4♣。BTN有利のボードでは、BBはチェックが中心（目安）。',
    },
    {
      t: 'table',
      head: ['ボード', 'BTN（IP）', 'BB（OOP）'],
      rows: [
        ['A・K-highドライ', '小さく高頻度', 'チェック中心'],
        ['低いコネクテッド', '頻度を下げる', 'チェックレイズが増える'],
        ['高いペアボード', '非常に小さく高頻度', 'チェック・コール'],
        ['モノトーン', '小さく頻度を絞る', 'チェック中心'],
      ],
    },
    {
      t: 'pot',
      steps: [
        { label: 'プリフロップ後', pot: 5.5, stack: 97.5 },
        { label: 'フロップ（2bbベット→コール）', pot: 9.5, stack: 95.5 },
      ],
      caption: 'SRPはSPRが約10と深い。位置の差がリバーまで効く。',
    },
    {
      t: 'quiz',
      q: 'このボードで、OOPのBBの基本は？',
      board: ['Ks', '9d', '4c'],
      options: ['常にベット', '常にオールイン', 'チェック中心、強い手でチェックレイズ', '常にフォールド'],
      answer: 2,
      explain: 'レンジ不利と位置の不利が重なるので、チェックから入ります。',
    },
    {
      t: 'estimate',
      q: 'ポット9.5bb、スタック95.5bb。SPRは約いくつ？',
      min: 0,
      max: 30,
      step: 1,
      answer: 10,
      tolerance: 2,
      explain: '95.5 ÷ 9.5 ≈ 10。深いので、位置の差がリバーまで効きます。',
    },
    { t: 'h', text: 'OOPで守ってみる' },
    {
      t: 'play',
      title: 'BBで2番目のペア',
      hero: 'BB',
      heroCards: ['Qd', '9s'],
      villain: 'BTN',
      villainCards: ['Ac', 'Jc'],
      steps: [
        { street: 'プリフロップ', pot: 5.5, say: 'BTNが2.5bbオープン。BBで **Q♦9♠** をコールしました。' },
        {
          street: 'フロップ',
          board: ['Ks', '9d', '4c'],
          pot: 5.5,
          say: 'フロップは **K♠9♦4♣**。2番目のペアです。',
          q: '先に行動します。どうする？',
          options: [
            { label: 'チェック', good: true, why: 'BTN有利のボード。OOPはチェックから入ります。' },
            { label: '4bbベット', good: false, why: '弱い手は降り、Kxにだけ続けられます。' },
          ],
        },
        {
          street: 'フロップ',
          pot: 7.5,
          say: 'BTNが2bbベット。',
          q: 'どうする？',
          options: [
            { label: 'コール', good: true, why: '必要勝率は約21%。BTNは広く打つので、9xで十分続けられます。' },
            { label: 'フォールド', good: false, why: '小さなベットに降りすぎると、BTNに何でも打たれます。' },
            { label: 'チェックレイズ', good: false, why: '降ろせる手は弱く、強い手にだけ続けられます。' },
          ],
        },
        { street: 'ターン', board: ['2h'], pot: 9.5, say: 'ターンは **2♥**。BBチェック、BTNもチェック。' },
        { street: 'リバー', board: ['3c'], pot: 9.5, say: 'リバーは **3♣**。BBチェック、BTNもチェック。' },
      ],
      outro: 'BTNは A♣J♣ のA-high。OOPでもチェックとコールでショーダウンに届けば、9xの価値を実現できます。',
    },
  ],
};

export default lesson;
