import React, { useEffect, useState } from 'react'
import { Styles } from './style/programmes'
import { BiArrowToRight } from 'react-icons/bi'
import { Table } from 'react-bootstrap'
import { setMetaTags } from '../../helper/setMetaTags'
import Link from 'next/link'

function ProgramSingle({ slug }) {
  const [open, setOpen] = useState(false)
  const [Data, setData] = useState([])
  const [showTable, setShowTable] = useState(false)
  const [facList, setFacList] = useState([])
  const [Gallery, setGallery] = useState([])

  function showData() {
    fetchData()
    setOpen(true)
  }

  function fetchData() {
    fetch('https://shooliniuniversity.com/media/GetcourseAPI', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        auth: 'shoolini@999',
        url: slug,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setData(res.success[0])
        // setMetaTags(res.success[0])
        if (res?.success[0]?.gallery) {
          setGallery(JSON.parse(res?.success[0]?.gallery))
        }
        setFacList(res.success[1].facultydetails)
      })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Styles>
      {/* Sidebar */}
      <a className="nav-link nav-sidebar" id="sidebar-btn" onClick={showData}>
        View More
        <BiArrowToRight />
      </a>

      <div className={`sidebar  ${open && 'opened'}`} id="sidebar-body">
        <div className="side-logo d-flex justify-content-between">
          <div className="sidebarLogo">
            <Link href={'/'}>
              <span>
                <img src={'/assets/images/logo.png'} alt="" />
              </span>
            </Link>
          </div>
          <div>
            <a id="close-sidebar" onClick={() => setOpen(false)}>
              <i className="las la-times"></i>
            </a>
          </div>
        </div>
        <div className="side-content">
          <h5>{Data?.title}</h5>
          <p
            dangerouslySetInnerHTML={{
              __html: Data?.content,
            }}
          ></p>
        </div>
        <div className="side-post text-black">
          <h5>Career Opportunities</h5>
          <p
            dangerouslySetInnerHTML={{
              __html: Data?.career_opportunities,
            }}
          ></p>
        </div>

        {facList && facList.length > 0 && (
          <div className="side-post text-black">
            <h5>Meet The Faculty</h5>
            <div>
              <button
                className="btn btn-primary mb-4"
                onClick={() => setShowTable(!showTable)}
              >
                Show Faculty Members
              </button>
              <Table
                className="tablePro"
                striped
                bordered
                hover
                style={{ display: `${!showTable ? 'none' : 'table'}` }}
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {facList &&
                    facList.map((i, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{i.name}</td>
                          <td>{i.designation}</td>
                          <td>
                            <Link
                              href={`/faculty/profile/${i.name
                                .split(' ')
                                .join('-')}`}
                              state={{ id: i.id }}
                            >
                              <a>View Profile</a>
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </Table>
            </div>
          </div>
        )}

        {Gallery && (
          <div className="side-post text-black">
            <h5>Gallery</h5>
            <div className="row">
              {Data?.gallery &&
                Gallery.map((row, idx) => (
                  <div className="col-md-4 col-4" key={idx}>
                    <div className="cnt-block">
                      <figure>
                        <img
                          src={row?.image_url}
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                      <p>{row?.title}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <div
        className={`sidebar-overlay ${open && 'visible'}`}
        onClick={() => setOpen(false)}
        id="sidebar-overlay"
      ></div>
    </Styles>
  )
}

export default ProgramSingle
