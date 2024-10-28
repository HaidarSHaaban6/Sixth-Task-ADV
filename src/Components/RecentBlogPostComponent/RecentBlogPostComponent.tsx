import { useNavigate, useParams } from "react-router-dom";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  ReadMainBlogArticle,
  ReadRecentWithoutShown,
} from "../../Redux/Slice/BlogSlice";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Blog } from "./../../Data";
import NewlattersInputField from "../NewlattersInputField/NewlattersInputField";
import FooterComponent from "../FooterComponent/FooterComponent";

const RecentBlogPostComponent = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newlattersInputFieldText =
    "Subscribe to learn about new product features, the latest in technology, solutions, and updates.";

  // Exclude the current blog from recent blogs
  useEffect(() => {
    dispatch(ReadRecentWithoutShown({ idToExclude: parseInt(param.id) }));
  }, [param.id, dispatch]);

  useEffect(() => {
    dispatch(ReadMainBlogArticle({ idToShow: parseInt(param.id) }));
  }, [param.id, dispatch]);

  const recentBlogs = useSelector(
    (state: { articles: { filteredRecentBlogs: Blog[] } }) =>
      state.articles.filteredRecentBlogs
  );

  // Get the dark mode state
  const darkMode = useSelector(
    (state: { mode: { darkMode: boolean } }) => state.mode.darkMode
  );

  // Get the main blog
  const mainBlog = useSelector(
    (state: { articles: { mainBlog: Blog } }) => state.articles.mainBlog
  );

  // Handle navigation to a selected blog post
  const handleNavigate = (id: number) => {
    navigate(`/blog/${id}`);
  };

  // Function to truncate text if it's longer than the specified maxLength
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "..."; // Truncate and add ellipsis
    }
    return text; // Return as is if shorter than maxLength
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={
        darkMode ? "bg-dark-mode-color text-white" : "bg-white text-gray-color"
      }
    >
      <NavBarComponent name="haidar" />
      <div className="max-w-[1216px] xl:mx-auto mx-8 flex sm:flex-row flex-col-reverse">
        <div className="md:w-[28.13%] sm:w-[40%] mt-8 sm:mt-0 ">
          <h2
            className={`mb-8 text-2xl font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Recent blog posts
          </h2>
          {recentBlogs.map((post) => (
            <div key={post.id} className="mb-6">
              <img
                className="w-full h-[204px] object-cover"
                src={post["image-1"]}
                alt="blog-image"
              />
              <p className="mt-2 text-sm font-semibold text-purple-color">
                {post.info}
              </p>
              <div
                className="hover:cursor-pointer"
                onClick={() => handleNavigate(post.id)}
              >
                <div className="flex items-center justify-between my-3">
                  <p
                    className={`text-2xl font-semibold ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {post.title}
                  </p>
                  <MdArrowOutward
                    size={24}
                    className="hover:text-purple-color"
                  />
                </div>
                <p>{truncateText(post["description-1"], 110)}</p>
              </div>
              <div className="mt-4">
                {post.categories.map((item: string, index: number) => (
                  <span
                    className={`inline-block bg-categories-background-color py-[2px] px-[10px] rounded-[16px] font-medium text-sm mt-3 mr-2 ${
                      index === 0
                        ? "text-purple-color"
                        : index === 1
                        ? "text-royal-blue-color"
                        : "text-crimson-color"
                    }`}
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Display mainBlog content in the UI */}
        <div className="md:w-[71.87%] sm:w-[60%] sm:ml-8">
          {mainBlog.at(0) ? (
            <div>
              <p className="mt-2 mb-8 text-sm font-semibold text-purple-color">
                {mainBlog.at(0).info}
              </p>
              <p
                className={`mb-8 text-4xl font-bold ${
                  darkMode ? "text-white" : "text-black"
                } `}
              >
                {mainBlog.at(0).title}
              </p>
              {mainBlog.at(0)["image-1"] && (
                <img
                  src={mainBlog.at(0)["image-1"]}
                  alt={mainBlog.at(0).title}
                  className="w-full "
                />
              )}
              <p className="mt-8">{mainBlog.at(0)["description-1"]}</p>
              <p className="mt-3">{mainBlog.at(0)["description-2"]}</p>
              <p className="w-3/4 mx-auto mt-3 font-bold text-center">
                {mainBlog.at(0)["definition-1"]}
              </p>
              <img
                src={mainBlog.at(0)["image-2"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-1"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-3"]}</p>
              <p className="mt-3">{mainBlog.at(0)["description-4"]}</p>
              <p className="mt-3">{mainBlog.at(0)["description-5"]}</p>
              <p className="mt-3">{mainBlog.at(0)["description-6"]}</p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-7"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-8"]}</p>
              <p className="mt-3">
                <span className="mr-1 font-medium">Columns:</span>
                {mainBlog.at(0)["description-9"]}
              </p>
              <p className="mt-3">
                <span className="mr-1 font-medium">Gutters:</span>
                {mainBlog.at(0)["description-10"]}
              </p>
              <img
                src={mainBlog.at(0)["image-3"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-2"]}
              </p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-11"]}
              </p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-12"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-13"]}</p>
              <img
                src={mainBlog.at(0)["image-4"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-3"]}
              </p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-14"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-15"]}</p>
              <img
                src={mainBlog.at(0)["image-5"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-4"]}
              </p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-16"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-17"]}</p>
              <img
                src={mainBlog.at(0)["image-6"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-5"]}
              </p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-18"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-19"]}</p>
              <img
                src={mainBlog.at(0)["image-7"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-6"]}
              </p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-20"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-21"]}</p>
              <ul className="list-disc pl-[1.2rem]">
                <li>{mainBlog.at(0)["unorder-list-1"]}</li>
                <li>{mainBlog.at(0)["unorder-list-2"]}</li>
                <li>{mainBlog.at(0)["unorder-list-3"]}</li>
              </ul>
              <img
                src={mainBlog.at(0)["image-8"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-7"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-22"]}</p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-23"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-24"]}</p>
              <p className="mt-3">
                <span className="mr-2 font-bold">
                  Choose the right grid for your needs.
                </span>
                {mainBlog.at(0)["description-25"]}
              </p>
              <p className="mt-3">
                <span className="mr-2 font-bold">
                  Spend time setting up your grid.
                </span>
                {mainBlog.at(0)["description-26"]}
              </p>
              <img
                src={mainBlog.at(0)["image-9"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-8"]}
              </p>
              <p className="mt-3">
                <span className="mr-2 font-bold">
                  Always place content within columns, not gutters.
                </span>
                {mainBlog.at(0)["description-27"]}
              </p>
              <img
                src={mainBlog.at(0)["image-10"]}
                className="w-full mt-3"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-3 text-center">
                {mainBlog.at(0)["definition-9"]}
              </p>
              <p className="mt-3">
                <span className="mr-2 font-bold">
                  Consider using an 8px grid system.
                </span>
                {mainBlog.at(0)["description-28"]}
              </p>
              <p className="mt-3 font-bold">
                {mainBlog.at(0)["description-29"]}
              </p>
              <p className="mt-3">{mainBlog.at(0)["description-30"]}</p>
              {mainBlog.at(0).categories.map((item: string, index: number) => (
                <span
                  className={`inline-block bg-categories-background-color py-[2px] px-[10px] rounded-[16px] font-medium text-sm mt-6 mr-2 ${
                    index === 0
                      ? "text-purple-color"
                      : index === 1
                      ? "text-royal-blue-color"
                      : "text-crimson-color"
                  }`}
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
          {innerWidth >= 768 && (
            <NewlattersInputField
              title="Stories and interviews"
              subTitle="Newlatters"
              text={newlattersInputFieldText}
              darkMode={darkMode}
            />
          )}
        </div>
      </div>
      <div className="max-w-[1216px] xl:mx-auto mx-8">
        {innerWidth < 768 && (
          <NewlattersInputField
            title="Stories and interviews"
            subTitle="Newlatters"
            text={newlattersInputFieldText}
            darkMode={darkMode}
          />
        )}
        <FooterComponent />
      </div>
    </div>
  );
};

export default RecentBlogPostComponent;
