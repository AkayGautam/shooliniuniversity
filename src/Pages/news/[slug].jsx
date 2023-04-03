import React from 'react'
import SuspenseBoundary from '../../helper/SuspenseBoundary'
import NewsTemplate from '../../LayoutPages/News/NewsTemplate'

export const getServerSideProps = async (ctx) => {
  const slug = ctx.query.slug
  const data = await fetch(`https://shooliniuniversity.com/media/NewsAPI`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ auth: 'shoolini@999', slug }),
  }).then((res) => res.json())

  return {
    props: {
      data: data.success,
    },
  }
}

function SingleNews({ data }) {
  return (
    <SuspenseBoundary>
      <NewsTemplate result={data} />
    </SuspenseBoundary>
  )
}

export default SingleNews
