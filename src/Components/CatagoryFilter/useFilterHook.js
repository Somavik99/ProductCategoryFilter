import { useCallback, useEffect, useState } from "react";

const useFilterHook = ({ Products }) => {
  const [SelectedCategoryFilter, setSelectedCategoryFilter] = useState([]);

  const [FilteredProducts, setFilteredProducts] = useState([]);

  const [IsClicked, setIsClicked] = useState(false);

  ////////////////////////////////
  // Taking values of each category

  let CategoryProductItems = [
    "All",
    ...new Set(Products.map((Value) => Value.category)),
  ];

  // Filtering Values in an handle click

  const HandleCategoryFilterClick = (SelectCategory) => {
    if (SelectedCategoryFilter.includes(SelectCategory)) {
      let CategoryItems = SelectedCategoryFilter.filter(
        (Cat) => Cat === SelectCategory
      );

      setSelectedCategoryFilter(CategoryItems);
    } else {
      setSelectedCategoryFilter([SelectCategory]);
    }

    setIsClicked(true);
  };

  // Storing values in a single state and recursively updating the selected category\\\

  const FilterCategoryItems = useCallback(() => {
    if (SelectedCategoryFilter.length > 0) {
      let TotalCategoryItems = SelectedCategoryFilter.flatMap(
        (SpecificCategory) => {
          let Item = Products.filter(
            (val) => val.category === SpecificCategory
          );
          return Item;
        }
      );
      setFilteredProducts(TotalCategoryItems);
      // console.log(TotalCategoryItems);
    } else {
      setFilteredProducts([...Products]);
    }
  }, [SelectedCategoryFilter, Products]);

  useEffect(() => {
    FilterCategoryItems();
  }, [FilterCategoryItems, SelectedCategoryFilter]);

  return { HandleCategoryFilterClick, CategoryProductItems, FilteredProducts,IsClicked };
};

export default useFilterHook;
