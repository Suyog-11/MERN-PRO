import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className="flex justify-between items-center py-4 px-16 bg-gray-100 rounded-md w-full mx-auto">
            <div className="text-gray-700">
                Page No: <span className="font-semibold">{currentPage}</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
                <button
                    className={`font-medium ${currentPage === 1 ? 'text-gray-400' : 'hover:underline'}`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>-</span>
                <button
                    className={`font-medium ${currentPage === totalPages ? 'text-gray-400' : 'hover:underline'}`}
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

            <div className="text-gray-700">
                Total Pages: <span className="font-semibold">{totalPages}</span>
            </div>
        </div>
    );
};

export default Pagination;