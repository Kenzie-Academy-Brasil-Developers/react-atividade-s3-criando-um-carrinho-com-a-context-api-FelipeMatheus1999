import Button from "../button";
import { useContext } from "react";
import { CatalogueContext } from "../../Providers/catalogue";
import { CartContext } from "../../Providers/cart";
import { Container, List } from "./styles";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <List>
        {type === "catalogue" ? <h1 className="title">Catalogue</h1> : <h1>Cart</h1>}
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index}>
              {item.name} <Button type={type} item={item}></Button>
            </li>
          ))}

        {type === "cart" &&
          cart.map((item, index) => (
            <li key={index}>
              {item.name} <Button type={type} item={item}></Button>
            </li>
          ))}
      </List>
    </Container>
  );
};

export default ProductList;
