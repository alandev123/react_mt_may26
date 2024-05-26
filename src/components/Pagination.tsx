import React from 'react';
import { Pagination } from 'react-bootstrap';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalImages:number;
  setCurrentPage: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalImages,
  setCurrentPage,
}) => {
  const PrevBtn: React.FC = () => {
    return (
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        «
      </Pagination.Prev>
    );
  };

  const NextBtn: React.FC = () => {
    return (
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        »
      </Pagination.Next>
    );
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
    <p>Search result for Cars stock Photos and Images ({totalImages})</p>
    <Pagination>
      <Pagination.Item disabled>{`Page ${currentPage} of ${totalPages}`}</Pagination.Item>
      <PrevBtn />
      <NextBtn />
    </Pagination>
  </div>
  );
};

export default PaginationComponent;
