import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import AddButton from '@/components/AddButton'
import Add from '@/components/Add'


const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [close, setClose] = useState(true);
  const router = useRouter();


  const handleClick = async () => {
    try{
        console.log({username, password})
        await axios.post('http://localhost:3000/api/login', {
            username,
            password,
        })
        router.push('/');
    } catch (err){
        
        setError(true);
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>

        <h1>Login</h1>
        <input 
            placeholder="username"
            className={styles.input}
            onChange={(e)=>setUsername(e.target.value)}
            />
        <input
            placeholder='password'
            className={styles.input}
            onChange={(e)=>setPassword(e.target.value)}
            />
        <button className={styles.button}
        onClick={handleClick}
        >
            Sign In
        </button>
        {error && <span className={styles.error}>Incorrect Credentials</span>}
        
        </div>
        <AddButton setClose={setClose}/>
        {!close && <Add setClose={setClose}/>}
    </div>
  )
}



export default Login