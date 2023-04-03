import React, { useEffect } from 'react'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Slider from 'react-slick'
import { Styless } from './style/Internship'
import Footer from '../../components/Footer'
const Internship = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    return () => {}
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="Shoolini Internship Program" />

          <Styless>
            <section className="content">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <p className="pt-5">
                      Headed by an experienced team of professionals, the
                      Placement Cell at Shoolini University works tirelessly to
                      provide students the right handholding required in their
                      final year. The team plays an important role by aligning
                      the academic curriculum to industry requirements, which
                      has helped us to achieve immense success in placements
                      every year. In this bid, students of the final year are
                      taken through a rigorous and intensive skill development
                      SPRINT program inspired by Stanford's mini-MBA. We also
                      update the academic structure continuously to keep abreast
                      of the industry requirements and meet futuristic needs.
                      For instance, we have incorporated courses like Artificial
                      Intelligence {'&'} offer an integrated Biotechnology
                      program at the graduate level.
                    </p>
                  </div>

                  <div className="col-12">
                    <h2 className="heading pb-3">
                      {' '}
                      Applied Sciences and Biotechnology
                    </h2>
                    <p className="mb-3">
                      {' '}
                      Internship is an integral part of Biotech programs.
                      Students participate in project-based industrial training
                      and submit completion report to claim assigned credits.
                      Students in their 7th semester go to some best companies
                      in the domain for industrial training, spread over 45-60
                      days.{' '}
                    </p>
                  </div>
                  <Slider {...settings}>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Abbot.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Aishwarya.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Alchemist.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/biogentek.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Cremica.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/logo46.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/macro.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/nestle.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/mcain.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/mohani.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Neptune.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Oxigen.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Panacea.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Patanjali.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/pepsoco.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Sentiss.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/SP.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/srl.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/thermo.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/UnitedBiscuts.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Untitleddesign(20).png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Untitleddesign.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Verka.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/ZEON.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Altruist.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/MMT.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/Untitleddesign(22).png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/SatyamAuto.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/idbifedrak.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/serum.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/sentis.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/images/1631353749-nes.jpg"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>

            <section className="content2">
              <div className="container">
                <h2 className="heading">Management Sciences & Liberal Arts</h2>
                <div className="row">
                  <Slider {...settings}>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/AdityaBirla.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/airtel.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/anand.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/Byjus.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/dabur.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/Edelweiss.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/future.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/Genpact.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/HDFC.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/hilti.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/hindustantimes.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/hp.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/HUL.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/ICICIBank.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/ICICIPRU.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/jcb.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/jio.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/justdial.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/lemontree.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/lg.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/logo87.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/logo88.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/logo89.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/logo90.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/logo91.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/mercer.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/microtek.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/napino.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/napino1.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/SBIcard.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/SBIMutual.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/management/SecureNow.png"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>

            <section className="content">
              <div className="container">
                <h2 className="heading">Engineering & Technology</h2>
                <div className="row">
                  <Slider {...settings}>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/anand.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/ceclerk.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/citrix.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/claas.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/Clue.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/ctl.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/eicher.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/Gabriel-Logo.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/gbp.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/gkn.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/groz.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/havells.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/huges.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/ismt.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/jcb.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/jio.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/jmc.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/Jupitersolar.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/kalpa.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/lemontree.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/logo32.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/logo49.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/logo55.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/microtek.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/napino.jpg"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/napino1.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/SU.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/TataHitachi.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/Onida.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/SBIcard.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/Shubham.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/vard.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/vegzva.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/virtusa.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/Windowit.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/engg/xcelris.png"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>

            <section className="content2">
              <div className="container">
                <h2 className="heading">Science</h2>
                <div className="row">
                  <Slider {...settings}>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/Aishwarya.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/biocon.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/biogentek.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/cipla.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/eTeam.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/glenmark.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/IDS.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/ind-swift.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/johnson-and-johnson.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/malva-school.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/mankind.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/marico.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/Panacea.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/srl.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/UnichemLabs.jpg"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/wrig-nanosystems.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/Science/zydus-cadilla.png"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>

            <section className="content">
              <div className="container">
                <h2 className="heading">Pharmaceutical Sciences</h2>
                <p className="pb-3">
                  {' '}
                  Internship at Shoolini is guided by the Pharmacy Council of
                  India. Students complete 150 hours of industrial training with
                  top Indian and global pharmaceutical companies and corporate
                  hospitals. They are expected to submit a completion
                  certificate after their internship-cum-industrial training.{' '}
                </p>
                <div className="row">
                  <Slider {...settings}>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Abbot.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Aishwarya.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/biocon.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/cipla.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/CORONA.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/DrMorepen.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/glenmark.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/godrej.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/IDS.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Jubilant.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/LIFECELL.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Macleods.jpg"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/mankind.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Meridian.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/nova.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/parexel.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/reddy.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Rootanalysis.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Sunpharma.jpg"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Tirupati.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/torrent.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/Venus.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/ZEON.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/zs.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/PharmaceuticalSciences/zydus-cadilla.png"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>

            <section className="content2">
              <div className="container">
                <h2 className="heading">Engineering {'&'} Computer Science </h2>
                <p>
                  {' '}
                  Mandatory project-based internship, hackathons and other
                  experience-based learning programs pave way for full-time
                  employment. Students in their third year go for industry
                  training to some of the best companies and learn from their
                  Industry mentors. Our mechanical and electrical students get
                  an opportunity to work on modern machines and equipment that
                  help them navigate their career successfully. Computer
                  students work on projects in software testing, Web development
                  and coding.{' '}
                </p>
                <div className="row">
                  <Slider {...settings}>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/citrix.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/CodeBrew.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/Cogni.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/Damco.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/Genpact.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/huges.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/IBM.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/KhannaPaper.jpeg"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/lg.png"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/Netsolutions.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/NPF.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/Peoplestrong.jpeg"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/polariss.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/SmartData.jpeg"
                        />
                      </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/TataHitachi.png"
                        />
                      </div>
                    </div>

                    <div className="col-4 col-sm-4 col-md-2	col-lg-2 col-xl-2">
                      <div className="picture">
                        <img
                          className="img-fluid"
                          src="assets/images/CSE/Verikrafit.jpeg"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </>
  )
}

export default Internship
