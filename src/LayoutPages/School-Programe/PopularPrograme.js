import Link from 'next/link'
import React, { useEffect } from 'react'
import Datas from '../../data/course/popular.json'
import { Styles } from './style/programmes'

const PopularPrograme = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  return (
    <>
      <Styles>
        
      </Styles>
    </>
  )
}

export default PopularPrograme
