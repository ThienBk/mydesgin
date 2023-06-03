import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Content from '../Contents/Content'
import Pagination from '../Paginarion/Pagination'
import Footer from '../footer/Footer'

export default function Nav() {
  return (
    <div>
      <Header />
      <Banner />
      <Content />
      <Pagination />
      <Footer />
    </div>
  )
}
