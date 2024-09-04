// import React from "react";
// import "./NavBar.css";
// import Logo from "../assets/logo.png";
// import User from "../assets/user.jpg";
// import { FaSearch } from "react-icons/fa";

// const NavBar = () => {
//   return (
//     <>
//       <header>
//         <div className="logoContainer">
//           <img className="logo" src={Logo} alt="logo"></img>
//           <span>Amazon</span>
//         </div>
//         <div className="search">
//           <input
//             type="Search"
//             className="searchContainer"
//             placeholder="Search"
//           ></input>
//           <FaSearch size={15} />
//         </div>
//         <div>
//           <img className="userImg" src={User} alt="user"></img>
//         </div>
//       </header>
//     </>
//   );
// };

// export default NavBar;
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <header className={styles.header}>
        <div className={styles.topHeader}>
          <div className={styles.headingContainer}>
            <span className={styles.chatterly}>Cartoon</span>
          </div>
          <div className={styles.authContainer}>
            <button
              className={styles.authButton}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className={styles.authButton}
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
            <div className={styles.UserContainer}>
              {/* Uncomment and set src if profile photo is available */}
              {/* <img
                className={styles.profilePhoto}
                src={userprofile}
                alt="Profile Photo"
              /> */}
              <span className={styles.userName}>Simran Jawla</span>
            </div>
          </div>
        </div>
        <div className={styles.bottomHeader}>
          <span>Filters</span>
          <IoFilterOutline />
          <div className={styles.CreatedBy}>
            <label>Created By</label>
            <select className={styles.selectContainer}>
              <option>All</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <IoIosArrowDropdown />
          </div>
          <div className={styles.CreatedBy}>
            <label>Published Date</label>
            <input type="date" name="selectedDate" id="selectedDate" />
          </div>
          <div className={styles.SearchContainer}>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <FaSearch />
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
