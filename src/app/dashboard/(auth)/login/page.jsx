'use client';

import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

function Login() {
  const session = useSession();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', { email: email, password: password });
  };

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard');
  }
  if (session.status === 'authenticated') {
    return <div className={styles.container}>Dashboard</div>;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          required
          type='email'
          placeholder='email'
          className={styles.input}
        />
        <input
          required
          type='password'
          placeholder='password'
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  );
}
export default Login;
