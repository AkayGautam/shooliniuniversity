import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { Styles } from './styles/scrolltop'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  })

  return (
    <Styles>
      <button
        className="scrollTOp"
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      >
        <FaArrowCircleUp />
      </button>
    </Styles>
  )
}

export default ScrollButton
