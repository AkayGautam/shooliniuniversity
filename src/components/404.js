import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card as Cards,
  Button,
  Table,
} from 'react-bootstrap'
import { BreadcrumbBox } from './common/Breadcrumb'
import { Styless } from './common/styles/FacultyOfAgriculture'

const BASE_URI = 'https://shooliniuniversity.com'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  useEffect(() => {
    document.title = `404 | Shoolini University`

    return () => {
      document.title = 'Shoolini University'
    }
  })

  return (
    <div className="main-wrapper course-details-page">
      {/* Header 2 */}
      <Header />

      {/* Breadcroumb */}
      <BreadcrumbBox title="Not Found" />
      <Styless>
        <section className="course-details-area our-webcoderskull text-center">
          <h1>Oops! 404</h1>
          <Link to="/"> Go Back </Link>
        </section>
      </Styless>

      {/* Footer 2 */}
      <Footer />
    </div>
  )
}

export default NotFound
