import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Paginations = ({ page, active }) => {
  const [disabledLeft, setDisabledLeft] = useState(false);
  const [disabledRight, setDisabledRight] = useState(false);
  // const [active, setActive] = useState(false);

  const [minPage] = useState(0);
  const [maxPage] = useState(5);
  const { totalPage, currentPage } = useSelector(
    (state) => state.courseReducer
  );

  useEffect(() => {
    if (Number(currentPage) === 1) {
      setDisabledLeft(true);
    }
    if (totalPage === Number(currentPage)) {
      setDisabledRight(true);
    }
  }, [currentPage, totalPage]);

  let paginationArr = [];

  for (let i = minPage + 1; i <= totalPage + minPage; i++) {
    paginationArr.push(i);
  }

  const renderPaginations = paginationArr.map((number) => {
    if (number < maxPage + 1 && number > minPage) {
      return (
        <PaginationItem
          disabled={true}
          key={number}
          active={active}
          className={Number(currentPage) === Number(number) ? "active" : null}
        >
          <Link to={`/course/?page=${Number(number)}`}>{number}</Link>
        </PaginationItem>
      );
    } else {
      return null;
    }
  });
  return (
    <Pagination aria-label="Page navigation PaginationHome">
      <PaginationItem disabled={disabledLeft}>
        <PaginationLink first href={`/course/?page=${Number(1)}`} />
      </PaginationItem>
      <PaginationItem disabled={disabledLeft}>
        <PaginationLink previous href={`/course/?page=${Number(page) - 1}`} />
      </PaginationItem>

      {renderPaginations}

      <PaginationItem disabled={disabledRight}>
        <PaginationLink href={`/course/?page=${Number(page) + 1}`} next />
      </PaginationItem>
      <PaginationItem disabled={disabledRight}>
        <PaginationLink href={`/course/?page=${Number(totalPage)}`} last />
      </PaginationItem>
    </Pagination>
  );
};

export default Paginations;
