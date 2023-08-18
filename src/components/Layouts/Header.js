import React, { useEffect, useState } from "react";
import Logo from "../../asset/logo.png";
import { Link } from "react-router-dom";
import DropdownLoggedOut from "../Elements/DropdownLoggedOut";
import DropdownLoggedIn from "../Elements/DropdownLoggedIn";
import { IMG } from "../../asset/img";
import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { changeDataFeatureProduct } from "../../redux/reducer_action/BaseReducerAction";
import { toast } from "react-toastify";
//import axios from "axios";
const Header = () => {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const token = JSON.parse(sessionStorage.getItem("token"));

  const [searchTerm, setSearchTerm] = useState("");
  //const [cardListLength, setCardListLength] = useState(0);

  // const getTokenFromSessionStorage = () => {
  //   const token = JSON.parse(sessionStorage.getItem("token"));
  //   return token;
  // };

  // useEffect(() => {
  //   const getCartSize = async () => {
  //     try {
  //       const token = getTokenFromSessionStorage();
  //       const headers = {
  //         Authorization: `Bearer ${token}`,
  //       };
  //       const response = await axios.get("http://localhost:8080/cart-size", { headers });

  //       if (response.status === 200) {
  //         const cartSize = response.data; // Giả sử kết quả trả về là số cart size, chẳng hạn 4
  //         setCardListLength(cartSize); // Cập nhật giá trị state cardListLength
  //       }
  //     } catch (error) {
  //       console.error("Failed to get cart size:", error);
  //     }
  //   };

  //   getCartSize();
  // }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      fetch(`http://localhost:8080/product?productName=${searchTerm}`)
        .then((response) => response.json())
        .then((rs) => {
          dispatch(changeDataFeatureProduct([...rs]));
          toast.success("Search successfull");
        })
        .catch((err) => {
          toast.error("Search failed");
        });
    } else {
      fetch(`http://localhost:8080/product`)
        .then((response) => response.json())
        .then((rs) => {
          dispatch(changeDataFeatureProduct([...rs]));
          toast.success("Search successfull");
        })
        .catch((err) => {
          toast.error("Search failed");
        });
    }
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img
              src={IMG.logo}
              style={{ width: "60px", borderRadius: "50%" }}
              alt="Frontendgyaan Logo"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "16px",
              }}
              className="bg-white border-gray-200 dark:bg-gray-800"
            >
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                HỆ THỐNG SIÊU THỊ HÀNG NHẬT NỘI ĐỊA
              </span>
              <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                SAKUKO JAPANESE STORE
              </span>
            </div>
          </Link>
          <div className="flex items-center ">
            <form onSubmit={(e) => handleSearch(e)}>
              <Box
                style={{ border: "1px solid #ccc", margin: "0 16px" }}
                display="flex"
                backgroundColor="#f7f7f7"
                borderRadius="3px"
              >
                <InputBase
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{ ml: 2, flex: 1 }}
                  placeholder="Search"
                />
                <IconButton type="submit" sx={{ padding: "4px" }}>
                  <SearchIcon />
                </IconButton>
              </Box>
            </form>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full"></span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              style={{ position: "relative" }}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"
            >
              {dropdown &&
                (token ? (
                  <DropdownLoggedIn setDropdown={setDropdown} />
                ) : (
                  <DropdownLoggedOut setDropdown={setDropdown} />
                ))}
            </span>
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
