'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Dashboard() {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  console.log(session?.data);
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {}
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (err) {}
  };

  console.log(data);

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data?.map((post) => (
            <div key={post.id} className={styles.post}>
              <div className={styles.imgContainer}>
                <Image
                  src={post.img}
                  alt='image from post'
                  width={200}
                  height={200}
                />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                onClick={() => handleDelete(post._id)}
                className={styles.delete}
              >
                x
              </span>
            </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className={styles.input} />
          <input type='text' placeholder='Desc' className={styles.input} />
          <input type='text' placeholder='Image' className={styles.input} />
          <textarea
            placeholder='Content'
            className={styles.textArea}
            cols='30'
            rows='10'
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
}
export default Dashboard;

// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);

// const getData = async () => {
//   setLoading(true);
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     setError(true);
//   }
//   const data = await res.json();
//   setData(data);
//   setLoading(false);
// };

// useEffect(() => {
//   getData();
// }, []);
