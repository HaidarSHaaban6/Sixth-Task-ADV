// Importing The Image
import firstBlogImage from "./../assets/Image3.jpg";
import secondBlogImage from "./../assets/Image.jpg";
import thirdBlogImage from "./../assets/Image1.jpg";
import fourthBlogImage from "./../assets/Image2.jpg";
import fifthBlogImage from "./../assets/Image4.jpg";
import sixthBlogImage from "./../assets/Image5.jpg";
import seventhBlogImage from "./../assets/Image6.jpg";
import eighthBlogImage from "./../assets/Image7.jpg";
import ninthBlogImage from "./../assets/Image8.jpg";
import tenthBlogImage from "./../assets/Image9.jpg";
import blogArticleImage1 from "./../assets/Image10.jpg";
import blogArticleImage2 from "./../assets/Image11.jpg";
import blogArticleImage3 from "./../assets/Image12.jpg";
import blogArticleImage4 from "./../assets/Image13.jpg";
import blogArticleImage5 from "./../assets/Image14.jpg";
import blogArticleImage6 from "./../assets/Image15.jpg";
import blogArticleImage7 from "./../assets/Image16.jpg";
import blogArticleImage8 from "./../assets/Image17.jpg";
import blogArticleImage9 from "./../assets/Image18.jpg";

