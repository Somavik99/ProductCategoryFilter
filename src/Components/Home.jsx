import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
// import SIdeBar from "./SideBar/SIdeBar";
import "./Home.css";
import CategoryFilter from "./CatagoryFilter/CatagoryFilter";
import FilterRange from "./FilterRange/FilterRange";

const Home = () => {
  const [ProductsState, setProductsState] = useState([]);

  const FetchPProductsData = async () => {
    try {
      const ProductsResponse = await axios.get(
        `https://fakestoreapi.com/products`
      );
      setProductsState(ProductsResponse.data);
      console.log(ProductsResponse.data);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    FetchPProductsData();
  }, []);

  if (!Array.isArray(ProductsState)) return null;

  return (
    <div style={{ position: "relative" }}>
      {/* <div style={{ position: "absolute" }}>
        <SIdeBar />
      </div> */}
      <div style={{ margin: "20px", width: "100%" }}>
        <Search Products={ProductsState} />
      </div>
      <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
        <CategoryFilter ProductsCategoryState={ProductsState} />
       <span style={{marginRight:"5%",border:"1px solid gray",height:"5vh",width:"5vh",textAlign:"center",borderRadius:"8px"}}><FilterRange /></span> 
      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "-50px",
        }}
      >
        {ProductsState.map((Product, index) => {
          return (
            <div
              key={index}
              className="ProductCard"
              style={{
                marginLeft: "8%",
                border: "none",
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "7%",
                borderRadius: "20px",
                boxShadow: "2px 2px 2px 2px rgba(0.5,0.5,0.5,0.2)",
              }}
            >
              <span>{Product.title}</span>
              <img
                src={Product.image}
                alt="ProductImage"
                style={{ height: "10vw", width: "10vw" }}
              />

              <div style={{ height: "3vh", width: "0.5vw" }}>
                ${Product.price}
              </div>
              <span
                style={{
                  width: "10vw",
                  height: "30px",
                  border: "1px solid black",
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                  borderTopLeftRadius: "5px ",
                  borderTopRightRadius: "5px ",
                  marginBottom: "4px",
                }}
              >
                {Product.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
