import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// Admin Page
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPages from "./pages/admin/AdminChatsPages";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
import ProtectedRouteComponents from "./components/ProtectedRouteComponents";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserCartDetailesPage from "./pages/user/UserCartDetailesPage";
import RoutesWithUserChatComponent from "./components/RoutesWithUserChatComponent";
import CartItemComponent from "./components/CartItemComponent";
import OrderDetailsPage from "./pages/user/OrderDetailsPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AdminChatRoomComponent from "./components/admin/AdminChatRoomComponent";
//Header and Footer

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route element={<RoutesWithUserChatComponent/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element="Page not exists 404" />
        </Route>
        {/* <Route path="/" component={HomePage} />  in previous versions of react-router-dom */}
        {/* Users */}
        <Route element={<ProtectedRouteComponents admin={false} />}>
          <Route path="/user/profile" element={<UserProfilePage/>} />
          <Route path="/user/order" element={<UserOrderPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailesPage />} />
          <Route path="/user/order-details" element={<OrderDetailsPage/>} />
          <Route path="/user/cart-item" element={<CartItemComponent/>} />
          <Route path="/user/cart" element={<CartPage/>} />
        </Route>

        {/* Admin */}
        <Route element={<ProtectedRouteComponents admin={true} />}>
          <Route path="/admin/users" element={<AdminUserPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductPage/>} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage/>}
          />
          <Route path="/admin/orders" element={<AdminOrderPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPages/>} />
          <Route path="/admin/chatsroom" element={<AdminChatRoomComponent/>} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage/>} />
        </Route>

      </Routes>
    <FooterComponent/>
    </BrowserRouter>

    </div>
  );
}

export default App;
