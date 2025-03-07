import Link from "next/link";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/posts'>Posts</Link>
                </li>
                <li>
                    <Link href='/create'>Create Post</Link>
                </li>
            </ul>
            <style jsx>{`  
                nav {  
                background: #333;  
                color: white;  
                padding: 1rem;  
                }  
                ul {  
                list-style: none;  
                display: flex;  
                }  
                li {  
                margin-right: 20px;  
                }  
                a {  
                color: white;  
                text-decoration: none;  
                }  
            `}</style>
        </nav>
    )
};

export default Navbar;