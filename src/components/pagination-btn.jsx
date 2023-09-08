export function PaginationBtn({index, active, handleBtn}) {
  const className = active
          ? 'pagination__btn pagination__btn--active'
          : 'pagination__btn';

  return (
    <button
      className={className}
      onClick={() => handleBtn(index)}
    >
      {index}
    </button>
  );
}