import { useState } from "react";

const useFilterRange = ({ ProductsState }) => {
  const [IsRange, setIsRange] = useState(false);
  const [AmountRange, setAmountRange] = useState(0);

  const FilterProductAmountChange = async (ProductPriceAmount) => {
    const FilteredProductPrice = ProductsState.filter((ProductPrice) => {
      return ProductPrice.price === ProductPriceAmount;
    });
    setAmountRange(FilteredProductPrice);
  };

  const ShowRangeBar = () => {
    setIsRange(() => !IsRange);
  };

  return { ShowRangeBar, AmountRange, IsRange, FilterProductAmountChange };
};

export default useFilterRange;
