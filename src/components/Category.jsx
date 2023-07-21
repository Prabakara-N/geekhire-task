import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory, setLoading } from "../redux/features/productSlice";

const Category = () => {
  const [selected, setSelected] = useState("All");
  const dispatch = useDispatch();

  const productCategory = ["All", "electronics", "clothing", "books"];

  return (
    <div className="mt-5">
      <ul className="flex items-center justify-center gap-5">
        {productCategory.map((catergory, index) => (
          <li
            key={index}
            className={`${
              selected === catergory
                ? "bg-slate-800 text-white"
                : "bg-slate-300"
            } px-3 capitalize cursor-pointer py-1 rounded-md`}
            onClick={() => {
              dispatch(setLoading(true));
              setSelected(catergory);
              setTimeout(() => {
                dispatch(setCategory(catergory));
                dispatch(setLoading(false));
              }, 1200);
            }}
          >
            {catergory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
