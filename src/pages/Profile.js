import React from 'react'
import { useParams } from 'react-router-dom'
import Links from '../Links'

export default function Profile() {

    const {username} = useParams()

  return (
    <div>
      Profile Page of {username}

      <Links />

    </div>
  )
}
