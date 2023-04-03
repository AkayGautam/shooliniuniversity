import React, { useState } from 'react'
import { Styles } from '../components/common/styles/search'
import { useRouter } from 'next/router'
const SearchResearcher = () => {
  const [searchTerm, setSearchTerm] = useState(null)
  const router = useRouter()

  const styles = {
    display: 'inline',
    width: '30%',
    height: 50,
    float: 'left',
    padding: 5,
    border: '0.5px solid black',
    marginBottom: 10,
    marginRight: 10,
  }

  const searchHandler = async (e) => {
    e.preventDefault()
    router.push(`/search?q=${searchTerm}`)
  }

  return (
    <>
      <Styles>
        <section className="breadcrumbs">
          <div className="">
            <div className="searchForm">
              <div className="course-search">
                <h5>Search Program</h5>
                <form
                  className="row"
                  id="search-form"
                  onSubmit={searchHandler}
                  encType="multipart/form-data"
                >
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search eg: bcom"
                  />
                  <button
                    id="basic-addon2"
                    onClick={searchHandler}
                    type="submit"
                  >
                    <i className="las la-search"></i>
                  </button>

                 

              

                </form>

                <div className="apply-btns onMobiledNone">
                          <a
                            href="https://admissions.shooliniuniversity.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Apply Now
                          </a>
                        </div>

              </div>
            </div>
          </div>
        </section>
      </Styles>
    </>
  )
}

export default SearchResearcher
