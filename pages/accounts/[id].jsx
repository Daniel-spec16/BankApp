import dbConnect from "@/util/mongo";
import axios from 'axios';
import styles from "@/styles/Account.module.css";
import Image from "next/image";
import { useState } from "react";



const Account = ({account}) => {
  const operations = ['deposit', 'withdraw'];
  const [operation, setOperation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [amount, setAmount] = useState(0);
  var balance = Number(account.balance + Number(amount));
  var antibalance = account.balance - amount;
  var acc = process.env.ID;
  console.log(account);

  const handleDeposit = async () => {
    
    try {
        console.log(acc)
        console.log(balance)
        const res = await axios.put(`http://localhost:3000/api/accounts/641c5253a3c88872dd1b9a1d`, {balance: balance});
        console.log("balance +updated")
      } catch (err) {
        console.log(err)
      }
    
  }

  const handleWithdrawn = async () => {
    try {
        const res = await axios.put(`http://localhost:3000/api/accounts/641c5253a3c88872dd1b9a1d`, {balance: antibalance})
        console.log("balance -updated")
      } catch (err) {
        console.log(err)
      }
    
  }


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
        <div style={{borderRadius: 200, overflow:'hidden', width:400}}>
          <Image src='/img/bank_check_1' width='400' height='400' alt="NO_IMG_FOR_THIS_ACCOUNT" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{account.fullname}</h1>
        <span className={styles.price}>${account.balance}</span>
        
        <h3 className={styles.choose}>Choose Operation</h3>
        
        
          
            
            
            
            
            
            <span >Amount</span>
            <input type='number' onChange={(e)=>setAmount(e.target.value)} placeholder={0}/>
            <span >Destination</span>
            <input type='text' onChange={(e)=>setDestination(e.target.value)} placeholder='Belgia, Komarovo, #324535232345'/>
          
          
        

            
            
        </div>
        <button className={styles.button} onClick={handleDeposit}>Deposit</button>
        <button className={styles.button} onClick={handleWithdrawn}>Withdrawn</button>
      </div>
    
  );
};

 export const getServerSideProps = async ({params})=> {
    const res = await axios.get(`http://localhost:3000/api/accounts/${params.id}`);
    return (
      {
        props: {
          account: res.data,
        }
      }
      )
    }

  export default Account;