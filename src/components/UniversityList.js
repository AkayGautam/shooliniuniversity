import React, { Component, Fragment, useEffect } from 'react'
import Datas from '../data/ranked-universities/universities-list.json'
import { Col, Table } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const UniversityList = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Fragment>
      {/* Course Item */}
      {
        <div data-aos="fade-up" className="listCard">
          <div className="table-responsive">
            <Table size="sm">
              <thead>
                <tr>
                  <th>Insitution</th>
                  <th>
                    FWCI <br /> Score
                  </th>
                  <th>
                    Citation <br />
                    Per Publication
                  </th>
                  <th>
                    Publications in Top 1% <br /> Most Cited Worldwide
                  </th>
                </tr>
              </thead>
              <tbody>
                {Datas.map((data, i) => (
                  <tr key={i}>
                    <td>{data.Insitution}</td>
                    <td>{data.score}</td>
                    <td>{data.citations}</td>
                    <td>{data.publications}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="tableContent">
              <h4>
                *FWCI ( Field weighted Citation Score ) is an indication of the
                contribution of a University to the sum of human knowledge – and
                signals research that has stood out and is shared across the
                global community of researchers.
              </h4>
              <p>
                The table indicates the FWCI and research parameters of select
                universities ,tracked by us for comparison, for the period 2017
                -2019 :and it is possible there are institutions across the
                globe as well as in the country with higher scores on similar
                indexes.{' '}
              </p>
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default UniversityList
