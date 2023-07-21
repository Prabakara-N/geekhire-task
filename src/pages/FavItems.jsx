import React from "react";
import { useSelector } from "react-redux";

const FavItems = () => {
  const { favItems } = useSelector((state) => state.products);

  return (
    <div className="px-16 py-6">
      {favItems.length < 1 ? (
        <>
          <h1 className="text-center text-2xl">No Items :( </h1>
        </>
      ) : (
        <div className="flex items-center gap-6 justify-center flex-wrap">
          {favItems.map((product) => {
            const { id, name, img, price } = product;

            return (
              <div
                key={id}
                className="w-[320px] rounded-md overflow-hidden shadow-md"
              >
                <div className="w-full h-[280px]">
                  <img src={img} alt="favitems" />
                </div>
                <div className="flex justify-between items-center px-4 py-2">
                  <h3 className="font-medium text-lg">{name}</h3>
                  <p className="text-gray-500">${price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavItems;
