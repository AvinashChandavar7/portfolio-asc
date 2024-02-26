import { BlogData, ProjectData } from "@/Types/type";

export const dataBlog: BlogData[] = [
  {
    uid: "blog-1",
    title: "Sample Blog 1",
    body: {
      text: `In this captivating blog post titled "Sample Blog 1," the author delves into the fascinating realms of JavaScript and animation.The intricacies of animadtuio(presumably a typo for "animation") are explored, shedding light on innovative techniques and tools.The content not only educates readers on these dynamic technologies but also inspires creativity in web development.The author's insights and the vivid examples presented make this blog a valuable resource for enthusiasts seeking to enhance their skills in the ever-evolving world of web development.`,
      image_url: "",
    },
    date: new Date(),
    tags: ["js", "animadtuio"],
    hover_image: "https://images.unsplash.com/photo-1589321578146-4c1ba445cc88",
  },
  {
    uid: "blog-2",
    title: "Sample Blog 2",
    body: {
      text: `In this captivating blog post titled "Sample Blog 1," the author delves into the fascinating realms of JavaScript and animation.The intricacies of animadtuio(presumably a typo for "animation") are explored, shedding light on innovative techniques and tools.The content not only educates readers on these dynamic technologies but also inspires creativity in web development.The author's insights and the vivid examples presented make this blog a valuable resource for enthusiasts seeking to enhance their skills in the ever-evolving world of web development.`,
      image_url: "",
    },
    date: new Date(),
    tags: ["js", "animadtuio"],
    hover_image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },

];

