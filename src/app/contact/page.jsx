import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/button/Button';

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt='Contact picture'
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input} />
          <input type='text' placeholder='email' className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder='Message'
            cols='30'
            rows='10'
          ></textarea>
          <Button text='Send' url='#' />
        </form>
      </div>
    </div>
  );
}
export default Contact;
