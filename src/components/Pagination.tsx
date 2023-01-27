import React from "react";

interface Props {
    data: any[];
    start: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    itemsPerPage: number;
    setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({ data, start, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage }) => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const handleClick = (page: number) => {
        if (page < 1) {
          setCurrentPage(1);
        } else if (page * itemsPerPage > data.length) {
          setCurrentPage(Math.ceil(data.length / itemsPerPage));
        } else {
          setCurrentPage(page);
        }
      };
    

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(parseInt(e.target.value));
        if (currentPage < 1) {
          setCurrentPage(1);
        } else if (currentPage * itemsPerPage > data.length) {
          setCurrentPage(Math.ceil(data.length / itemsPerPage));
        } else {
          setCurrentPage(currentPage);
        }
      };
    

    const pageLinks: Array<JSX.Element> = [];
    if (currentPage > 2) {
        pageLinks.push(
            <li key={1} className="page-item" onClick={() => handleClick(1)}>
                <a className="page-link">1</a>
            </li>
        );
    }
    if (currentPage > 3) {
        pageLinks.push(
            <li key={'...'} className="page-item disabled">
                <a className="page-link">...</a>
            </li>
        );
    }
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i >= 1 && i <= totalPages) {
            pageLinks.push(
                <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`} onClick={() => handleClick(i)}>
                    <a className="page-link">{i}</a>
                </li>
            );
        }
    }
    if (currentPage < totalPages - 2) {
        pageLinks.push(
            <li key={'...'} className="page-item disabled">
                <a className="page-link">...</a>
            </li>
        );
    }
    if (currentPage < totalPages - 1) {
        pageLinks.push(
            <li key={totalPages} className="page-item" onClick={() => handleClick(totalPages)}>
                <a className="page-link">{totalPages}</a>
            </li>
        );
    }
    const options: Array<JSX.Element> = [];
    for (let i = 10; i <= 40; i += 10) {
        options.push(
            <option key={i} value={i}>
                {i}
            </option>
        );
    }
    return (
        <div className="pagination-container">
            <div className="items-per-page">
                <label>Showing </label>
                <select className="items-per-page" value={itemsPerPage} onChange={handleSelect}>
                    {options}
                </select> of {data.length}
            </div>
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`} onClick={() => handleClick(currentPage - 1)}>
                    <a className="page-link btn">&lt;</a>
                </li>
                {pageLinks}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} onClick={() => handleClick(currentPage + 1)}>
                    <a className="page-link btn">&gt;</a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;

