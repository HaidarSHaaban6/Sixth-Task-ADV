import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import NewlattersInputField from "../NewlattersInputField/NewlattersInputField";
import { ReadNewlatters } from "./../../Redux/Slice/BlogSlice";
import { MdArrowOutward } from "react-icons/md";
import { Navigate } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";

const NewsletterComponent = () => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.mode?.darkMode || false);

  useEffect(() => {
    dispatch(ReadNewlatters());
  }, [dispatch]);

  const newlattersRecentBlogs = useSelector((state) => {
    return state.articles.newlattersRecentBlogs;
  });

  // Handle navigation to a selected blog post
  const handleNavigate = (id: number) => {
    Navigate(`/blog/${id}`);
  };

  // Function to truncate text if it's longer than the specified maxLength
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "..."; // Truncate and add ellipsis
    }
    return text; // Return as is if shorter than maxLength
  };

  const newlattersInputFieldText =
    "Subscribe to learn about new product features, the latest in technology, solutions, and updates.";

  return (
    <div
      className={
        darkMode ? "bg-dark-mode-color text-white" : "bg-white text-gray-color"
      }
    >
      <NavBarComponent name="haidar" />
      <div className="md:mx-20">
        <div className="my-[72px] mx-8">
          <NewlattersInputField
            title="Stories and interviews"
            subTitle="Newsletters"
            text={newlattersInputFieldText}
            darkMode={darkMode}
          />
        </div>
        <div className="flex flex-wrap xl:gap-8 justify-between max-w-[1216px] md:mx-auto mx-8">
          {newlattersRecentBlogs.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`mb-6 w-full ${
                  index === 2 ? "w-full lg:w-[31%]" : "md:w-[47%] lg:w-[31%]"
                }`}
                //
              >
                <img
                  className="w-full h-[204px] object-cover"
                  src={item["image-1"]}
                  alt="blog-image"
                />
                <p className="mt-2 text-sm font-semibold text-purple-color">
                  {item.info}
                </p>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => handleNavigate(item.id)}
                >
                  <div className="flex items-center justify-between my-3">
                    <p
                      className={`text-2xl font-semibold ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {item.title}
                    </p>
                    <MdArrowOutward
                      size={24}
                      className="hover:text-purple-color"
                    />
                  </div>
                  <p>{truncateText(item["description-1"], 110)}</p>
                </div>
                <div className="mt-4">
                  {item.categories.map((item: string, index: number) => (
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
            );
          })}
          <div className="mx-auto w-fit sm:mx-0">
            <FooterComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterComponent;
