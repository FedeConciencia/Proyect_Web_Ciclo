import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Layout from '@/components/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (

   <Layout title="Proyecto_Ciclo" description='Proyecto Web Pagina Ciclo'>

    <h1>Hola Mundo</h1>

   </Layout>

  )
}

export default Home;


