import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '../styles/Add.module.css'

const Add = ({setClose}) => {
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [fullname, setFullname] = useState(null)
    const [balance, setBalance] = useState(null)

   

    const handleCreate = async () => {
            const newAccount = {
                login,
                password,
                fullname,
                balance,
            }
        try {
            await axios.post('http://localhost:3000/api/accounts', newAccount)
            setClose(true);
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span onClick={()=>setClose(true)} 
                  className={styles.close}>
                    X
            </span>
            <h1>Create a new Account</h1>
            <div className={styles.item}>
                <label className={styles.label}>Login</label>
                <input className={styles.input} 
                       type='text' 
                       onChange={(e)=>setLogin(e.target.value)}/>
                <label className={styles.label}>Password</label>
                <input className={styles.input} 
                       type='text' 
                       onChange={(e)=>setPassword(e.target.value)}/>
                <label className={styles.label}>FullName</label>
                <input className={styles.input} 
                       type='text' 
                       onChange={(e)=>setFullname(e.target.value)}/>
                <label className={styles.label}>Balance</label>
                <input className={styles.input} 
                       type='number' 
                       onChange={(e)=>setBalance(e.target.value)}/>                
            </div>
            
                
            
                
                
                
                <button className={styles.addButton} onClick={handleCreate}>
                    Create Account
                </button>
                
            </div>

        </div>

    
  )
}

export default Add