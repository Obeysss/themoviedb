import { t } from 'i18next'
import React from 'react'
// import { useParams } from 'react-router-dom'

export default function FilterComponent() {

    // const {title} = useParams()
  return (
    <div className='my-3'>
       {/* <b>{title} Films</b> */}
       <b>{t('temporarliy')}</b>
    </div>
  )
}
