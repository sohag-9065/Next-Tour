import Head from 'next/head'
import Image from 'next/image'
import CategoryHome from '../Components/HomeComponent/CategoryHome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >

      <h1>This is Main Page</h1>
      <CategoryHome/>
      
    </div>
  )
}
