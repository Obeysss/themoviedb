import React from 'react'
import Search from '../search/Search'
import TrendingMovie from '../../components/tranding movie/TrendingMovie'
import WhatsPopularPage from '../../components/whats popular/WhatsPopular.page'

export default function Home1Page() {
  return (
    <div>
        <Search/>
        <TrendingMovie/>
        <WhatsPopularPage/>
    </div>
  )
}
