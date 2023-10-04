import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function Blog() {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => (
        <Link key={item.id} href='/blog/1' className={styles.container}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Blog;
