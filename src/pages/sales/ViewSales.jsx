import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sales } from "../../component/dummy";
import { FaArrowLeftLong } from "react-icons/fa6";

const ViewSales = () => {
  const { id } = useParams();
  const sale = sales.find((user) => user.id === parseInt(id));

  if (!sale) {
    return <div>sale not found</div>;
  }

  return (
    <section className='w-full h-full'>
      <div className='w-full h-full sm:p-2 lg:p-10'>
        <Link to={"/sales"} className='my-5'><FaArrowLeftLong className='text-primary-200 font-bold' size={25}/></Link>
        <p className='text-3xl capitalize font-bold'>{sale.name}</p>
        
        <div key={sale.id} className='w-full grid lg:grid-cols-3 sm:grid-cols-2 mt-20'>
            <img src={sale.img} alt={sale.name} className='w-20 h-20 rounded-full'/>
            
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>name</h4>
              <p className='text-lg capitalize font-bold'>{sale.name}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>category</h4>
              <p className='text-lg capitalize font-bold'>{sale.category}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>unit price</h4>
              <p className='text-lg capitalize font-bold'>{sale.unit_price}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>quantity sold</h4>
              <p className='text-lg capitalize font-bold'>{sale.quantity_sold}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>amount</h4>
              <p className='text-lg capitalize font-bold'>{sale.amount}</p>
            </div>
            
        </div>
      </div>
    </section>
  );
}

export default ViewSales;
