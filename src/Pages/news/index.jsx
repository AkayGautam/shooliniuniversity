import React from 'react'
import SuspenseBoundary from '../../helper/SuspenseBoundary'
import NewsList from '../../LayoutPages/News/NewsList'

export const getServerSideProps = async () => {
  const data = await fetch(`https://shooliniuniversity.com/media/NewsAPI`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ auth: 'shoolini@999' }),
  }).then((res) => res.json())

  return {
    props: {
      data: data.success,
    },
  }
}

const News = ({ data }) => {
  return (
    <SuspenseBoundary>
      <NewsList data={data} />
    </SuspenseBoundary>
  )
}

export default News
