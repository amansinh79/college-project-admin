import React from "react";
import Dashboard from "./Pages/dashboard";
import Users from "./Pages/users";
import Products from "./Pages/products";
import Orders from "./Pages/orders";
import { Router } from "@reach/router";
import { Location } from "@reach/router";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./Pages/login";
import Logout from "./Pages/logout";
import Layout from "./components/Layout";
import EditProduct from "./Pages/editproduct";
const queryClient = new QueryClient();

export default function App() {
  return (
    <Location>
      <QueryClientProvider client={queryClient}>
        <div className="w-full">
          <Router>
            <Layout path="/">
              <Dashboard path="/" />
              <Users path="users" />
              <Products path="products" />
              <Orders path="orders" />
              <EditProduct path="editproduct/:id" />
            </Layout>
            <Logout path="logout" />
            <Login path="login" />
          </Router>
        </div>
      </QueryClientProvider>
    </Location>
  );
}
