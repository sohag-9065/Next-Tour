import Head from 'next/head';
import Image from 'next/image';
import CarrosulHome from '../Components/HomeComponent/CarrosulHome';
import CategoryHome from '../Components/HomeComponent/CategoryHome';
import ContactForm from '../Components/HomeComponent/ContactForm';
import HotelContainer from '../Components/HomeComponent/HotelContainerHome';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div >
      <CarrosulHome />
      <CategoryHome />
      <HotelContainer />
      <ContactForm />
    </div>
  )
}
