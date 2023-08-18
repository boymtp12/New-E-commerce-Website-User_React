import React, { useState, useEffect } from "react";
import ProductCard from "../../components/Elements/ProductCard";
import FilterMenu from "./components/FilterMenu";
import { useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useFilter } from "../../Context/FilterContext";
import { useDispatch, useSelector } from "react-redux";
import { changeDataProductList } from "../../redux/reducer_action/BaseReducerAction";

const ProductsList = () => {
  const dispatch = useDispatch();
  const data_product_list = useSelector(
    (state) => state.base.data_product_list
  );
  useTitle("Danh sách sản phẩm");
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");

  console.log(data_product_list);
  useEffect(() => {
    fetch(`http://localhost:8080/product`)
      .then((response) => response.json())
      .then((rs) => {
        console.log(rs);
        dispatch(changeDataProductList([...rs]));
      });
  }, [searchTerm]);
  return (
    <main className="productslist">
      <section className="my-5">
        <div className="m-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            Danh sách sản phẩm ({data_product_list?.length})
          </span>
          <span>
            <FilterMenu />
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {data_product_list?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductsList;
