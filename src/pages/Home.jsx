import React from 'react'
import Banner from '../components/Banner/Banner'
import Card from '../components/Cards/Cards'
import imghomeBanner from '../Assets/ImgBanner.png'

function home() {
  return (
    <div>
      <Banner
       title='Chez vous, partout et ailleurs'
       src={imghomeBanner}
      />
      <Card/>
    </div>
  )
}

export default home

