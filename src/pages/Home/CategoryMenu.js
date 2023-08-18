import { Box, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDataProductByCategory } from "../../redux/reducer_action/BaseReducerAction";
import { Link } from "react-router-dom";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/category`)
      .then((response) => response.json())
      .then((rs) => {
        if (rs.length > 0) {
          setCategory([...rs]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return category.length > 0 ? (
    <Box sx={{ margin: "64px 16px 16px 16px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}
      >
        <span
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Categories
        </span>
      </Box>
      <Box
        style={{
          display: "flex",
        }}
      >
        {category.map((item) => {
          return (
            <Link
              // onClick={() => handleClick(item)}
              to={`products-by-category/${item.name}/${item.id}`}
              key={item.id}
              style={{
                padding: "8px 16px",
                margin: "0 12px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </Box>
    </Box>
  ) : (
    ""
  );
};

export default CategoryMenu;
