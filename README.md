# PSN SOCIAL NETWORK

- This app is for educational purpose only.
- PSN Social Network tries to mimic a few functions of Twitter, including:
  - Create post with text and image
  - The number of characters in each post is limited to 200 characters
  - Like, comment and re-post a post
  - View the number of likes, comments and shares of a post
  - Comments are toggle
  - The number of character in each comment is limited to 100 characters
  - Follow, un-follow someone
  - See who are following us and follow them back
  - Check who we are following
  - View all posts of an individual
  - View our own posts
  - List all user accounts in the entire social network (due to the number of users are still small, I did not develop search user function)
  - Other functions:
    - Due to limited storage space, client app compresses the uploaded image to the maximum of 250px (width or height)
    - User avatar is created by hashing user id and convert that hash code into a hexagonal image
    - Authentication and authorization use JWT
    - Responsive frontend for desktop and mobile devices
- Technical stack:
  - Frontend: ReactJS, Redux Toolkit, React Router, React Bootstrap
  - Backend: Java Spring Boot
  - Database: MongoDB

**Live Demo:**
https://psn-social-network.herokuapp.com/#/
