import React from "react";
import { addToCart } from "../../features/cartSlice";
import { Product } from "../../features/productSlice";
import { useAppDispatch } from "../../hooks";
import { StyledCard, StyledCardWrapper } from "./styledItemCard";

type Props = {
  items: Product[];
};

const ItemCard: React.FC<Props> = ({ items }) => {
  const dispatch = useAppDispatch()
  return (
  <StyledCardWrapper>
    {items.map((item) => (
        <StyledCard key={item.id}>
            <img src={item.image} alt={item.title}/>
            <h5>{item.title}</h5>
            <span>${item.price}</span>
            <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
            <button>View details</button>
        </StyledCard>
    ))}
  </StyledCardWrapper>
  );
};

export default ItemCard;
