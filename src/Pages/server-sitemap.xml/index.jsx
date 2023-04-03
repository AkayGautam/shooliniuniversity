import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: 'https://shooliniuniversity.com/faculty-of-agriculture-1',
      lastmod: new Date().toISOString(),
    },
  ]

  return getServerSideSitemap(ctx, fields)
}

export default function siteMap() {}
