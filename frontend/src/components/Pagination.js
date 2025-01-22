// src/components/Pagination.js

import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);  // Thay đổi trang khi người dùng nhấn vào trang khác
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      {generatePageNumbers()}
    </div>
  );
}

export default Pagination;
