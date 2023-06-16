import React from 'react'
import { useParams } from 'react-router-dom'

export default function FilterComponent() {

    const {title} = useParams()
    console.log(title);
  return (
    <div>
       <b>{title} Films</b>
    </div>
  )
}
