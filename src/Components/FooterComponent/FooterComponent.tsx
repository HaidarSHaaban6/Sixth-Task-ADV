import { MdCopyright } from "react-icons/md";

const FooterComponent = () => {
  return (
    <footer>
      <ul className="flex gap-[14px] list-none text-[20px] flex-wrap flex-col sm:flex-row items-center sm:items-start">
        <li className="flex items-center order-9 gap-1 sm:order-none mt-[30px] sm:mt-0">
          <MdCopyright size={24} />
          2023
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
        <li>
          <a href="#">RSS feed</a>
        </li>
        <li>
          <a href="#">Add to Feedly</a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterComponent;
