import React from 'react'
import { imgBaseUrl } from '../../repositories/repository'

export default function ShowsCardComponent(props) {
  return (
    props.personList.map((item,index)=>{
     return(
         <div style={{width:'calc(100% / 5)'}} key={index} className=' my-3'>
         <div className="card">
            <img src={imgBaseUrl+item.poster_path} alt={item.name} />
            <b>{item.name}</b>
         </div>
    </div>
     )
    })
  )
}
