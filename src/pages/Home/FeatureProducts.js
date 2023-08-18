import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Elements/ProductCard";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { changeDataFeatureProduct } from "../../redux/reducer_action/BaseReducerAction";

const FeatureProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const data_feature_product = useSelector(
    (state) => state.base.data_feature_product
  );

  async function fetchProducts() {
    fetch("http://localhost:8080/product")
      .then((response) => response.json())
      .then((rs) => {
        dispatch(changeDataFeatureProduct([...rs]));
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="dark:text-slate-100 text-center text-2xl font-semibold mb-5 underline underline-offset-8 ">
        Featured Product
      </h1>
      {isTabletOrMobile ? (
        <div
          className="flex flex-wrap lg:flex-row"
          style={{ justifyContent: "center" }}
        >
          {data_feature_product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap lg:flex-row">
          {data_feature_product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
export default FeatureProducts;
