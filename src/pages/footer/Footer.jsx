import React from "react";
import footerLogo from "../../assets/logo.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="Footer pt-5">
        <div className="container d-flex justify-content-center gap-5">
          <div className="d-flex flex-column gap-5">
            <img src={footerLogo} alt="" className="imgFooter" />
            <Link to={"https://www.themoviedb.org/signup"}>
              <button className="btn btn-light p-2">{t('join_the_community')}</button>
            </Link>
          </div>
          <div className="d-flex flex-column pt-5 gap-1">
            <h3 className="texth3">{t("the_basic")}</h3>
            <p className="text ">{t("about_TMDB")}</p>
            <p className="text ">{t("contact_us")}</p>
            <p className="text ">{t("support_forums")}</p>
            <p className="text ">API</p>
            <p className="text ">{t("system_status")}</p>
          </div>
          <div className="d-flex flex-column pt-5 gap-1">
            <h3 className="texth3">{t("get_involved")}</h3>
            <p className="text ">{t("contribution_bible")}</p>
            <p className="text ">{t("add_new_movie")}</p>
            <p className="text ">{t("add_new_tv_show")}</p>
          </div>
          <div className="d-flex flex-column pt-5 gap-1">
            <h3 className="texth3">{t('community')}</h3>
            <p className="text ">{t('guidelines')}</p>
            <p className="text ">{t('discussions')}</p>
            <p className="text ">{t('leader_board')}</p>
            <p className="text ">{t('twitter')}</p>
          </div>
          <div className="d-flex flex-column pt-5 gap-1">
            <h3 className="texth3">{t('legal')}</h3>
            <p className="text ">{t('terms_of_use')}</p>
            <p className="text ">{t('api_terms_of_use')}</p>
            <p className="text ">{t('privacy_police')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
