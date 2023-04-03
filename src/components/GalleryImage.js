import React, { useEffect } from 'react'
import { Styles } from './common/styles/gallery'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'

const GalleryImage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Styles>
        <section className="galleryImage" data-aos="fade-up">
          <div className="orgName">
            <Link href="/">
           
                <svg
                  id="donut"
                  version="1.2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1920 720"
                  width="1920"
                  height="720"
                >
                  <defs>
                    <image
                      width="1920"
                      height="11000"
                      id="img1"
                    />
                  </defs>
                  <style></style>
                  <use href="#img1" transform="matrix(1,0,0,1,0,-9006)" />
                </svg>
           
            </Link>
          </div>
        </section>{' '}
      </Styles>
    </>
  )
}

export default GalleryImage