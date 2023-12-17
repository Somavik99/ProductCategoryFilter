import useFilterHook from "./useFilterHook";4
import "./CategoryFilter.css"

const CategoryFilter = ({ ProductsCategoryState }) => {
  const {
    HandleCategoryFilterClick,
    CategoryProductItems,
    FilteredProducts,
    IsClicked,
  } = useFilterHook({
    Products: ProductsCategoryState,
  });

  return (
    <>
      <div style={{ marginLeft: "5%" }}>
        {CategoryProductItems.map((val, index) => {
          return (
            <button
              key={`productCategoryValues-${index}`}
              onClick={() => HandleCategoryFilterClick(val)}
              style={{
                border: "none",
                outline: "none",
                color: "white",
                margin: "5px 5px",
                width: "10vw",
                height: "5vh",
                borderRadius: "8px 2px",
              }}
              className="Btn__ProductCategoryValues"
            >
              {val}
            </button>
          );
        })}
      </div>

      {IsClicked && (
        <div>
          {FilteredProducts.map((Item, ind) => {
            return (
              <div key={ind}>
                <div>
                  <img src={Item.image} alt="Category Image" style={{mixBlendMode:"multiply",filter:"contrast(1)"}}/>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CategoryFilter;
