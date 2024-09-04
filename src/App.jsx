// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import NavBar from "./components/NavBar";
// import CardBody from "./components/cardBody";
// import SignUp from "./components/SignUp";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <NavBar />,
// //   },
// //   {
// //     path: "/SignUp",
// //     element: <SignUp />,
// //   },
// // ]);

// function App() {
//   return (
//     <>
//       <NavBar />
//       <CardBody />
//       {/* <SignUp />
//       <RouterProvider router={router} /> */}
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import Login from "./Components/login/Login";
import PostForm from "./Components/posts/PostForm";
import SignUp from "./Components/signup/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import PostList from "./Components/posts/PostList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/posts" element={<PostForm />} />
        <Route path="/PostList" element={<PostList />} />
      </Routes>
    </Router>
  );
}

export default App;
