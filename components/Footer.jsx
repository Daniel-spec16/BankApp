import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            MOST FAMOUS BANK ACROSS GALACTIC.THE SATURN BANK, THE MOST SECURE BANK IN THE UNIVERSE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND INTER-METEROID TELEPORT POINTS TO OUR BANK</h1>
          <p className={styles.text}>
            Meteorite Ring Afina
            <br /> Rocket Square #17
            <br /> -6028671010, -8897563712
          </p>
          <p className={styles.text}>
            Meteorite Ring Hermes
            <br /> Rocket docking #12
            <br /> 6028679081, -875638365738
          </p>
          <p className={styles.text}>
            Meteorite Ring Zeus
            <br /> Rocket Re-Fuel Station
            <br /> 6028678876, 90574563946
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING SOLAR HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 16:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 16:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;