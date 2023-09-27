import React from 'react'
import Banner from './Banner'
import FormLogin from './Form'

export default function Login() {
  return (
    <div className='container flex'>
      <FormLogin/>
      <Banner/>
    </div>
  )
}
