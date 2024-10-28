import { createSlice } from "@reduxjs/toolkit";
import { blogData } from "../../../Data";
import { Post } from "../../../Data";

// Blog Interface
interface Blog {
  id: number;
  "image-1": string;
  title: string;
  info: string;
  categories: string[];
  "description-1": string;
  "is-recent"?: boolean;
}

interface BlogState {
  blog: Blog[]; // All Articles
  recentBlogs: Blog[]; // Recent Articles
  filteredRecentBlogs: Blog[]; // Filtered Recent Articles for Exclusion
  currentPage: number; // Current Page
  postsPerPage: number; // Number Of Articles Per Page
  blogArrayLength: number;
  mainBlog: Post[];
  newlattersRecentBlogs: Blog[]; // Newsletter Recent Articles
}

const initialState: BlogState = {
  blog: blogData,
  recentBlogs: [],
  filteredRecentBlogs: [],
  mainBlog: [],
  currentPage: 1,
  postsPerPage: 6,
  blogArrayLength: blogData.length,
  newlattersRecentBlogs: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    Read: (state) => {
      const indexOfLastPost = state.currentPage * state.postsPerPage;
      const indexOfFirstPost = indexOfLastPost - state.postsPerPage;

      state.blog = blogData
        .slice(indexOfFirstPost, indexOfLastPost)
        .map((item) => ({
          id: item.id,
          "image-1": item["image-1"],
          title: item.title,
          info: item.info,
          categories: item.categories,
          "description-1": item["description-1"],
        }));
    },

    ReadRecent: (state) => {
      state.recentBlogs = blogData
        .filter((item) => item["is-recent"] && item.id > 0 && item.id < 5)
        .map((item) => ({
          id: item.id,
          "image-1": item["image-1"],
          title: item.title,
          info: item.info,
          categories: item.categories,
          "description-1": item["description-1"],
        }));
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    ReadRecentWithoutShown: (state, action) => {
      const { idToExclude } = action.payload;
      state.filteredRecentBlogs = blogData
        .filter((item) => item["is-recent"] && item.id !== idToExclude)
        .map((item) => ({
          id: item.id,
          "image-1": item["image-1"],
          title: item.title,
          info: item.info,
          categories: item.categories,
          "description-1": item["description-1"],
        }));
    },

    ReadMainBlogArticle: (state, action) => {
      const { idToShow } = action.payload;
      state.mainBlog = blogData
        .filter((item) => item.id === idToShow)
        .map((item) => ({
          id: item.id,
          "image-1": item["image-1"],
          title: item.title,
          info: item.info,
          categories: item.categories,
          "description-1": item["description-1"],
          "description-2": item["description-2"],
          "definition-1": item["definition-1"],
          "image-2": item["image-2"],
          "description-3": item["description-3"],
          "description-4": item["description-4"],
          "description-5": item["description-5"],
          "description-6": item["description-6"],
          "description-7": item["description-7"],
          "description-8": item["description-8"],
          "description-9": item["description-9"],
          "description-10": item["description-10"],
          "image-3": item["image-3"],
          "definition-2": item["definition-2"],
          "description-11": item["description-11"],
          "description-12": item["description-12"],
          "description-13": item["description-13"],
          "image-4": item["image-4"],
          "definition-3": item["definition-3"],
          "description-14": item["description-14"],
          "description-15": item["description-15"],
          "image-5": item["image-5"],
          "definition-4": item["definition-4"],
          "description-16": item["description-16"],
          "description-17": item["description-17"],
          "image-6": item["image-6"],
          "definition-5": item["definition-5"],
          "description-18": item["description-18"],
          "description-19": item["description-19"],
          "image-7": item["image-7"],
          "definition-6": item["definition-6"],
          "description-20": item["description-20"],
          "description-21": item["description-21"],
          "unorder-list-1": item["unorder-list-1"],
          "unorder-list-2": item["unorder-list-2"],
          "unorder-list-3": item["unorder-list-3"],
          "image-8": item["image-8"],
          "definition-7": item["definition-7"],
          "description-22": item["description-22"],
          "description-23": item["description-23"],
          "description-24": item["description-24"],
          "description-25": item["description-25"],
          "description-26": item["description-26"],
          "image-9": item["image-9"],
          "definition-8": item["definition-8"],
          "description-27": item["description-27"],
          "image-10": item["image-10"],
          "definition-9": item["definition-9"],
          "description-28": item["description-28"],
          "description-29": item["description-29"],
          "description-30": item["description-30"],
        }));
    },

    ReadNewlatters: (state) => {
      state.newlattersRecentBlogs = blogData
        .filter((item) => item["is-recent"] && item.id > 2 && item.id < 6)
        .map((item) => ({
          id: item.id,
          "image-1": item["image-1"],
          title: item.title,
          info: item.info,
          categories: item.categories,
          "description-1": item["description-1"],
        }));
      // console.log("newlattersRecentBlogs", state.newlattersRecentBlogs);
    },
  },
});

export const {
  Read,
  ReadRecent,
  setCurrentPage,
  ReadRecentWithoutShown,
  ReadMainBlogArticle,
  ReadNewlatters,
} = blogSlice.actions;
export default blogSlice.reducer;
