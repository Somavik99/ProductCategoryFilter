import { IoOptionsOutline } from "react-icons/io5";
import "./FilterRange.css";
import useFilterRange from "./useFilterRange";

const FilterRange = ({ ProductsState }) => {
  const { IsRange, AmountRange, FilterProductAmountChange, ShowRangeBar } =
    useFilterRange({ ProductsState });

  return (
    <>
      <div className="FilterRange__container">
        <IoOptionsOutline
          size={30}
          style={{ margin: " 10px" }}
          onClick={ShowRangeBar}
        />
      </div>
      {IsRange ? (
        <div className="Range__Bar">
          <input
            type="range"
            name="RangeFIlter"
            value={AmountRange}
            onChange={() => FilterProductAmountChange()}
          />
        </div>
      ) : null}
    </>
  );
};

export default FilterRange;
