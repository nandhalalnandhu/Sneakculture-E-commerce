import MainHome from "./MainHome";
import Navbar from "./componets/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishlist from "./componets/Wishlist/Wishlist";
import Kart from "./componets/Cart/Kart";
import Moredetails from "./componets/Moredetails/Moredetails";
import Context from "./componets/Context";
import ShopListing from "./componets/Shoplist/Shoplist";
import Shoplist from "./componets/Shoplist/Shoplist";
import Adderss from "./componets/Adderss/Adderss";



function App() {
  return (
    <Context>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainHome />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Kart />} />
          <Route path="/shop" element={<Shoplist/>} />
          <Route path="/checkout" element={<Adderss/>} />
          <Route path="/more/:id" element={<Moredetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Context>
  );
}

export default App;
