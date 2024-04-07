import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProducts, getProducts } from "../../Store/slices/puplicApi";
import style from "./MainTable.module.css";
export default function MainTable() {
  const { products, isLoading } = useSelector((state) => state.productsSlice);
  let { type } = useParams();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(type));
  }, []);
  useEffect(() => {
    dispatch(getProducts(type));
  }, [products]);

  let deleteProduct = (id) => {
    dispatch(deleteProducts({ type, id }));
  };
  return (
    <>
      <div className=" ">
        <div className="container py-5">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn btn-warning"
          >
            Back to login
          </button>

          <div className="text-end">
            <button
              onClick={() => {
                navigate(`/admin/addToTable/${type}`);
              }}
              className="btn btn-primary btn-lg m-2 "
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div className="">
            <h2 className="text-center fs-1 text-muted py-2 text-capitalize">
              {type}
            </h2>
            <table className="table w-100  text-center  ">
              <thead className={`${style.tableHead} `}>
                <tr className=" py-5">
                  <th className=" py-4">id</th>
                  <th className="">Image</th>
                  <th className="">Title</th>
                  <th className="">Price</th>
                  <th className="">Quantity</th>
                  <th className="">Description</th>
                  <th className=" ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  return (
                    <tr className="fw-semibold text-muted " key={product._id}>
                      <td className={` fs-5 p-0 border`}>{index + 1}</td>
                      <td className={` fs-5    border`}>
                        <img
                          className={`${style.img}`}
                          src={product.src}
                          alt=""
                        />
                      </td>
                      <td className={` fs-5 p-0 border`}>{product.name}</td>
                      <td className={` fs-5 p-0 border`}>
                        {product.price} EGP/KG
                      </td>
                      <td className={` fs-5 p-0  border`}>
                        {product.quantity}
                      </td>
                      <td className={` fs-6 w-25 border`}>{product.desc}</td>
                      <td className={` fs-1  border p-0 w-25  `}>
                        <button
                          className="btn btn-secondary mx-1 fs-5"
                          onClick={() => {
                            navigate(
                              `/admin/detailsProduct/${type}/${product._id}`
                            );
                          }}
                        >
                          <i className="fa-solid fa-circle-info"></i>
                        </button>
                        <button
                          className="btn btn-warning mx-1 fs-5"
                          onClick={() => {
                            navigate(
                              `/admin/addToTable/${type}/${product._id}`
                            );
                          }}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          className="btn btn-danger mx-1 fs-5"
                          onClick={() => {
                            deleteProduct(product._id);
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
