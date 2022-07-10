// images
import electronics from "../assets/electronics.jpg";
import jewelry from "../assets/jewelry.png"
import mensclothing from "../assets/mensclothing.png"
import womensclothing from "../assets/womensclothing.png"
//preloader
import Preloader from "./Preloader";
// styled components
import { CategoryContainer, FlexWrapper, MainWrapper } from "./styledHome";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchProducts } from "../features/productSlice";
import ItemCard from "./item/ItemCard";


const Home: React.FC = () => {
  const {loading, products, error} = useAppSelector((state) => state.products);
  const {cart} = useAppSelector(state => state.cart)
  if(loading) return <Preloader />
  if(error) return <h2>{error}</h2>
  
  return (
    <MainWrapper>
       <h1 style={{margin: "0", textAlign: "center", paddingTop:"20px"}}>Pick your category</h1>
      <CategoryContainer>
        <FlexWrapper>
          <div>
            <h2>Men's clothing</h2>
            <img src={mensclothing} />
            <Link to="/mens">Shop now</Link>
          </div>
          <div>
            <h2>Women's clothing</h2>
            <img src={womensclothing} />
            <Link to="/womens">Shop now</Link>
          </div>
        </FlexWrapper>
        <FlexWrapper>
          <div>
            <h2>Jewelry</h2>
            <img src={jewelry} />
            <Link to="/jewelry">Shop now</Link>
          </div>
          <div>
            <h2>Electronics</h2>
            <img src={electronics} />
            <Link to="/electronics">Shop now</Link>
          </div>
        </FlexWrapper>
      </CategoryContainer>
      <h1 style={{textAlign: "center"}}>All products</h1>
      <ItemCard items={products}/>
    </MainWrapper>
  );
};

export default Home;
