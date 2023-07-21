import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { setFavItems } from "../redux/features/productSlice";

const AllProducts = () => {
  // const [isChecked, setIsChecked] = useState(false);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleFavItems = (id) => {
    dispatch(setFavItems(id));
  };

  return (
    <div className="grid grid-cols-3 pb-4 grid-rows-3 gap-8 items-center justify-center mt-8">
      {products.map((product) => {
        const { id, name, img, price, isChecked } = product;

        return (
          <div
            key={id}
            className="w-[320px] rounded-md overflow-hidden shadow-md"
          >
            <div className="w-full h-[280px]">
              <img src={img} alt="products" />
            </div>
            <div className="flex justify-between px-4 py-2">
              <div>
                <h3 className="font-medium text-lg">{name}</h3>
                <p className="text-gray-500">${price}</p>
              </div>
              <div>
                <AiFillHeart
                  onClick={() => handleFavItems(id)}
                  className={`${
                    isChecked ? "text-red-600" : "text-gray-400"
                  } text-xl cursor-pointer`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
