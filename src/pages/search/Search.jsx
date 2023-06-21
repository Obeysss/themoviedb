import React, { useState } from "react";
import "./Search.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const { t } = useTranslation();
  const [searchValue, setsearchValue] = useState(null);
  const navigate = useNavigate();

  function searchFunction() {
    navigate(`search/${searchValue}`);
  }

  return (
    <div>
      <div className="serach-background-image">
        <div className="search-title">{t("welcome")}</div>
        <div className="search-desc">{t("milion_of_movies")}</div>
        <input
          type="text"
          placeholder={t("search_for_movie")}
          className="search-inp_search"
          onInput={(val) => {
            setsearchValue(val.target.value);
          }}
        />
        <button onClick={searchFunction} className="search-btn_search">
          {t("search")}
        </button>
      </div>
    </div>
  );
}
