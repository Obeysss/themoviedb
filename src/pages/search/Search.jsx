import React, { useState, useEffect } from "react";
import "./Search.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const { t } = useTranslation();
  const [searchValue, setsearchValue] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const backgrounds = [
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hreiLoPysWG79TsyQgMzFKaOTF5.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/bcT8CaBIj086WVD7K529h78eujb.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/7VrRna8S3x6xbijooeBmxqvHXiu.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/6LfVuZBiOOCtqch5Ukspjb9y0EB.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/fgYfch0MGfNEpgzPst49ThKUqA4.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/VlHt27nCqOuTnuX6bku8QZapzO.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/r2NcIZ1FPMlxCty3vRITVTgGNVS.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/sfjqJDmNqMIImO5khiddb9TARvO.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg",
      "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/ayUMWKe6Wow5ixLlKxxlp7IqTiI.jpg",
    ];

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomBackground = backgrounds[randomIndex];

    const searchBackground = document.querySelector(".serach-background-image");
    searchBackground.style.backgroundImage = `linear-gradient(to right, rgba(3, 37, 65, 0.84) 0%, rgba(3, 37, 65, 0) 100%), url('${randomBackground}')`;
  }, []);

  function searchFunction() {
    navigate(`search/${searchValue}`);
  }

  function keypresshandler(event) {
    if (event.key === "Enter") {
      searchFunction();
    }
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
          onKeyPress={keypresshandler}
        />
        <button onClick={searchFunction} className="search-btn_search">
          {t("search")}
        </button>
      </div>
    </div>
  );
}
