import React, { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import AllProducts from "../components/AllProducts";
import Category from "../components/Category";
import PriceFilter from "../components/PriceFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setLoading,
  setSearchByName,
} from "../redux/features/productSlice";
import Loader from "../components/Loader";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const { products, loading } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(setCategory("All")); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-16 py-6">
      <form
        onSubmit={handleSearch}
        className="text-center relative mx-auto w-[400px]"
      >
        <input
          className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight border-[1px] border-gray-300"
          type="text"
          placeholder="Search Items"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            dispatch(setLoading(true));
            setTimeout(() => {
              dispatch(setLoading(false));
              dispatch(setSearchByName(e.target.value));
            }, 1300);
          }}
        />
        <CgSearch className="absolute top-3 right-4 text-xl" />
      </form>
      <Category />
      <PriceFilter />
      {loading ? (
        <Loader />
      ) : (
        <>
          {products.length < 1 ? (
            <h2 className="text-center text-2xl text-gray-500">
              No Products Found
            </h2>
          ) : (
            <AllProducts />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
