import "./App.css";
import ProductList from "./components/product-list";
import { CatalogueProvider } from "./Providers/catalogue";
import { CartProvider } from "./Providers/cart";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ProductList type="catalogue"></ProductList>
          <ProductList type="cart"></ProductList>
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
