import React from "react";
import { prices } from "../data";
import { useDispatch } from "react-redux";
import { setFilterByPrize, setLoading } from "../redux/features/productSlice";

const PriceFilter = () => {
  const dispatch = useDispatch();

  const handlePriceFilter = (e) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setFilterByPrize(e.target.value));
      dispatch(setLoading(false));
    }, 1000);
  };

  return (
    <div className="text-right">
      <select
        onChange={handlePriceFilter}
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
