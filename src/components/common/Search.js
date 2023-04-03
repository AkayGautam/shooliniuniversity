/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import { Styles } from "./styles/search.js";
import { useRouter } from "next/router";
function Search() {
  const router = useRouter();

  const [searchPages, setsearchPages] = useState(null);

  const searchHandler = async (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchPages}`);
  };

  React.useEffect(() => {
    const searchTrigger = document.getElementById("search-trigger");

    if (searchTrigger) {
      const searchOverlay = document.getElementById("search-overlay");
      const searchWrap = document.getElementById("search-wrap");
      const searchExit = document.getElementById("search-close");

      searchTrigger.addEventListener("click", function (e) {
        e.preventDefault();
        searchWrap.classList.add("active");
      });

      searchOverlay.addEventListener("click", function (e) {
        e.preventDefault();
        searchWrap.classList.remove("active");
      });

      searchExit.addEventListener("click", function (e) {
        e.preventDefault();
        searchWrap.classList.remove("active");
      });
    }
  }, []);

  return (
    <Styles>
      <a href="/" className="nav-link nav-search" id="search-trigger">
        <i className="fa fa-search" aria-hidden="true"></i>
      </a>
      <div className="search-wrap" id="search-wrap">
        <div
          className="search-overlay custom-overlay"
          id="search-overlay"
        ></div>
        <div className="search-inner">
          <form method="get" className="search-form">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              onChange={(e) => setsearchPages(e.target.value)}
              placeholder="Search eg: bcom"
            />

            <button id="basic-addon2" onClick={searchHandler} type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>

            <i className="las la-times close-btn" id="search-close"></i>
          </form>
        </div>
      </div>
    </Styles>
  );
}

export default Search;
