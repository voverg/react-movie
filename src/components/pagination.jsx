import { useState } from 'react';

export function Pagination({onCurrentPage, pageCount = 5}) {
  const paginationArr = Array(pageCount).fill(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleBtn = (event) => {
    const pageNumber = +event.target.dataset.value;
    setCurrentIndex(pageNumber)
    onCurrentPage(pageNumber);
  }

  return (
    <div className="pagination">
      {paginationArr.map((item, index) => {
        const className = index + 1 === currentIndex
          ? 'pagination__btn pagination__btn--active'
          : 'pagination__btn';

        return (<button
                  key={index}
                  className={className}
                  data-value={index + 1}
                  onClick={handleBtn}
                >
                  {index + 1}
                </button>);
      })}
    </div>
  );
}