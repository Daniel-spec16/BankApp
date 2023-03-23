import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import  Link  from "next/link";

const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>CALL FOR ASSISTANCE</div>
          <div className={styles.text}>Inter-Space tel.:#h1785468</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/admin/login' passHref>
          <li className={styles.listItem}>Logout</li>
          </Link>
          <Link href='accounts/641c5253a3c88872dd1b9a1d' passHref>
          <button>Go to Operations</button>
            </Link>
          
          <Image src="/img/logo.png" alt="" width="80" height="69" className={styles.logo} />
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;





