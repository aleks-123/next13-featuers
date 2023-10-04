import styles from './page.module.css';
import Image from 'next/image';

function Postblog({ params }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>cccccc</p>
          <div className={styles.author}>
            <Image
              src='/1.png'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>eeeee</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/1.png' alt='' fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>eeeeee</p>
      </div>
    </div>
  );
}
export default Postblog;
