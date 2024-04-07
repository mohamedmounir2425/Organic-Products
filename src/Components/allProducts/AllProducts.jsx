import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IsLoading from "../isLoading/IsLoading";
import ProductItem from "../ProductItem/ProductItem";
import style from "./AllProducts.module.css";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../Store/slices/puplicApi";

export default function AllProducts() {
  const { products, isLoading } = useSelector((state) => state.productsSlice);

  let [vegetable, setVegetable] = useState([]);
  let [fruits, setFruits] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts("all"));
  }, []);

  return (
    <>
      <section className={`${style.secBg} bg-primary`}>
        <div className={` position-relative  `}>
          <div
            className={`${style.cover} w-100 poition-absolute top-0 end-0 start-0`}
          ></div>
          <div className={`${style.caption}   position-absolute p-3`}>
            <h1 className="fw-Semibold text-center ">Start Shopping</h1>
          </div>
        </div>
      </section>

      <div className="bg-light">
        <section>
          <div className="container">
            <div className="row my-5 g-3">
              {isLoading ? (
                <IsLoading />
              ) : (
                <>
                  {products.map((product, index) => {
                    return <ProductItem key={product._id} product={product} />;
                  })}
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
