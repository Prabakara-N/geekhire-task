import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    favItems: [],
    category: "All",
    loading: false,
  },
  reducers: {
    setFavItems: (state, action) => {
      const updatedProducts = state.products.map((item) =>
        item.id === action.payload
          ? { ...item, isChecked: !item.isChecked }
          : item
      );
      state.products = updatedProducts;

      const newFavItems = updatedProducts.filter((item) => item.isChecked);
      state.favItems = newFavItems;
    },

    setCategory: (state, action) => {
      const selectedCategory = action.payload;

      const filteredProducts =
        selectedCategory === "All"
          ? products
          : products.filter((item) => item.category === selectedCategory);

      state.category = selectedCategory;
      state.products = filteredProducts;
    },

    setFilterByPrize: (state, action) => {
      const price = action.payload;

      if (price === "verylow") {
        const veryLowPrizeProduct = products.filter((item) => item.price < 50);
        state.products = veryLowPrizeProduct;
      } else if (price === "low") {
        const lowPrizeProduct = products.filter(
          (item) => item.price > 50 && item.price < 100
        );
        state.products = lowPrizeProduct;
      } else if (price === "high") {
        const highPrizeProduct = products.filter(
          (item) => item.price > 100 && item.price < 150
        );
        state.products = highPrizeProduct;
      } else if (price === "veryhigh") {
        const veryHighPrizeProduct = products.filter(
          (item) => item.price > 150 && item.price < 200
        );
        state.products = veryHighPrizeProduct;
      }
    },

    setSearchByName: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
      state.products = filteredProducts;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default productSlice.reducer;
export const {
  setFavItems,
  setCategory,
  setFilterByPrize,
  setSearchByName,
  setLoading,
} = productSlice.actions;
