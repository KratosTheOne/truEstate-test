import PropTypes from "prop-types";
import BlogsContainer from "./BlogsContainer";

const MainPage = ({ blogs }) => {
  //console.log(blogs);
  return (
    <div className="flex flex-col max-w-[84rem] mx-auto justify-between p-3">
      <div className="mt-16 border-0 border-b-4 border-b-[#F54C1E] w-[65%] text-left pb-1 mb-16">
        <h1 className="text-3xl text-[#F54C1E] font-bold">REAL ESTATE NEWS</h1>
      </div>
      <div>
        <BlogsContainer blogs={blogs ? blogs : ""} />
      </div>
    </div>
  );
};

MainPage.propTypes = {
  blogs: PropTypes.array.isRequired, // Define the 'blogs' prop as an array and mark it as required
};

export default MainPage;