// JSON Body :
export const blogData = [
  {
    id: 1,
    "image-1": firstBlogImage,
    title: "Grid system for better Design User Interface",
    info: "Sunday , 1 Jan 2023",
    categories: ["Design", "Interface"],
    "description-1":
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 2,
    "image-1": secondBlogImage,
    title: "UX review presentations",
    info: "Olivia Rhye • 1 Jan 2023",
    categories: ["Design", "Research", "Presentation"],
    "description-1":
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 3,
    "image-1": thirdBlogImage,
    title: "Migrating to Linear 101",
    info: "Phoenix Baker • 1 Jan 2023",
    categories: ["Design", "Research"],
    "description-1":
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 4,
    "image-1": fourthBlogImage,
    title: "Building your API Stack",
    info: "Lana Steiner • 1 Jan 2023",
    categories: ["Design", "Research"],
    "description-1":
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 5,
    "image-1": fifthBlogImage,
    title: "Bill Walsh leadership lessons",
    info: "Sunday , 1 Jan 2023",
    categories: ["Leadership", "Management", "Presentation"],
    "description-1":
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 6,
    "image-1": sixthBlogImage,
    title: "PM mental models",
    info: "Sunday , 1 Jan 2023",
    categories: ["Product", "Research", "Frameworks"],
    "description-1":
      "Mental models are simple expressions of complex processes or relationships.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 7,
    "image-1": seventhBlogImage,
    title: "What is Wireframing?",
    info: "Sunday , 1 Jan 2023",
    categories: ["Design", "Research", "Presentation"],
    "description-1":
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 8,
    "image-1": eighthBlogImage,
    title: "How collaboration makes us better designers",
    info: "Sunday , 1 Jan 2023",
    categories: ["Design", "Research", "Presentation"],
    "description-1":
      "Collaboration can make our teams stronger, and our individual designs better.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 9,
    "image-1": ninthBlogImage,
    title: "Our top 10 Javascript frameworks to use",
    info: "Sunday , 1 Jan 2023",
    categories: ["Software Development", "Tools", "SaaS"],
    "description-1":
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  {
    id: 10,
    "image-1": tenthBlogImage,
    title: "Podcast: Creating a better CX Community",
    info: "Sunday , 1 Jan 2023",
    categories: ["Podcasts", "Customer Success", "Presentation"],
    "description-1":
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": true,
  },
  // {
  //   id: 11,
  //   "image-1": firstBlogImage,
  //   title: "Grid system for better Design User Interface",
  //   info: "Sunday , 1 Jan 2023",
  //   categories: ["Design", "Interface"],
  //   "description-1":
  //     "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
  //   "description-2":
  //     "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
  //   "definition-1":
  //     "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
  //   "image-2": blogArticleImage1,
  //   "description-3":
  //     "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
  //   "description-4":
  //     "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
  //   "description-5":
  //     "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
  //   "description-6":
  //     "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
  //   "description-7": "Breaking Down the Grid",
  //   "description-8":
  //     "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
  //   // Columns:
  //   "description-9":
  //     "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
  //   //  Gutters:
  //   "description-10":
  //     "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
  //   "image-3": blogArticleImage2,
  //   "definition-2":
  //     "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
  //   "description-11": "Examples of Grids in Use",
  //   "description-12": "Example 1: Hierarchical Grid",
  //   "description-13":
  //     "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
  //   "image-4": blogArticleImage3,
  //   "definition-3":
  //     "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
  //   "description-14": "Example 2: Column Grid",
  //   "description-15":
  //     "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
  //   "image-5": blogArticleImage4,
  //   "definition-4":
  //     "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
  //   "description-16": "Example 3: Modular Grid",
  //   "description-17":
  //     "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
  //   "image-6": blogArticleImage5,
  //   "definition-5":
  //     "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
  //   "description-18": "Example 4: Breaking the Grid",
  //   "description-19":
  //     "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
  //   "image-7": blogArticleImage6,
  //   "definition-6":
  //     "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
  //   "description-20": "Benefits of the Grid",
  //   // unorder list
  //   "description-21":
  //     "Using a grid benefits both end users and the designers alike:",
  //   "unorder-list-1":
  //     "Designers can quickly put together well-aligned interfaces.",
  //   "unorder-list-2":
  //     "Users can easily scan predictable grid-based interfaces.",
  //   "unorder-list-3":
  //     "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
  //   "image-8": blogArticleImage7,
  //   "definition-7":
  //     "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
  //   "description-22":
  //     "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
  //   "description-23": "Choosing and Setting Up Your Grid",
  //   "description-24":
  //     "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
  //   "description-25":
  //     // Choose the right grid for your needs.
  //     " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
  //   "description-26":
  //     // Spend time setting up your grid.
  //     " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
  //   "image-9": blogArticleImage8,
  //   "definition-8":
  //     "Easily set the number of columns, the gutter size, and margin size in Figma.",
  //   "description-27":
  //     // Always place content within columns, not gutters.
  //     " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
  //   "image-10": blogArticleImage9,
  //   "definition-9":
  //     "Content or elements should be placed within and across columns, not gutters.",
  //   "description-28":
  //     // Consider using an 8px grid system.
  //     " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
  //   "description-29": "Conclusion",
  //   "description-30":
  //     "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
  //   "is-recent": false,
  // },
  {
    id: 12,
    "image-1": secondBlogImage,
    title: "UX review presentations",
    info: "Olivia Rhye • 1 Jan 2023",
    categories: ["Design", "Research", "Presentation"],
    "description-1":
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
  {
    id: 13,
    "image-1": thirdBlogImage,
    title: "Migrating to Linear 101",
    info: "Phoenix Baker • 1 Jan 2023",
    categories: ["Design", "Research"],
    "description-1":
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
  {
    id: 14,
    "image-1": fourthBlogImage,
    title: "Building your API Stack",
    info: "Lana Steiner • 1 Jan 2023",
    categories: ["Design", "Research"],
    "description-1":
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
  {
    id: 15,
    "image-1": fifthBlogImage,
    title: "Bill Walsh leadership lessons",
    info: "Sunday , 1 Jan 2023",
    categories: ["Leadership", "Management", "Presentation"],
    "description-1":
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
  {
    id: 16,
    "image-1": sixthBlogImage,
    title: "PM mental models",
    info: "Sunday , 1 Jan 2023",
    categories: ["Product", "Research", "Frameworks"],
    "description-1":
      "Mental models are simple expressions of complex processes or relationships.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
  {
    id: 17,
    "image-1": seventhBlogImage,
    title: "What is Wireframing?",
    info: "Sunday , 1 Jan 2023",
    categories: ["Design", "Research", "Presentation"],
    "description-1":
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
  {
    id: 18,
    "image-1": eighthBlogImage,
    title: "How collaboration makes us better designers",
    info: "Sunday , 1 Jan 2023",
    categories: ["Design", "Research", "Presentation"],
    "description-1":
      "Collaboration can make our teams stronger, and our individual designs better.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
  {
    id: 19,
    "image-1": ninthBlogImage,
    title: "Our top 10 Javascript frameworks to use",
    info: "Sunday , 1 Jan 2023",
    categories: ["Software Development", "Tools", "SaaS"],
    "description-1":
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
  {
    id: 20,
    "image-1": tenthBlogImage,
    title: "Podcast: Creating a better CX Community",
    info: "Sunday , 1 Jan 2023",
    categories: ["Podcasts", "Customer Success", "Presentation"],
    "description-1":
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    "description-2":
      "If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.",
    "definition-1":
      "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
    "image-2": blogArticleImage1,
    "description-3":
      "There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.",
    "description-4":
      "Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.",
    "description-5":
      "Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.",
    "description-6":
      "Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.",
    "description-7": "Breaking Down the Grid",
    "description-8":
      "Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.",
    // Columns:
    "description-9":
      "Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.",
    //  Gutters:
    "description-10":
      "The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.",
    "image-3": blogArticleImage2,
    "definition-2":
      "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
    "description-11": "Examples of Grids in Use",
    "description-12": "Example 1: Hierarchical Grid",
    "description-13":
      "Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.",
    "image-4": blogArticleImage3,
    "definition-3":
      "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-14": "Example 2: Column Grid",
    "description-15":
      "Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.",
    "image-5": blogArticleImage4,
    "definition-4":
      "Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-16": "Example 3: Modular Grid",
    "description-17":
      "Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.",
    "image-6": blogArticleImage5,
    "definition-5":
      "Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-18": "Example 4: Breaking the Grid",
    "description-19":
      "Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.",
    "image-7": blogArticleImage6,
    "definition-6":
      "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
    "description-20": "Benefits of the Grid",
    // unorder list
    "description-21":
      "Using a grid benefits both end users and the designers alike:",
    "unorder-list-1":
      "Designers can quickly put together well-aligned interfaces.",
    "unorder-list-2":
      "Users can easily scan predictable grid-based interfaces.",
    "unorder-list-3":
      "A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.",
    "image-8": blogArticleImage7,
    "definition-7":
      "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
    "description-22":
      "Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.",
    "description-23": "Choosing and Setting Up Your Grid",
    "description-24":
      "How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.",
    "description-25":
      // Choose the right grid for your needs.
      " Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.",
    "description-26":
      // Spend time setting up your grid.
      " Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.",
    "image-9": blogArticleImage8,
    "definition-8":
      "Easily set the number of columns, the gutter size, and margin size in Figma.",
    "description-27":
      // Always place content within columns, not gutters.
      " The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.",
    "image-10": blogArticleImage9,
    "definition-9":
      "Content or elements should be placed within and across columns, not gutters.",
    "description-28":
      // Consider using an 8px grid system.
      " For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.",
    "description-29": "Conclusion",
    "description-30":
      "Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.",
    "is-recent": false,
  },
];

// Post Interface
export interface Post {
  id: number;
  "image-1": string;
  title: string;
  info: string;
  categories: string[];
  "description-1": string;
  "description-2": string;
  "definition-1": string;
  "image-2": string;
  "description-3": string;
  "description-4": string;
  "description-5": string;
  "description-6": string;
  "description-7": string;
  "description-8": string;
  "description-9": string;
  "description-10": string;
  "image-3": string;
  "definition-2": string;
  "description-11": string;
  "description-12": string;
  "description-13": string;
  "image-4": string;
  "definition-3": string;
  "description-14": string;
  "description-15": string;
  "image-5": string;
  "definition-4": string;
  "description-16": string;
  "description-17": string;
  "image-6": string;
  "definition-5": string;
  "description-18": string;
  "description-19": string;
  "image-7": string;
  "definition-6": string;
  "description-20": string;
  "description-21": string;
  "unorder-list-1": string;
  "unorder-list-2": string;
  "unorder-list-3": string;
  "image-8": string;
  "definition-7": string;
  "description-22": string;
  "description-23": string;
  "description-24": string;
  "description-25": string;
  "description-26": string;
  "image-9": string;
  "definition-8": string;
  "description-27": string;
  "image-10": string;
  "definition-9": string;
  "description-28": string;
  "description-29": string;
  "description-30": string;
  "is-recent": boolean;
}
