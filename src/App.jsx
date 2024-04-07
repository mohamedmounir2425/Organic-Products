import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/ContentHome/Background";
import Filter from "./Components/Filter/Filter";
import Diseases from "./Components/Diseases/Diseases";
import Footer from "./Components/Footer/Footer";
import Boxes from "./Components/boxes/Boxes";
import DeliverySec from "./Components/DeliverySec/DeliverySec";
import AllProducts from "./Components/allProducts/AllProducts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
import Home from "./Components/Home/Home";

import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Contact from "./Components/Contact/Contact";
import Disease from "./Components/Disease/Disease";
import Cart from "./Components/Cart/Cart";
import Heart from "./Components/DiseaseItem/Heart";
import Diabetes from "./Components/DiseaseItem/Diabetes";
import Liver from "./Components/DiseaseItem/Liver";
import Pressure from "./Components/DiseaseItem/Pressure";
import Kidney from "./Components/DiseaseItem/Kidney";
import AdminLayout from "./Layout/AdminLayout";
import Admin from "./Admin/Admin";
import Protectedroute from "./Protectedroute/Protectedroute";
import Notfound from "./Notfound/Notfound";
import SmallBox from "./Components/SmallBox/SmallBox";
import MediumBox from "./Components/MediumBox/MediumBox";
import LargeBox from "./Components/LargeBox/LargeBox";
import ScrollToTop from "react-scroll-to-top";
import MainTable from "./Admin/tableOfProducts/MainTable";
import AddToTable from "./Admin/tableOfProducts/AddToTable";
import DetailsProduct from "./Admin/Details/DetailsProduct";
import Products from "./Components/Products/Products";
import Meals from "./Components/Products/Meals/Meals";
import CheckOutForm from "./Components/CheckOut/CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Mhj4ZF6RLw7s1j1bKtC5YTPB5fkfLRpONNbKliEN5BzBH4q442DQ9IyWgRAjPOt2t5QxIncyHSguWinqlsV7JLs00jXTIhqNi"
);

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "about", element: <About /> },
        { path: "products", element: <AllProducts /> },
        { path: "products/:type", element: <Products /> },

        // {path:'vegetables',element:<Vegetables/>},
        // {path:'fruits',element:<Fruits/>},
        // {path:'herbals',element:<Herbals/>},
        // {path:'meat',element:<Meat/>},
        // {path:'milk',element:<Milk/>},
        { path: "meals", element: <Meals /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "contact", element: <Contact /> },
        { path: "disease", element: <Disease /> },
        { path: "heart", element: <Heart /> },
        { path: "diabetes", element: <Diabetes /> },
        { path: "liver", element: <Liver /> },
        { path: "pressure", element: <Pressure /> },
        { path: "kidney", element: <Kidney /> },
        { path: "checkout", element: <CheckOutForm /> },

        { path: "smallbox", element: <SmallBox /> },
        { path: "mediumbox", element: <MediumBox /> },
        { path: "largebox", element: <LargeBox /> },

        { path: "*", element: <Notfound /> },
      ],
    },
    {
      path: "/",
      element: (
        <Protectedroute>
          {" "}
          <AdminLayout />
        </Protectedroute>
      ),
      children: [
        {
          path: "admin",
          element: (
            <Protectedroute>
              {" "}
              <Admin />
            </Protectedroute>
          ),
          children: [
            {
              path: "mainTable/:type",
              element: (
                <Protectedroute>
                  {" "}
                  <MainTable />{" "}
                </Protectedroute>
              ),
            },
            {
              path: "addToTable/:type",
              element: (
                <Protectedroute>
                  {" "}
                  <AddToTable />{" "}
                </Protectedroute>
              ),
            },
            {
              path: "addToTable/:type/:id",
              element: (
                <Protectedroute>
                  {" "}
                  <AddToTable />{" "}
                </Protectedroute>
              ),
            },
            {
              path: "detailsProduct/:type/:id",
              element: (
                <Protectedroute>
                  {" "}
                  <DetailsProduct />{" "}
                </Protectedroute>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <Elements stripe={stripePromise}>
        <RouterProvider router={routes} />
      </Elements>
      <ScrollToTop smooth style={{ backgroundColor: "#78A206" }} color="#fff" />
    </>
  );
}

export default App;
