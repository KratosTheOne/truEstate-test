import BlogContent from "../components/BlogContent";
import PropTypes from "prop-types";

const BlogContentPage = ({ blogs }) => {
  return (
    <div className="overflow-hidden">
      <div className="h-full">
        <BlogContent blogs={blogs ? blogs : ""} />
      </div>
    </div>
  );
};
BlogContentPage.propTypes = {
  blogs: PropTypes.array.isRequired, // Define the 'blogs' prop as an array and mark it as required
};

export default BlogContentPage;
