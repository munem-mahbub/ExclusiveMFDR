import React, { useEffect, useState } from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import List from '../Component/List'
import ListItems from '../Component/ListItems'
import Card from '../Component/Card'
import axios from 'axios'
import Skeleton from '../Component/Skeleton'
import Pagination from '../Component/Pagination'
import Image from '../Component/Image'
import OvalBlack from '../assets/OvalBlack.png'
import OvalRed from '../assets/OvalRed.png'
import OvalGreen from '../assets/OvalGreen.png'




const Shop = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [optionShow, setOptionShow] = useState(6)


  async function getAllProducts() {
    let data = await axios.get('https://dummyjson.com/products')
    setProducts(data.data.products)
    setLoading(false)
  }

  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then((data) => setProducts(data.products));
    getAllProducts()
  }, []);



  return (
    <>
      <Container className='pt-20'>
        <BreadCrumb />
        <Flex className='mt-[50px]'>
          <div className='w-[25%]'>
            <div>
              <h2 className='text-xl font-bold'>Shop by Category</h2>
              <List className='w-[217px] mt-[15px] grid gap-4 font-poppins'>
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
            <div className='mt-10'>
              <h2 className='text-xl font-bold'>Shop by Color</h2>
              <List className='mt-[15px] grid gap-4.5 font-poppins text-[#767676]'>
                <Flex className='items-center gap-2.5'>
                <Image src={OvalBlack} className='w-[11px] h-[11px]'/>
                <ListItems>Color 1</ListItems>
                </Flex>
                <Flex className='items-center gap-2.5'>
                  <Image src={OvalRed} className='w-[11px] h-[11px]'/>
                <ListItems>Color 2</ListItems>
                </Flex>
                <Flex className='items-center gap-2.5'>
                  <Image src={OvalGreen} className='w-[11px] h-[11px]'/>
                <ListItems>Color 3</ListItems>
                </Flex>
              </List>
            </div>
          </div>
          <div className='lg:w-[75%] w-full'>
            <div className='flex justify-end items-center gap-2 lg:mb-3.5 mb-[-15px]'>
              <h5>Show</h5>
              <select onChange={(e) => setOptionShow(Number(e.target.value))} id="#" className="py-1 px-2  border-2 border-solid">
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className='flex flex-wrap justify-between gap-5'>
              {
                loading ?
                  Array.from({ length: optionShow }).map((_, index) => <Skeleton key={index} />)
                  :
                  (<Pagination itemsPerPage={optionShow} products={products} />)
              }
            </div>
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default Shop