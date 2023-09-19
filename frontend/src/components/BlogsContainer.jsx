import PropTypes from "prop-types";
import Blogs from "./Blogs";

const BlogsContainer = ({ blogs }) => {
  return (
    <div className="h-screen">
      <Blogs blogs={blogs ? blogs : ""} />
    </div>
  );
};

BlogsContainer.propTypes = {
  blogs: PropTypes.array.isRequired, // Define the 'blogs' prop as an array and mark it as required
};

export default BlogsContainer;
