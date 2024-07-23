import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { userTable } from "../../component/dummy";
import { FaArrowLeftLong } from "react-icons/fa6";

const ViewCustomers = () => {
  const { id } = useParams();
  const customer = userTable.find((user) => user.id === parseInt(id));

  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <section className='w-full h-full'>
      <div className='w-full h-full sm:p-2 lg:p-10'>
        <Link to={"/customers"} className='my-5'><FaArrowLeftLong className='text-primary-200 font-bold' size={25}/></Link>
        <div className='w-full flex items-center justify-between'>
          <p className='text-3xl capitalize font-bold'>{customer.name}</p>
          <div className='flex gap-x-5'>
            <button className='bg-transparent hover:bg-primary-200 text-primary-200 hover:text-white border-2 border-primary-200 lg:w-40 sm:w-20 h-12 text-center font-bold capitalize'>
              edit customer
            </button>
            <button className='bg-red-500 hover:bg-transparent text-white hover:text-red-500 hover:border-2 hover:border-red-500 lg:w-40 sm:w-20 h-12 text-center font-bold capitalize'>
              delete customer
            </button>
          </div>
        </div>
        <div key={customer.id} className='w-full grid lg:grid-cols-3 sm:grid-cols-2 mt-20'>
            <img src={customer.img} alt={customer.name} className='w-20 h-20 rounded-full'/>
            
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>name</h4>
              <p className='text-lg capitalize font-bold'>{customer.name}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>email</h4>
              <p className='text-lg capitalize font-bold'>{customer.email}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>address</h4>
              <p className='text-lg capitalize font-bold'>{customer.address}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>date of birth</h4>
              <p className='text-lg capitalize font-bold'>{customer.login}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>phone number</h4>
              <p className='text-lg capitalize font-bold'>{customer.phone}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>city</h4>
              <p className='text-lg capitalize font-bold'>{customer.city}</p>
            </div>
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>state</h4>
              <p className='text-lg capitalize font-bold'>{customer.state}</p>
            </div>
            
            <div className='my-3'>
              <h4 className='uppercase text-sm font-semibold text-primary-200'>status</h4>
              <p className={`text-lg capitalize font-bold ${customer.status === "active" ? "text-green-400" : "text-red-400"}`}>
                {customer.status}
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default ViewCustomers;
