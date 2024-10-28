import { useSelector } from "react-redux";

interface BlogTitleComponentProps {
  title: string;
}

const BlogTitleComponent: React.FC<BlogTitleComponentProps> = ({ title }) => {
  const darkMode = useSelector((state: any) => state.mode.darkMode);

  return (
    <p
      className={`text-[72px] md:text-[161px] xl:text-[253.8px] font-bold mx-auto w-fit relative before:content-empty before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] after:content-empty after:absolute after:bottom-0 after:right-0 after:w-full after:h-[2px] ${
        darkMode
          ? " before:bg-white after:bg-white"
          : "before:bg-eerie-black-color  after:bg-eerie-black-color"
      }`}
    >
      {title}
    </p>
  );
};

export default BlogTitleComponent;
