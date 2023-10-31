import React from 'react'
import Banner from '../components/Banner/Banner'
import CollapseAbout from '../components/Collapse/Collapse'

import imgAboutBanner from '../Assets/ImgAbout.png'
function About() {
  return (
    <main>

      <Banner 
       src={imgAboutBanner}/>
      

      <div className='CollapseAbout-content'>
      <CollapseAbout title='Fiabilité'
                    content='Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations 
                    sont régulièrement vérifiées par nos équipes.'  />
    
    <CollapseAbout  title='Respect'
                    content='La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de note plateforme.'/>

    <CollapseAbout title='Service'
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une 
                    expérience parfaite. N'hésitez pas à nous contacter si vous avez 
                    la moindre question."  />

    <CollapseAbout title='Sécurité'
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                    pour les voyageurs, chaque logement correspond aux critères de sécurité
                    établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont 
                    bien respectés. Nous organisons également des ateliers sur la sécurité 
                    domestique pour nos hôtes."  />
      </div>
    </main>
  )
}

export default About
