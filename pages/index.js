import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from 'axios';
import AddButton from "../components/AddButton";
import { useState } from "react";
import Add from "../components/Add";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home({account, user, admin, logged}) {
  let acc = process.env.ID; 
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Saturn Bank</title>
        <meta name="description" content="Best bank in the galaxy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>
      
      
    </div>
  );
}

export const getServerSideProps = async (ctx)=> {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  let user = false;
  let logged = false;

if (myCookie.token === process.env.TOKEN) {
  admin = true;
  logged = true;
}

if (myCookie.token === process.env.USER_TOKEN) {
  user = true;
  logged = true;
}

  const res = await axios.get('http://localhost:3000/api/accounts');
  
  return (
    {
      props: {
        account: res.data,
        admin,
        user,
        logged
      }
    }
  )
}
