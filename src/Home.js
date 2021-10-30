import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
           <BlogList blogs = {blogs} handleDelete = {handleDelete}/>
        </div>
    );
}

export default Home;