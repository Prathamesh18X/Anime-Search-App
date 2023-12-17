import React from "react";

export const Pagination = ({
  handlePageChange,
  current_page,
  has_next_page,
}) => {
  return (
    <div className="pagination">
      <button
        className="btn-primary px-3 m-3"
        onClick={() => handlePageChange(current_page - 1)}
        disabled={current_page === 1}
        style={{ display: current_page === 1 ? "none" : "block" }}
      >
        Previous Page
      </button>
      <button
        className="btn-primary px-3 m-3"
        onClick={() => handlePageChange(current_page + 1)}
        disabled={!has_next_page}
        style={{ display: has_next_page ? "block" : "none" }}
      >
        Next Page
      </button>
    </div>
  );
};
