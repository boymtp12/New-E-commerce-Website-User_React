import React, { useState, useEffect } from "react";
import ProductCard from "../../components/Elements/ProductCard";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeDataProductByCategory } from "../../redux/reducer_action/BaseReducerAction";
import { useMediaQuery } from "react-responsive";

const ProductsCategory = () => {
  const { categoryName, categoryId } = useParams();
  const dispatch = useDispatch();
  const data_product_by_category = useSelector(
    (state) => state.base.data_product_by_category
  );
  const [show, setShow] = useState(false);
  // const [products, setProducts] = useState([]);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    fetch(`http://localhost:8080/product-by-category/${categoryId}`)
      .then((response) => response.json())
      .then((rs) => {
        console.log(rs);
        dispatch(changeDataProductByCategory([...rs]));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="productslist">
      <section className="my-5">
        <div className="m-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            <Link to="../">Home</Link> {">"}{" "}
            <span style={{ color: "#ef6832" }}>{categoryName}</span> (
            {data_product_by_category.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        {isTabletOrMobile ? (
          <div className="flex flex-wrap lg:flex-row" style={{justifyContent: 'center'}}>
            {data_product_by_category.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap lg:flex-row">
            {data_product_by_category.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductsCategory;
