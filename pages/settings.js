import React from 'react'
import '../styles/index.css'
import { Nav, SelectUnit, SelectLanguage } from '../components/'

export default () => (
  <>
    <Nav />
    <div
      className='flex flex-wrap -mx-2 shadow rounded'
      style={{ backgroundColor: '#fefaf0' }}
    >
      <SelectUnit />
      <SelectLanguage />
    </div>
  </>
)
