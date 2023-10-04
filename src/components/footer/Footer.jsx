import Image from 'next/image';
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <div>All rights reserved.</div>
      <div className={styles.social}>
      
        <Image src="/1.png" alt='facebokLogo' className={styles.icon} width={15} height={15}/>
        <Image src="/2.png" alt='instaLogo' className={styles.icon} width={15} height={15}/>
        <Image src="/3.png" alt='twiterLogo' className={styles.icon} width={15} height={15}/>
        <Image src="/4.png" alt='youtubeLogo' className={styles.icon} width={15} height={15}/>
      </div>
    </div>
  );
}
export default Footer;