export const dataProject: ProjectData[] = [
  {
    uid: "project-1",
    title: "QTripStatic",
    body: {
      text:
        `
The primary goal of the QTripStatic project was to develop a static website catering to travel enthusiasts seeking diverse adventures in different cities. The project aimed to create an engaging and responsive user interface, providing information about various adventures, adventure details, and an attractive landing page to entice potential users.

HTML and CSS Implementation: Developed three distinct web pages (landing page, adventures page, and adventure details page) from wireframe layouts using HTML and CSS. Bootstrap Integration: Leveraged Bootstrap extensively to ensure a responsive design across various screen sizes. Utilized Bootstrap's grid system, responsive image classes, flex containers, and spacing shorthands to enhance the layout. Navigation and Hero Image: Implemented a collapsible navigation bar for smaller devices, enhancing user experience. Utilized CSS properties to integrate a visually appealing hero image and align elements within it according to the design. Deployed to Netlify/Vercel: Utilized Netlify CLI commands for seamless deployment to Netlify, ensuring the website is accessible online.

Responsive Design: The entire website was designed to be responsive, ensuring a seamless user experience across various devices and screen sizes. Bootstrap played a crucial role in achieving this responsiveness. Adventure Pages: Implemented an adventures page with a responsive grid showcasing different adventure types. The use of Bootstrap's flex containers and spacing shorthands contributed to a visually appealing and organized display. Fixed "Sold Out" Section: Created a fixed side section displaying "Sold out" information, ensuring it remains visible even during scrolling, contributing to a better user experience. Interactive Cities Grid: The landing page featured a cities grid section with responsive images and hover effects, adding an interactive element and making the website visually engaging. Efficient Deployment: Successfully deployed the static website to Netlify, showcasing skills in deployment and ensuring the website is accessible to users online.
      `,

      image_url: "",
    },
    date: new Date(),
    tags: ["HTML", "CSS", "Bootstrap"],
    hover_image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
  {
    uid: "project-2",
    title: "QTripDynamic",
    body: {
      text:
        `At its core, the project aimed to provide a multifaceted adventure-seeking platform, where users could effortlessly discover and book unique experiences across diverse cities. The overarching goal was to deliver an immersive travel website that not only showcased destinations but also offered a personalized and engaging exploration journey.

The development journey unfolded through meticulous phases, orchestrated by a skilled team of developers. Beginning with the creation of visually captivating web pages using HTML and CSS, the project then delved into the realm of dynamic interactivity using JavaScript. Bootstrap played a pivotal role in styling, contributing to the sleek and responsive design that defines QTripDynamic.

Dynamic Pages and User Interaction: QTripDynamic set itself apart by offering dynamically generated pages, responding in real-time to user preferences. The infusion of JavaScript breathed life into the website, enabling multi-select filters, conditional rendering, and an interactive interface that resonated with the spirit of exploration. Reservation System: An integral feature was the implementation of a reservation system. Leveraging the Fetch API, users could seamlessly submit reservation forms, facilitating a streamlined and efficient booking process. Multi-Select Filters: Recognizing the diverse tastes of travelers, the Adventures page featured innovative multi-select filters. This empowered users to tailor their search, ensuring they discovered adventures perfectly aligned with their preferences. Conditional Rendering: The project introduced conditional rendering to provide a dynamic user experience. Elements such as the "Sold out" panel and reservations page responded dynamically to API responses, offering real-time feedback to users. Persistence with LocalStorage: QTripDynamic embraced user-centricity by incorporating LocalStorage. This feature ensured that user preferences persisted across sessions, delivering a personalized journey each time they returned. Deployment Excellence: The deployment strategy showcased the project's commitment to accessibility and reliability. Frontend deployment on Netlify and backend deployment on Heroku ensured a seamless and scalable hosting solution, guaranteeing a consistently smooth user experience.

      `,
      image_url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
    },
    date: new Date(),
    tags: ["js", "asdcsdc"],
    hover_image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
  },
  {
    uid: "project-3",
    title: "XBoard News Feed Website",
    body: {
      text:
        `
he primary goal of the XBoard project was to create a dynamic and visually appealing news feed website that consolidates and presents the latest news on select topics sourced from Flipboard. The project aimed to provide an engaging user experience with a modern design, responsive layouts for both desktop and mobile views, and efficient utilization of relevant web technologies.

The development process involved several key steps and technologies to achieve the project goals: Building from Scratch: XBoard was developed from the ground up using a combination of HTML, CSS, Bootstrap, and JavaScript. These foundational technologies were chosen for their ability to create responsive and interactive web pages. Design Guidelines from Figma: The Figma design file provided a blueprint for the project, offering insights into the layout, color scheme, and overall visual aesthetics. This guided the development process and ensured alignment with the intended design requirements. Integration of Accordions and Image Carousels: To enhance the user interface, each section of the webpage was implemented as an accordion, allowing users to expand and collapse specific content areas. Additionally, image carousels were incorporated to provide a visually dynamic way to display images related to the news articles. API Integration with Flipboard's RSS Feed: The project leveraged the REST API to fetch real-time news content from Flipboard's RSS feed. This dynamic integration ensured that the website's news content stayed current and up-to-date, providing users with the latest information on their selected topics. Desktop and Mobile Views: The responsive design of XBoard catered to both desktop and mobile users. The implementation of different views for these platforms ensured a seamless and optimized experience, adapting to various screen sizes and device types. Deployment to Netlify: The dynamic webpage, once developed, was deployed to Netlify for hosting. This deployment platform offered scalability, reliability, and easy maintenance for the live website.

Some key features of the XBoard News Feed Website include: Dynamic News Content: Real-time fetching of news articles from Flipboard's RSS feed ensures that users have access to the latest information on selected topics. Accordion Layout: The use of accordions improves user experience by allowing them to expand and collapse sections of interest, providing a streamlined and organized presentation of content. Image Carousels: Visual appeal is enhanced through the use of image carousels, offering a dynamic and interactive way to showcase images related to news articles. Responsive Design: XBoard is accessible on both desktop and mobile devices, with layouts optimized for different screen sizes. Figma-Guided Design: The project adhered to design guidelines provided in the Figma file, ensuring consistency with the intended visual aesthetics.
      `,
      image_url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
    },
    date: new Date(),
    tags: ["js", "asdcsdc"],
    hover_image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
  },
  {
    uid: "project-4",
    title: "QKart Frontend",
    body: {
      text:
        `
QKart is an E-commerce application developed to provide users with a seamless shopping experience. The primary goals of this project were to implement core functionalities, enhance the user interface, and deploy the application. The development focused on key components like authentication, shopping cart, and checkout, utilizing REST APIs and ensuring a responsive design for various devices.

Deployment and Configurations: Successfully deployed the QKart React app on Netlify, ensuring a live and accessible online presence. Configured Netlify to support direct access to sub-pages, optimizing the React single-page application architecture. Shopping Cart and Checkout Flow: Implemented core logic for authentication, shopping cart, and checkout. Enhanced user experience with a responsive shopping cart design on the Products page and Checkout page. Enabled authenticated POST API calls for seamless cart interactions. Implemented UI and logic for adding/selecting new addresses during the checkout process. Products Page and Search Feature: Utilized React's useEffect() hook to fetch product data efficiently after DOM rendering. Designed and implemented a search bar for the Products page with debouncing for improved user experience. Employed Material UI Grid for organized product display. Registration and Login Flow: Established a robust registration-login flow using React Router for seamless page navigation. Stored user information locally with localStorage, ensuring persistence across visits. Implemented UI and logic for the Login page, enhancing user authentication. Registration Feature: Integrated backend API to facilitate user registration, ensuring a smooth onboarding process. Implemented input validation for the registration form, providing informative error messages. Leveraged React.js, event handling, forms, React Hooks, and REST API for comprehensive functionality.

Key Features: Seamless deployment on Netlify for online accessibility. Responsive design for a uniform experience across different devices. Efficient shopping cart and checkout flow with authenticated API calls. Improved user experience with a debounced search feature on the Products page. User-friendly registration and login process with local storage for data persistence.
      `,
      image_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
    date: new Date(),
    tags: ["js", "asdcsdc"],
    hover_image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
  {
    uid: "project-5",
    title: "QKart Backend",
    body: {
      text:
        `
QKart Backend aimed to establish a robust foundation for the QKart E-commerce application by building a set of REST APIs following best practices. The project emphasized a layered architecture for maintainability, integrated MongoDB for data storage, and implemented various authentication schemes to ensure security.

Key Achievements: Layered Architecture and Deployment: Developed a comprehensive set of REST APIs using a layered approach, optimizing for easy maintenance and scalability. Successfully deployed the QKart Node.js app on Heroku and configured the QKart React frontend on Netlify to utilize the deployed Node.js backend. Utilized MongoDB Atlas to create a cloud-based MongoDB instance, storing product data for the E-commerce application. Test-Driven Development for Checkout Logic: Implemented the checkout logic using Test-Driven Development (TDD) principles. Enhanced unit tests with Jest-based assertions to validate checkout requirements. Conducted integration tests to identify and resolve bugs in the integrated checkout logic. Shopping Cart APIs and Endpoint Enhancements: Implemented GET/POST/PUT API endpoints for user shopping carts, enhancing the overall shopping experience. Improved the GET /v1/users endpoint by supporting filtering for user addresses through query parameters. Secure API Endpoints and Authentication: Implemented multiple authentication schemes, including short-lived JWT tokens and Passport library for token authentication. Secured the GET /v1/users endpoint using token authentication to protect user data. Developed POST APIs for user registration and login, incorporating password authentication with secure hashing. Application Setup and Initial API Implementation: Set up the application and implemented the initial GET /v1/users API endpoint to deliver user data to clients. Adopted a layered approach for the request-response cycle, enhancing code maintainability. Utilized Mongoose (Node.js-MongoDB ODM) to fetch user data from MongoDB, incorporated JOI schema for request validation, and employed middlewares to minimize code duplication.

Key Features: Layered architecture for scalable and maintainable code. Cloud-based MongoDB storage for efficient data management. Test-Driven Development approach for reliable checkout logic. Comprehensive authentication schemes, including short-lived JWT tokens. Enhanced shopping cart functionality and improved endpoint filtering for user addresses.
      `,
      image_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
    date: new Date(),
    tags: ["js", "asdcsdc"],
    hover_image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },

  {
    uid: "project-6",
    title: "XFlix Frontend",
    body: {
      text:
        `
XFlix is a video sharing platform developed to host and share videos globally. The project aimed to build the XFlix frontend entirely from scratch, aligning with Figma design specifications and utilizing Postman for API integration and testing.

Frontend Development from Scratch: Successfully built the XFlix frontend using React.js, ensuring a responsive and visually appealing user interface. Implemented three crucial views: Landing page, Video page, and Video Upload Modal, meeting design requirements outlined in Figma. API Integration and Testing: Utilized Postman collections to comprehend the requirements of five distinct REST APIs, streamlining the integration process. Implemented a mock backend server using Postman Mock Server to simulate API responses, facilitating end-to-end testing of the frontend application. Deployment on Netlify: Deployed the React application to Netlify, ensuring accessibility and seamless user experience on the live platform. Achieved a successful deployment that reflected the frontend's functionality as designed and tested during development.

Visually appealing Landing Page providing an engaging introduction to XFlix. Seamless navigation between the Landing Page, Video Page, and Video Upload Modal for user-friendly interaction. Robust API integration using Postman collections, ensuring efficient communication between the frontend and backend. End-to-end testing facilitated by a Postman Mock Server, allowing comprehensive validation of frontend functionality. Deployment on Netlify for a live and accessible XFlix platform.
      `,
      image_url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
    },
    date: new Date(),
    tags: ["js", "asdcsdc"],
    hover_image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
  },
  {
    uid: "project-6",
    title: "XFlix Backend",
    body: {
      text:
        `
Project Overview: XFlix Node Backend was developed to power the XFlix video sharing platform, focusing on building a robust backend infrastructure using Node.js, Express.js, and MongoDB. The primary goals were to implement a set of REST APIs, enhance the video retrieval endpoint, and seamlessly integrate the backend with the XFlix frontend.

Key Achievements: Backend Development from Scratch: Built the XFlix backend using Node.js, Express.js, and MongoDB, ensuring a scalable and performant foundation. Implemented a set of 5 REST APIs, including functionalities for video retrieval, creation, voting, and view tracking. Enhanced Video Retrieval Endpoint: Improved the GET /v1/videos endpoint to offer advanced search and filtering capabilities. Enabled video title search, filtering by multiple genres, content rating, and sorting options such as upload date or view count. Utilized MongoDB to persistently store video data, optimizing retrieval efficiency. Integration with XFlix Frontend and Deployment: Successfully plugged in the backend to the XFlix frontend, creating a seamless full-stack application. Deployed the integrated application, ensuring live accessibility and functionality for users.

Key Features: Set of 5 essential REST APIs catering to video retrieval, creation, voting, and view tracking. Advanced capabilities in the GET /v1/videos endpoint, including video title search, multi-genre filtering, content rating filtering, and sorting options. Integration with MongoDB for efficient and persistent storage of video data. Seamless integration with the XFlix frontend, providing users with a complete video sharing platform experience. Deployment of the full-stack application for live usage and accessibility.
      `,
      image_url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    },
    date: new Date(),
    tags: ["js", "asdcsdc"],
    hover_image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
];