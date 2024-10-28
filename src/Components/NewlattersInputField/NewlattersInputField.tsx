import React from "react";

interface NewlattersInputFieldProps {
  subTitle: string;
  title: string;
  text: string;
  darkMode: boolean;
}

const NewlattersInputField: React.FC<NewlattersInputFieldProps> = ({
  subTitle,
  title,
  text,
  darkMode,
}) => {
  return (
    <div className="mb-8">
      <p className="text-[16px] font-semibold text-purple-color mx-auto w-fit mb-3">
        {subTitle}
      </p>
      <p
        className={`text-[36px] font-semibold w-fit mx-auto ${
          darkMode ? "text-white" : "text-black"
        } mb-6`}
      >
        {title}
      </p>
      <p className="text-[20px] mb-10">{text}</p>
      <form className="sm:mx-auto sm:w-fit">
        <input
          type="text"
          className="h-12 pl-4 border-2 rounded-lg sm:w-[360px] w-full placeholder:text-gray-color"
          placeholder="Enter your email"
        />
        <input
          type="submit"
          value="Subscribe"
          className="h-12 rounded-lg bg-purple-color w-[118px] text-white font-medium sm:mt-0 mt-3 sm:ml-4 mb-2 block sm:inline"
        />
        <p className="text-sm">
          We care about your data in our{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default NewlattersInputField;
