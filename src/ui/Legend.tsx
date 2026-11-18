export const ACTION_COLORS = {
  raise: 'var(--app-raise)',
  call: 'var(--app-call)',
  fold: 'var(--app-cell-empty)',
} as const;

export default function Legend({ showCall = true }: { showCall?: boolean }) {
  return (
    <div className="legend">
      <span><i style={{ background: ACTION_COLORS.raise }} />レイズ</span>
      {showCall && <span><i style={{ background: ACTION_COLORS.call }} />コール</span>}
      <span><i style={{ background: ACTION_COLORS.fold }} />フォールド</span>
    </div>
  );
}
