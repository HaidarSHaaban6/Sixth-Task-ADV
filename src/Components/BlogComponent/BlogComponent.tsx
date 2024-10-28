import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Read,
  ReadRecent,
  setCurrentPage,
} from "./../../Redux/Slice/BlogSlice";
import NavBarComponent from "../../Components/NavBarComponent/NavBarComponent";
import BlogTitleComponent from "../BlogTitleComponent/BlogTitleComponent";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";

interface Blog {
  id: number;
  "image-1": string;
  title: string;
  info: string;
  categories: string[];
  "description-1": string;
}

const BlogComponent = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Get all blog posts
  const allBlogs = useSelector(
    (state: { articles: { blog: Blog[] } }) => state.articles.blog
  );

  // Get recent blog posts
  const recentBlogs = useSelector(
    (state: { articles: { recentBlogs: Blog[] } }) => state.articles.recentBlogs
  );

  // Get the dark mode state
  const darkMode = useSelector(
    (state: { mode: { darkMode: boolean } }) => state.mode.darkMode
  );

  // Dispatch actions to get all blogs and recent blogs
  useEffect(() => {
    dispatch(Read()); // Get all blogs
    dispatch(ReadRecent()); // Get recent blogs
  }, [dispatch]);

  // Function to truncate text if it's longer than the specified maxLength
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "..."; // Truncate and add ellipsis
    }
    return text; // Return as is if shorter than maxLength
  };

  // Function To Handle Navigate To Blog Page
  const handleNavigate = (id: number) => {
    navigate(`/blog/${id}`);
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

  const currentPage = useSelector((state) => state.articles.currentPage);
  const totalPages = useSelector((state) =>
    Math.ceil(state.articles.blogArrayLength / state.articles.postsPerPage)
  );

  // const postsPerPage = useSelector((state) => state.articles.postsPerPage);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    dispatch(Read()); // Re-fetch the blogs based on the new page
  };

  // New function to handle Previous and Next
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1); // Decrease page number for Previous
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      console.log(currentPage < totalPages);
      console.log("currentPage", currentPage, "totalPages", totalPages);
      handlePageChange(currentPage + 1); // Increase page number for Next
    }
  };

  return (
    <div
      className={
        darkMode ? "bg-dark-mode-color text-white" : "bg-white text-black"
      }
    >
      <NavBarComponent name="haidar" />
      <BlogTitleComponent title="THE BLOG" />
      <div className="max-w-[1216px] xl:mx-auto mt-[60px] mx-8">
        {/* Recent Blogs */}
        <h1 className="mb-8 text-2xl">Recent blog posts</h1>
        {recentBlogs && recentBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <div key={recentBlogs[1].id}>
                <img
                  src={recentBlogs[1]["image-1"]}
                  className="w-full xl:h-[228px] h-[288px]"
                  alt="blog-image"
                />
                <p className="mt-8 text-sm font-semibold text-purple-color">
                  {recentBlogs[1].info}
                </p>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    handleNavigate(recentBlogs[1].id);
                  }}
                >
                  <div className="flex items-center justify-between my-3">
                    <p className="text-2xl font-semibold">
                      {recentBlogs[1].title}
                    </p>
                    <MdArrowOutward
                      size={24}
                      className="hover:text-purple-color"
                    />
                  </div>
                  <p>{recentBlogs[1]["description-1"]}</p>
                  {recentBlogs[1].categories.map(
                    (item: string, index: number) => (
                      <span
                        className={`inline-block bg-categories-background-color py-[2px] px-[10px] rounded-[16px] font-medium text-sm mr-2 mt-6 ${
                          index === 0
                            ? "text-purple-color"
                            : index === 2
                            ? "text-royal-blue-color"
                            : "text-crimson-color"
                        }`}
                        key={index}
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div key={recentBlogs[3].id}>
                <div className="flex flex-col gap-6 mb-8 md:flex-row">
                  <img
                    src={recentBlogs[3]["image-1"]}
                    className="md:!w-[320px] h-[200px] w-full"
                    alt="blog-image"
                  />
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-purple-color">
                      {recentBlogs[3].info}
                    </p>
                    <div
                      className="hover:cursor-pointer"
                      onClick={() => {
                        handleNavigate(recentBlogs[3].id);
                      }}
                    >
                      <div className="flex items-center justify-between my-3">
                        <p className="text-lg font-semibold">
                          {recentBlogs[3].title}
                        </p>
                        <MdArrowOutward
                          size={24}
                          className="hover:text-purple-color"
                        />
                      </div>
                      <p>{recentBlogs[3]["description-1"]}</p>
                      {recentBlogs[3].categories.map(
                        (item: string, index: number) => (
                          <span
                            className={`inline-block bg-categories-background-color py-[2px] px-[10px] rounded-[16px] font-medium text-sm mr-2 mt-6 ${
                              index === 0
                                ? "text-purple-color"
                                : index === 2
                                ? "text-royal-blue-color"
                                : "text-crimson-color"
                            }`}
                            key={index}
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-6 md:flex-row"
                  key={recentBlogs[2].id}
                >
                  <img
                    src={recentBlogs[2]["image-1"]}
                    className="md:w-[320px] h-[200px] w-full"
                    alt="blog-image"
                  />
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-purple-color">
                      {recentBlogs[2].info}
                    </p>
                    <div
                      className="hover:cursor-pointer"
                      onClick={() => {
                        handleNavigate(recentBlogs[2].id);
                      }}
                    >
                      <div className="flex items-center justify-between my-3">
                        <p className="text-lg font-semibold">
                          {recentBlogs[2].title}
                        </p>
                        <MdArrowOutward
                          size={24}
                          className="hover:text-purple-color"
                        />
                      </div>
                      <p>{recentBlogs[2]["description-1"]}</p>
                      {recentBlogs[2].categories.map(
                        (item: string, index: number) => (
                          <span
                            className={`inline-block bg-categories-background-color py-[2px] px-[10px] rounded-[16px] font-medium text-sm mr-2 mt-6 ${
                              index === 0
                                ? "text-purple-color"
                                : index === 2
                                ? "text-royal-blue-color"
                                : "text-crimson-color"
                            }`}
                            key={index}
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:flex gap-6 mt-[60px]" key={recentBlogs[0].id}>
              <img
                src={recentBlogs[0]["image-1"]}
                className="xl:w-1/2 xl:h-[246px] w-full h-[188px]"
                alt="blog-image"
              />
              <div className="mt-8 xl:mt-0 ">
                <p className="text-sm font-semibold text-purple-color">
                  {recentBlogs[0].info}
                </p>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => {
                    handleNavigate(recentBlogs[0].id);
                  }}
                >
                  <div className="flex items-center justify-between my-3">
                    <p className="text-2xl font-semibold">
                      {recentBlogs[0].title}
                    </p>
                    <MdArrowOutward
                      size={24}
                      className="hover:text-purple-color"
                    />
                  </div>
                  <p>
                    {windowWidth < 640
                      ? truncateText(recentBlogs[0]["description-1"], 110)
                      : recentBlogs[0]["description-1"]}
                  </p>
                  {recentBlogs[0].categories.map(
                    (item: string, index: number) => (
                      <span
                        className={`inline-block bg-categories-background-color py-[2px] px-[10px] rounded-[16px] font-medium text-sm mr-2 mt-6 ${
                          index === 0
                            ? "text-purple-color"
                            : index === 2
                            ? "text-royal-blue-color"
                            : "text-crimson-color"
                        }`}
                        key={index}
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </>
        ) : null}

        {/* Display All Blogs */}
        <h1 className="mt-[60px] mb-8 text-2xl">All blog posts</h1>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 md:grid-cols-2">
          {allBlogs.map((post) => (
            <div key={post.id}>
              <img
                className="w-full h-[240px]"
                src={post["image-1"]}
                alt="blog-image"
              />
              <p className="mt-8 text-sm font-semibold text-purple-color">
                {post.info}
              </p>
              <div
                className="hover:cursor-pointer"
                onClick={() => {
                  handleNavigate(post.id);
                }}
              >
                <div className="flex items-center justify-between my-3">
                  <p className="text-2xl font-semibold">{post.title}</p>
                  <MdArrowOutward
                    size={24}
                    className="hover:text-purple-color"
                  />
                </div>
                <p>{truncateText(post["description-1"], 110)}</p>
                {post.categories.map((item: string, index: number) => (
                  <span
                    className={`inline-block bg-categories-background-color py-[2px] px-[10px] rounded-[16px] font-medium text-sm mr-2 mt-6 ${
                      index === 0
                        ? "text-purple-color"
                        : index === 2
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

        {/* Paginatoin */}
        <div
          className={`flex justify-between pb-[30.5px] mt-[30px] pt-[20.5px] space-x-2 border-t-2 items-center flex-col sm:flex-row`}
        >
          <button
            className={`flex text-sm font-medium mb-[20px] sm:mb-0 ${
              darkMode ? "text-white" : "text-gray-500"
            }`}
            onClick={handlePrevious}
          >
            <MdArrowBack size={24} className="mr-2" />
            Previous
          </button>
          <div className=" flex gap-x-[2px]">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`w-[40px] h-[40px] rounded-lg text-sm font-medium ${
                  currentPage === index + 1
                    ? "bg-categories-background-color text-purple-color"
                    : darkMode
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className={`flex text-sm font-medium mt-[20px] sm:mt-0 ${
              darkMode ? "text-white" : "text-gray-500"
            }`}
            onClick={handleNext}
          >
            Next
            <MdArrowForward size={24} className="ml-2" />
          </button>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default BlogComponent;
