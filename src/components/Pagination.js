import { useState } from "react";
import { connect } from "react-redux";
import { sorting } from "../actions/actions";
import "./paginationStyle.css";

const Pagination = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const orderList = [
    { text: "↑ Name Ascending", click: "name_asc" },
    { text: "↓ Name Descending", click: "name_desc" },
    { text: "------------------" },
    { text: "↑ Year Ascending", click: "year_asc" },
    { text: "↓ Year Descending", click: "year_desc" },
  ];

  //pagination

  const dataLimit = 6; //her sayfada 6 veri
  const pageLimit = 5; // pagination butonlarının sayısı
  const [pages] = useState(Math.round(props.filteredData.length / dataLimit)); // kac sayfanın olusacagı
  const [currentPage, setCurrentPage] = useState(1);

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return props.filteredData.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, index) => start + index + 1);
  };

  return (
    <div className="container">
      <nav className="order">
        <button className="button" onClick={toggle}>
          ⇅ Order By
        </button>
        {/* toggle metoduyla acılıp kapanan sort penceresi */}
        {isOpen && (
          <ul className="menu-links" onClick={toggle}>
            {orderList.map((item) => (
              <li
                className="link"
                key={item.text}
                onClick={() => props.sorting(item.click)}
              >
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </nav>
      {/* paginated yapısına göre olusan datanın map edilmesi */}
      {getPaginatedData().map((item) => (
        <div className="wrapper" key={item.name}>
          <div className="top">
            <span>
              {item.country} - {item.city}
            </span>
            <span>{item.email}</span>
          </div>
          <div className="bottom">
            <span>{item.name}</span>
            <span> - {item.year}</span>
          </div>
          <div className="line"></div>
        </div>
      ))}
      <div style={{ marginTop: "5px" }}>
        Number of results:{props.filteredData.length}
      </div>
      <div className="pagination">
        <button
          onClick={() =>
            setCurrentPage((page) => (page === 1 ? page : page - 1))
          }
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Prev
        </button>
        {/* prev ve next butonları arasındaki sayfalama numaraları */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((page) => page + 1)}
          className={`next ${currentPage >= pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    filteredData: state.filteredData,
  };
};

export default connect(mapStateToProps, { sorting })(Pagination);
