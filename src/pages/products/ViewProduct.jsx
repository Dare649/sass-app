import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from "../../component/dummy";
import { FaArrowLeftLong } from "react-icons/fa6";

const ViewProduct = () => {
  const { id } = useParams();
  const product = products.find((user) => user.id === parseInt(id));

  if (!product) {
    return <div>product not found</div>;
  }

  return (
    <section className='w-full h-full'>
      <div className='w-full h-full sm:p-2 lg:p-10'>
        <Link to={"/products"} className='my-5'><FaArrowLeftLong className='text-primary-200 font-bold' size={25}/></Link>
        <div className='w-full flex items-center justify-between'>
          <p className='text-3xl capitalize font-bold'>{product.name}</p>
          <div className='flex gap-x-5'>
            <button className='bg-transparent hover:bg-primary-200 text-primary-200 hover:text-white border-2 border-primary-200 lg:w-40 sm:w-20 h-12 text-center font-bold capitalize'>
              edit product
            </button>
            <button className='bg-red-500 hover:bg-transparent text-white hover:text-red-500 hover:border-2 hover:border-red-500 lg:w-40 sm:w-20 h-12 text-center font-bold capitalize'>
              delete product
            </button>
          </div>
        </div>
        <div key={product.id} className='w-full grid lg:grid-cols-3 sm:grid-cols-2 mt-20'>
            <img src={product.img} alt={product.name} className='w-20 h-20 rounded-full'/>
            
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>name</h4>
              <p className='text-lg capitalize font-bold'>{product.name}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>category</h4>
              <p className='text-lg capitalize font-bold'>{product.category}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>unit price</h4>
              <p className='text-lg capitalize font-bold'>{product.unit_price}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>available quantity</h4>
              <p className='text-lg capitalize font-bold'>{product.quantity}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>serial number</h4>
              <p className='text-lg capitalize font-bold'>{product.serial_number}</p>
            </div>
            
        </div>
      </div>
    </section>
  );
}

export default ViewProduct;
