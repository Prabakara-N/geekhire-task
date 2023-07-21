import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/features/productSlice";

const Category = () => {
  const dispatch = useDispatch();

  const productCategory = ["All", "electronics", "clothing", "books"];

  return (
    <div className="mt-5">
      <ul className="flex items-center justify-center gap-5">
        {productCategory.map((catergory, index) => (
          <li
            key={index}
            className="bg-slate-300 px-3 capitalize cursor-pointer py-1 rounded-md"
            onClick={() => dispatch(setCategory(catergory))}
          >
            {catergory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
