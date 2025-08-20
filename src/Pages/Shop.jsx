import React, { useEffect, useState } from "react";
import BreadCrumb from "../Component/BreadCrumb";
import Container from "../Component/Container";
import Flex from "../Component/Flex";
import List from "../Component/List";
import ListItems from "../Component/ListItems";
import Card from "../Component/Card";
import axios from "axios";
import Pagination from "../Component/Pagination";

const Shop = (items) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getAllProducts() {
    let data = await axios.get("https://dummyjson.com/products");
    setProducts(data.data.products);
    setLoading(false);
  }

  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then((data) => setProducts(data.products));
    getAllProducts();
  }, []);

  return (
    <>
      <Container className="pt-20">
        <BreadCrumb />
        <Flex className="mt-[50px]">
          <div className="w-[25%]">
            <h2 className="text-xl font-bold">Shop by Category</h2>
            <List className="w-[217px] mt-[15px] grid gap-4 font-poppins">
              <ListItems>Woman’s Fashion</ListItems>
              <ListItems>Men’s Fashion</ListItems>
              <ListItems>Electronics</ListItems>
              <ListItems>Home & Lifestyle</ListItems>
              <ListItems>Medicine</ListItems>
              <ListItems>Sports & Outdoor</ListItems>
              <ListItems>Baby’s & Toys</ListItems>
              <ListItems>Groceries & </ListItems>
              <ListItems>Health & Beauty</ListItems>
            </List>
          </div>
          <div className="w-[75%]">
            <div id="selector" className="flex justify-end mb-7.5">
              <form className="flex item-center gap-4">
                <label>
                  Show: 
                </label>
                <select
                  id=""
                  className="px-10"
                >
                  <option selected>6</option>
                  <option value="US">12</option>
                  <option value="CA">16</option>
                </select>
              </form>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-10">
              {loading ? (
              <div className="flex flex-wrap gap-15">
                <div
                  role="status"
                  className="max-w-sm p-4 rounded-sm animate-pulse md:p-6"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  <span className="sr-only">Loading...</span>
                </div>
                <div
                  role="status"
                  className="max-w-sm p-4 rounded-sm animate-pulse md:p-6"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  <span className="sr-only">Loading...</span>
                </div>
                <div
                  role="status"
                  className="max-w-sm p-4 rounded-sm animate-pulse md:p-6"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  <span className="sr-only">Loading...</span>
                </div>
                <div
                  role="status"
                  className="max-w-sm p-4 rounded-sm animate-pulse md:p-6"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  <span className="sr-only">Loading...</span>
                </div>
                <div
                  role="status"
                  className="max-w-sm p-4 rounded-sm animate-pulse md:p-6"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  <span className="sr-only">Loading...</span>
                </div>
                <div
                  role="status"
                  className="max-w-sm p-4 rounded-sm animate-pulse md:p-6"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : 
            <Pagination itemsPerPage={4} products={products}/>
            // (

            // )
            }
            </div>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Shop;
