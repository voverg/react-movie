import { useState } from 'react';
import { PaginationBtn } from './pagination-btn.jsx';

export function Pagination({onCurrentPage, pageCount = 5}) {
  let paginationArr = Array(pageCount).fill(0);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleBtn = (pageNumber) => {
    setActiveIndex(pageNumber)
    onCurrentPage(pageNumber);
  }

  paginationArr = paginationArr.map((item, index) => {
    return <PaginationBtn
        key={index}
        index={index + 1}
        active={index + 1 === activeIndex}
        handleBtn={handleBtn}
      />;
  });

  let firstBtn = null;
  let lastBtn = null;
  const activeBtn = paginationArr.filter((btn) => btn.props.active)[0];
  let averageBtns = paginationArr;

  if (paginationArr.length > 10 && (activeIndex >= 10 && activeIndex <= paginationArr.length) ) {
    firstBtn = paginationArr[0];
    lastBtn = paginationArr[paginationArr.length - 1];

    let start = parseInt(activeIndex / 10) * 10;
    console.log('start:', start);
    console.log('остаток от деления',activeIndex % 10);
    if (activeIndex >= start + 8) {
      start += 9;
    } else if (activeIndex >= paginationArr.length) {
      start = activeIndex - 8;
    }
    averageBtns = paginationArr.slice(start, start + 8);
    // console.log(averageBtns);
  }

  return (
    <div className="pagination">
      {firstBtn}
      {averageBtns}
      {lastBtn}
    </div>
  );
}