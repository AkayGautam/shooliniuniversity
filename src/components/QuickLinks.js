import React from 'react'
import Link from 'next/link'
import { Styles } from './common/styles/quickLinks'

const QuickLinks = () => {
  return (
    <>
      <Styles>
        <div className="course-category">
          <h5>Quick Links</h5>
          <ul className="category-item list-unstyled">
            <li className="check-btn">
              <Link href="/">
                <a>Placement</a>
              </Link>
            </li>
            <li className="check-btn">
              <Link href="/">
                <a>Life at Shoolini </a>
              </Link>
            </li>
            <li className="check-btn">
              <Link href="/">
                <a>Hostels </a>
              </Link>
            </li>
            <li className="check-btn">
              <Link href="/">
                <a>Fee Structure </a>
              </Link>
            </li>
            <li className="check-btn">
              <Link href="/">
                <a>Scholarships </a>
              </Link>
            </li>
            <li className="check-btn">
              <Link href="/">
                <a>Admission Process</a>
              </Link>
            </li>
          </ul>
        </div>
      </Styles>
    </>
  )
}

export default QuickLinks
