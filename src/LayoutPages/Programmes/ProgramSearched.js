import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import Header from '../../components/Header'
import { BreadcrumbBox } from '../../components/common/Breadcrumb'
import Footer from '../../components/Footer'
import { Styless } from './styles/course.js'
import Search from '../../components/common/Search'

const ProgramSearched = () => {
  const [searchResults, setSearchResults] = useState([])

  console.log(searchResults, 'data')

  return (
    <>
      <Header />
      <BreadcrumbBox title="Course Details" />

      <Search setSearchResults={setSearchResults} />

      <Styless>
        <section className="inner-page pb-0 pt-0">
          <div className="container">
            <div className="row mainContent">
              <div className="col-md-12 py-5">
                <h3 className="" data-aos="fade-up">
                  {' '}
                  frfrfrfr{' '}
                </h3>
                {searchResults.length > 0 && (
                  <div className="py-2">
                    <h2> Search Results for "{searchResults[1]}" </h2>
                    {searchResults[0].map((i) => {
                      return (
                        <div className="pb-2">
                          <Link href={`/programe-detail?id=${i.courseid}`}>
                            <span
                              className="text-danger  "
                              style={{ cursor: 'pointer', fontSize: 20 }}
                            >
                              {i.title}
                            </span>
                          </Link>

                          {/* <h5 onClick={(e) => handleRow(i.courseid)}>
                                {i.title}
                              </h5> */}
                          <p>{i.excerpt}</p>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Styless>
      <Footer />
    </>
  )
}

export default ProgramSearched
