import Button from '@/components/button/Button';
import styles from './page.module.css';
import Image from 'next/image';

function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt='test'
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt='test'
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See More' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt='test'
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
export default Category;
