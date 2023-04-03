import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

let BaseURL = 'https://shooliniuniversity.com/media/'

const Searchmenu = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState(null)

  var results_d = []

  const searchHandler = async (e) => {
    e.preventDefault()
    // let path = `/programe-searched`;
    // navigate(path);
    let { data } = await axios.post(`${BaseURL}/SearchAPI`, {
      auth: 'shoolini@999',
      keywords: searchTerm,
    })

    results_d = data?.success
    console.log(results_d)
    setSearchResults([results_d, searchTerm])
  }

  return (
    <>
      <div className="search-wrap" id="search-wrap">
        <div
          className="search-overlay custom-overlay"
          id="search-overlay"
        ></div>
        <div className="search-inner">
          <form
            onSubmit={searchHandler}
            style={{ textalign: 'center' }}
            method="get"
            className="search-form"
            encType="multipart/form-data"
          >
            <img
              style={{ width: '200px', margin: 'auto' }}
              src="assets/images/logo.png"
            />
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              autoComplete="off"
              name="search"
              placeholder="Search Programme...."
            />

            <div class="input-group-append">
              <Link 
               class="input-group-text"
               id="basic-addon2"
               onClick={searchHandler}
               style={{ cursor: 'pointer' }}
              href="/programe-searched">
              
                  <i class="fas fa-search"></i>
              
              </Link>
            </div>

            <i className="las la-times close-btn" id="search-close"></i>
          </form>
        </div>
      </div>
    </>
  )
}

export default Searchmenu
