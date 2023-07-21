import React from "react";
import { prices } from "../data";
import { useDispatch } from "react-redux";
import { setFilterByPrize } from "../redux/features/productSlice";

const PriceFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-right">
      <select
        onChange={(e) => dispatch(setFilterByPrize(e.target.value))}
        className="bg-slate-100 px-2 py-1 rounded-md cursor-pointer"
      >
        <option value="">Filter by Prize</option>
        {prices.map((prize) => (
          <option key={prize.id} value={prize.type}>
            {prize.value}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
