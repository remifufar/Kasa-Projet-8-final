import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div>
    <div className='error_conteneur'>
    <h1 className='error_conteneur_title'>404</h1>
    <h2 className='error_conteneur_sous-titre'>Oups! La page que vous demandez n'existe pas.</h2>
    <NavLink to="/" className='error_conteneur_lien'>Retourner sur la page d’accueil</NavLink>
  </div>
  </div>
  )
}

export default Error
