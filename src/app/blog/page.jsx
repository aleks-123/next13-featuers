import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/1' className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='/1.png'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href='/blog/2' className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='/1.png'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href='/blog/3' className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='/1.png'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
}
export default Blog;
