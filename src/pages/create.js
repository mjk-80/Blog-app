import { useState } from "react";
import Navbar from "./components/navbar";
import { useRouter } from "next/router";


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title,
            content,
            id: Date.now(),
        };

        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        existingPosts.push(newPost);

        localStorage.setItem('posts', JSON.stringify(existingPosts));

        setTitle('');
        setContent('');
        router.push('/posts');
    }


    return(
        <div style={styles.container}>
            <Navbar />
            <h1 style={styles.heading}>Create a New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="title" style={styles.label}>Title</label>
                    <input 
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required        //??
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="content" style={styles.label}>Content</label>
                    <textarea 
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required        //??
                        style={styles.textArea}
                    />
                </div>
                <button type="submit" style={styles.button}>Create Post</button>
            </form>
        </div>
    );
};

const styles = {  
    container: {  
      maxWidth: '800px',  
      margin: '0 auto',  
      padding: '20px',  
      fontFamily: '"Arial", sans-serif',  
    },  
    heading: {  
      textAlign: 'center',  
      color: '#333',  
    },  
    form: {  
      display: 'flex',  
      flexDirection: 'column',  
      gap: '15px',  
    },  
    formGroup: {  
      display: 'flex',  
      flexDirection: 'column',  
    },  
    label: {  
      marginBottom: '5px',  
      fontSize: '1.2em',  
    },  
    input: {  
      padding: '10px',  
      fontSize: '1em',  
      border: '1px solid #ccc',  
      borderRadius: '4px',  
    },  
    textArea: {  
      padding: '10px',  
      fontSize: '1em',  
      border: '1px solid #ccc',  
      borderRadius: '4px',  
      minHeight: '150px',  
      resize: 'vertical',  
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

export default CreatePost;