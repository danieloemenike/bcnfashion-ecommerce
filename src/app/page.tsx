import Footer from '@/components/navigation/Footer'
import Header from '@/components/navigation/Header'
import React from 'react'

type Props = {}

function HomePage({}: Props) {
  return (
    <section className='min-h-screen relative'>
      <Header />
      <Footer/>
   </section>
  )
}

export default HomePage