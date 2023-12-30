import React from "react";
import "./currentPage.scss";

const CurrentPage = ({ title }) => {
  return (
    <div className="currentPage">
      <span className="mainOne">Accueil .</span>
      <span className="currentOne">{title} </span>
    </div>
  );
};

export default CurrentPage;
