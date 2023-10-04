'use client';

import { useEffect, useState } from 'react';
import useSWR from 'swr';
import styles from './page.module.css';
function Dashboard() {
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
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );
  console.log(data);

  return <div className={styles.container}>Dashboard</div>;
}
export default Dashboard;
