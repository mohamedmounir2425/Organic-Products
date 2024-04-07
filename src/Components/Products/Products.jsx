import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import style from "./products.module.css";
import IsLoading from "../isLoading/IsLoading";
import { getProducts } from "../../Store/slices/puplicApi";
import ProductItem from "../ProductItem/ProductItem";
import { useParams } from "react-router-dom";

export default function Products() {
  const { products, isLoading, isAdding } = useSelector(
    (state) => state.productsSlice
  );

  const [pageNumber, setPageNumber] = useState(0);
  let { type } = useParams();

  const productPerPage = 12;
  const pagesVisted = pageNumber * productPerPage;

  const displayProducts =
    products.length == 0 ? (
      <IsLoading />
    ) : (
      products
        .slice(pagesVisted, pagesVisted + productPerPage)
        .map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })
    );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(type));
  }, []);

  useEffect(() => {
    dispatch(getProducts(type));
  }, [type]);

  const pageCount = Math.ceil(products.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <section className={`${style.secBg} `}>
        <div className={` position-relative  `}>
          <div
            className={`${style.cover} w-100 poition-absolute top-0 end-0 start-0`}
          ></div>
          <div className={`${style.caption}   position-absolute p-3`}>
            <h1 className="fw-Semibold text-center  text-capitalize">{type}</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row my-5 g-3">
            <div className="col-md-6 d-flex align-items-center">
              <div className={`${style.item} w-75  text-start`}>
                <div className={`${style.brdr} w-25 mt-4`}></div>
                <h2 className={`${style.h2} text-muted fw-bold`}>
                  Eating{" "}
                  <span className={`${style.fruits} text-capitalize`}>
                    {type}
                  </span>{" "}
                  <br /> provides <br />
                  health benefits{" "}
                </h2>
                <h5 className={`${style.h5} mt-4`}>
                  People who eat <span>{type}</span> as part of an overall
                  healthy diet are likely to have a reduced risk of some
                  diseases.
                </h5>

                <div className={`${style.brdr} w-100 mt-4`}></div>
              </div>
            </div>
            {!isLoading && displayProducts}

            <div className="mt-5 d-flex justify-content-center">
              <ReactPaginate
                previousLabel={`Previous`}
                nextLabel={`Next`}
                breakLabel={`...`}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={`${style.paginationBttns} `}
                previousLinkClassName={`${style.previousBttn}`}
                nextLinkClassName={`${style.nextBttn}`}
                disabledClassName={`${style.paginationDisabled}`}
                activeClassName={`${style.paginationActive} text-white`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
