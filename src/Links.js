import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <ul>
        <li> <Link to={"/about"}  >About</Link>  </li>
        <li> <Link to={"/profile/soukaina"}  >Profile</Link>  </li>
        <li> <Link to={'/'} >Home</Link>  </li>
    </ul>
  )
}
