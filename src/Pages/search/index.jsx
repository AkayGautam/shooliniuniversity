import SearchResult from '../../components/SearchResult'
import SuspenseBoundary from '../../helper/SuspenseBoundary'

export const getServerSideProps = async (ctx) => {
  const { q } = ctx.query
  const fetchSearchResult = await fetch(
    `https://shooliniuniversity.com/media/PageSearchAPI`,
    {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        auth: 'shoolini@999',
        keywords: q,
      }),
    },
  ).then((res) => res.json())

  return {
    props: {
      searchResult: fetchSearchResult.success,
      query: q,
    },
  }
}

function Search({ searchResult, query }) {
  return (
    <SuspenseBoundary>
      <SearchResult result={searchResult} query={query} />
    </SuspenseBoundary>
  )
}

export default Search
