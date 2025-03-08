import Head from "next/head";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(savedPosts);
    }, []);

    const handleDelete = (id) => {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }

    return(
        <div style={styles.container}>
            <Head>
                <title>Blog Posts</title>
                <meta name='description' content='List of Blog posts'/>
            </Head>
            <Navbar />
            <h1 style={styles.heading}>Blog Posts</h1>
            <ul style={styles.postList}>
                {posts.map((post) => (
                    <li key={post.id} style={styles.postItem}>
                        <h2 style={styles.postTitle}>{post.title}</h2>
                        <p style={styles.postContent}>{post.content}</p>
                        <button
                          style={styles.button} 
                          onClick={()=> handleDelete(post.id)}>
                          Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const styles = {  
    container: {  
      maxWidth: '800px',  
      margin: '0 auto',  
      padding: '20px',  
      fontFamily: '"Arial", sans-serif',  
    },  
    heading: {  
      fontSize: '2.5em',  
      color: '#333',  
      textAlign: 'center',  
    },  
    noPosts: {  
      textAlign: 'center',  
      fontSize: '1.2em',  
      color: '#888',  
    },  
    postList: {  
      listStyleType: 'none',  
      padding: 0,  
    },  
    postItem: {  
      border: '1px solid #ddd',  
      borderRadius: '5px',  
      padding: '15px',  
      marginBottom: '15px',  
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',  
      transition: 'transform 0.2s',  
    },  
    postTitle: {  
      fontSize: '1.8em',  
      color: '#0070f3',  
    },  
    postContent: {  
      fontSize: '1em',  
      color: '#555',  
    },
    button: {  
      padding: '10px 15px',  
      fontSize: '1em',  
      color: '#fff',  
      backgroundColor: '#0070f3',  
      border: 'none',  
      borderRadius: '4px',  
      cursor: 'pointer',  
      transition: 'background-color 0.3s',  
    },  
};

export default Post;