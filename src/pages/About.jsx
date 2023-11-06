import React from 'react'
import Banner from '../components/Banner/Banner'
import CollapseAbout from '../components/Collapse/Collapse'

import imgAboutBanner from '../Assets/ImgAbout.png'
import dataCollaspe from '../data/dataCollaspe.json'


function About() {
  return (
    <main>

      <Banner 
       src={imgAboutBanner}/>
      

      <div className='CollapseAbout-content'>
      { dataCollaspe.map (({title, content }) =>
            <CollapseAbout 
               title ={title}
               content={content}/>
            )}
      </div>
    </main>
  )
}

export default About
