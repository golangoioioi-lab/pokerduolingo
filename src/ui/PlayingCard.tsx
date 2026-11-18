import { RANKS, SUIT_SYMBOLS, rankOf, suitOf, type Card } from '../domain/poker/cards';

interface Props {
  card?: Card | null;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  placeholder?: string;
}

export default function PlayingCard({ card, size = 'md', onClick, placeholder }: Props) {
  const Tag = onClick ? 'button' : 'div';
  if (card === null || card === undefined) {
    return (
      <Tag className={`pcard pcard-${size} pcard-empty`} onClick={onClick} type={onClick ? 'button' : undefined}>
        {placeholder ?? '+'}
      </Tag>
    );
  }
  const s = suitOf(card);
  const r = RANKS[rankOf(card)];
  return (
    <Tag className={`pcard pcard-${size} suit-${s}`} onClick={onClick} type={onClick ? 'button' : undefined}>
      <span className="pcard-rank">{r === 'T' ? '10' : r}</span>
      <span className="pcard-suit">{SUIT_SYMBOLS[s]}</span>
    </Tag>
  );
}
