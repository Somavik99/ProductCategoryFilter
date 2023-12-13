import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ Products }) => {
  const [SearchText, setSearchText] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const TimeOutRef = useRef(null);

  const HandleSearchChange = (e) => {
    let SearchInputChange = e.target.value.toString();
    setIsLoading(false);

    TimeOutRef.current = setTimeout(() => {
      setIsLoading(true);
      setSearchText(SearchInputChange.trim());
    }, 500);
  };

  const SearchInputText = Products.filter((Inp) => {
    return Inp.title.toLowerCase().includes(SearchText.toLowerCase());
  });

  const ViewSingleClickedProduct = (id) => {
    Products.filter((inp) => {
      if (inp.id === id) {
        return ;
      }
    });
  };

  useEffect(() => {
    return () => {
      if (TimeOutRef.current) {
        clearTimeout(TimeOutRef.current);
      }
    };
  }, []);

  if (!Array.isArray(SearchInputText)) return null;

  const searchLength = SearchText.length > 0;

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "50px",
          width: "50vw",
          margin: " auto ",
        }}
      >
        <div
          style={{
            position: "static",
            display: "flex",
            justifyContent: "center",
            flex: "row",
            width: "50vw",
            zIndex: "2",
            top: "20px",
            marginTop: "5px",
          }}
        >
          <input
            type="text"
            style={{
              width: "40vw",
              height: "2vh",
              border: "2px solid gray",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              padding: "10px",
              fontSize: "20px",
              top: "20px",
              outline: "none",
            }}
            onChange={HandleSearchChange}
          />
          <div
            style={{
              position: "static",
              right: "110px",
              width: "4vh",
              height: "auto",
              borderLeft: "1px solid gray",
              background: "black",
              overflow: "none",
              marginLeft: "1px",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <IoSearchOutline
              className="Icon"
              style={{
                marginTop: "8px",
                marginLeft: "5px",
                fontSize: "25px",
                cursor: "pointer",
                fontWeight: "bolder",
                color: "whitesmoke",
              }}
            />
          </div>
        </div>
      </div>
      {searchLength ? (
        <div
          style={{
            // border: "1px solid black",
            position: "absolute",
            boxShadow: "2px 2px 2px gray",
            borderRadius: "8px",
            margin: " auto",
            left: "0",
            right: "0",
            width: "50vw",
            padding: "18px",
            background: "rgba(0.5,0.5,0.5,0.5)",
            backdropFilter: "blur(8px)",
            zIndex: "10",
            color: "white",
          }}
        >
          {!searchLength && IsLoading ? (
            <div>Loading...</div>
          ) : (
            SearchInputText.map((input) => {
              return (
                <div key={input.id} style={{}}>
                  <IoSearchOutline
                    className="Icon"
                    style={{
                      marginTop: "10px",
                      marginLeft: "5px",
                      fontSize: "25px",
                      cursor: "pointer",
                      fontWeight: "bolder",
                      color: "whitesmoke",
                    }}
                  />
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={ViewSingleClickedProduct}
                  >
                    {input.title}
                  </span>
                </div>
              );
            })
          )}
        </div>
      ) : null}
    </>
  );
};

export default Search;
