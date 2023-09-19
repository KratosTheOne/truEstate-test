import MainPage from "../components/MainPage";
import PropTypes from "prop-types";

const Home = ({ blogs }) => {
  //console.log(blogs);
  return (
    <div className="overflow-hidden">
      <div className="h-full">
        <MainPage blogs={blogs ? blogs : ""} />
      </div>
    </div>
  );
};

Home.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default Home;
