import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Blogs({ blogs }) {
  console.log(blogs);

  return (
    <div className="grid grid-cols-3 gap-10 w-full">
      {blogs.data.map((blog) => (
        <Link key={blog.id} to={`/blog/${blog.id}`}>
          <div className="h-auto w-80 flex flex-col aspect-auto relative rounded-lg bg-white shadow cursor-pointer">
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={`http://localhost:1337${blog?.attributes?.blogCover?.data?.attributes?.url}`}
              alt="coverImg"
            />
            <div className="flex flex-col">
              <h1 className="text-xl text-[#F54C1E] font-bold overflow-hidden overflow-ellipsis pt-2">
                {blog?.attributes.blogTitle}
              </h1>
              <p className="pt-2 text-base overflow-hidden overflow-ellipsis">
                {blog.attributes.blogDesc}
              </p>
              <h6 className="pt-2 text-xs pb-2">{blog.attributes.blogDate}</h6>{" "}
            </div>
          </div>
        </Link>
      ))}

      {/*{blogs1.map((blog) => (
        <Link key={blog.id} to={`/blog/${blog.id}`}>
          <div className="h-full w-80 flex flex-col aspect-auto relative rounded-lg bg-white shadow-xl cursor-pointer">
            <img
              className="w-full object-cover rounded-lg"
              src={blog.coverImg}
              alt="coverImg"
            />
            <div className="flex flex-col">
              <h1 className="text-xl text-[#F54C1E] font-bold overflow-hidden overflow-ellipsis pt-2">
                {blog.title}
              </h1>
              <p className="pt-2 text-base overflow-hidden overflow-ellipsis">
                {blog.desc}
              </p>
              <h6 className="pt-2 text-xs pb-2">{blog.time}</h6>{" "}
            </div>
          </div>
        </Link>
      ))}*/}
    </div>
  );
}

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired, // Define the 'blogs' prop as an array and mark it as required
};

export default Blogs;

{
  /*const blogs1 = [
    {
      id: 1,
      title: "Registration offices clear 90% of pending applications in 4 days",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      coverImg:
        "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
      authorName: "John Doe",
      authorImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      authorDesc: "Web Developer",
      time: "08 Sept 2023",
      blogFullContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Sit amet massa vitae tortor. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Consectetur libero id faucibus nisl tincidunt. Augue eget arcu dictum varius duis at. Et odio pellentesque diam volutpat commodo sed. Quisque sagittis purus sit amet. In ornare quam viverra orci sagittis eu volutpat odio. Proin libero nunc consequat interdum varius sit amet. At urna condimentum mattis pellentesque id nibh. Urna cursus eget nunc scelerisque viverra mauris in. At consectetur lorem donec massa. Cras ornare arcu dui vivamus arcu felis bibendum ut. Sit amet commodo nulla facilisi. Ullamcorper velit sed ullamcorper morbi. Risus pretium quam vulputate dignissim. Non enim praesent elementum facilisis leo vel fringilla. Eu sem integer vitae justo eget magna fermentum iaculis. Felis imperdiet proin fermentum leo vel orci porta non. Arcu non odio euismod lacinia at quis risus sed. Porttitor eget dolor morbi non arcu risus. Nulla at volutpat diam ut venenatis tellus in. Auctor urna nunc id cursus metus aliquam eleifend. Blandit cursus risus at ultrices mi tempus. Facilisis gravida neque convallis a cras semper auctor. Volutpat blandit aliquam etiam erat velit.",
    },
    {
      id: 2,
      title: "Registration offices clear 90% of pending applications in 4 days",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      coverImg:
        "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
      authorName: "John Doe",
      authorImg:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      authorDesc: "Web Developer",
      time: "08 Sept 2023",
      blogFullContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Sit amet massa vitae tortor. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Consectetur libero id faucibus nisl tincidunt. Augue eget arcu dictum varius duis at. Et odio pellentesque diam volutpat commodo sed. Quisque sagittis purus sit amet. In ornare quam viverra orci sagittis eu volutpat odio. Proin libero nunc consequat interdum varius sit amet. At urna condimentum mattis pellentesque id nibh. Urna cursus eget nunc scelerisque viverra mauris in. At consectetur lorem donec massa. Cras ornare arcu dui vivamus arcu felis bibendum ut. Sit amet commodo nulla facilisi. Ullamcorper velit sed ullamcorper morbi. Risus pretium quam vulputate dignissim. Non enim praesent elementum facilisis leo vel fringilla. Eu sem integer vitae justo eget magna fermentum iaculis. Felis imperdiet proin fermentum leo vel orci porta non. Arcu non odio euismod lacinia at quis risus sed. Porttitor eget dolor morbi non arcu risus. Nulla at volutpat diam ut venenatis tellus in. Auctor urna nunc id cursus metus aliquam eleifend. Blandit cursus risus at ultrices mi tempus. Facilisis gravida neque convallis a cras semper auctor. Volutpat blandit aliquam etiam erat velit.",
    },
  ];*/
}
