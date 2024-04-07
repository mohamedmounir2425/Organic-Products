import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import IsLoading from "../../Components/isLoading/IsLoading";
import { getProducts } from "../../Store/slices/puplicApi";
import style from "./Detail.module.css";

export default function DetailsProduct() {
  const { products, isLoading } = useSelector((state) => state.productsSlice);
  let navigate = useNavigate();
  let { type, id } = useParams();

  let [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(type));

    let obj = products.filter((item, index) => {
      return item._id == id;
    });

    setProduct(obj);
  }, []);

  return (
    <>
      <div className="container">
        {product.length == 0 ? (
          <IsLoading />
        ) : (
          <>
            <div className="row">
              <div className="col-md-5">
                <img className="w-100 mt-5" src={product[0].src} alt="" />
              </div>
              <div className="col-md-7  ">
                <h2 className="mt-5 mb-4 fw-bold text-primary text-capitalize ">
                  {product[0].name}
                </h2>
                <ul className={`${style.list} text-dark fs-4 fw-bold `}>
                  <li>
                    Price :{" "}
                    <span className="text-success fw-semibold">
                      {" "}
                      {product[0].price}
                    </span>
                  </li>
                  <li>
                    Quantity :
                    <span className="text-success fw-semibold">
                      {" "}
                      {product[0].quantity}
                    </span>
                  </li>
                  <li>
                    Description:{" "}
                    <span className="text-muted fw-semibold ">
                      {product[0].desc}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
