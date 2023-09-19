import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogContentPage from "./pages/BlogContentPage";
import useFetch from "./hooks/useFetch";

const App = () => {
  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  //console.log(data);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home blogs={data ? data : ""} />} />
        </Routes>
        <Routes>
          <Route
            path="/blog/:id"
            element={<BlogContentPage blogs={data ? data : ""} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

{
  /**
import { useEffect, useState } from "react";
import axios from "axios";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Define the URL of the WordPress REST API endpoint for your custom post type
    const apiUrl = "http://localhost/wordpress/wp-json/wp/v2/blogs";

    // Make an HTTP GET request to fetch the blogs
    axios
      .get(apiUrl)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title.rendered}</h2>
            <img alt="img" src={blog.content.rendered.src} />
            <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;

*/
}
