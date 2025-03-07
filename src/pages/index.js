import Head from 'next/head';
import Navbar from './components/navbar';
import Link from 'next/link';

export default function Home(){
  return(
    <div style={styles.container}>
      <Head>
        <title>My Blog</title>
        <meta name='description' content='my personal blog'/>
      </Head>
      <Navbar />
      <h1 style={styles.heading}>Welcome to My Blog!</h1>
      <p style={styles.description}>This is a simple blog build with next.js</p>
      <Link href="/create" style={styles.createLink}>  
        <button style={styles.createButton}>Create Your First Post</button>  
      </Link> 
    </div>
  );
}

const styles = {  
  container: {  
    maxWidth: '800px',  
    margin: '0 auto',  
    padding: '20px',  
    fontFamily: '"Arial", sans-serif',  
    textAlign: 'center',  
  },  
  heading: {  
    fontSize: '2.5em',  
    color: '#333',  
    marginBottom: '10px',  
  },  
  description: {  
    fontSize: '1.2em',  
    color: '#555',  
    marginBottom: '20px',  
  },  
  createLink: {  
    textDecoration: 'none',  
  },  
  createButton: {  
    padding: '15px 25px',  
    fontSize: '1em',  
    color: '#fff',  
    backgroundColor: '#0070f3',  
    border: 'none',  
    borderRadius: '5px',  
    cursor: 'pointer',  
    transition: 'background-color 0.3s, transform 0.2s',  
  },  
};