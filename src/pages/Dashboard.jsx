import React from "react";
import { GiExpense } from "react-icons/gi";
import { TbCurrencyNaira, TbPackages } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import { PiUsersThree } from "react-icons/pi";
import LineChart from "../component/LineChart";
import { expenses } from "../component/dummy";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const expense = expenses.slice(0, 5);

  return (
    <section className='w-full h-full'>
      <h3 className="font-bold capitalize text-2xl lg:text-3xl">Dashboard</h3>
      <div className='mt-10 w-full flex lg:flex-row sm:flex-col items-center gap-x-10 gap-y-5'>
        <div className='lg:w-[25%] sm:w-full bg-red-500 h-28'>
          <div className='w-full text-white p-5'>
            <h2 className='capitalize font-bold text-xl'>Total Expenses</h2>
            <div className='w-full flex flex-row items-center justify-between my-5 font-bold text-lg'>
              <GiExpense />
              <h4 className="flex items-center">
                <TbCurrencyNaira size={20} />
                <span>2,000,050</span>
              </h4>
            </div>
          </div>
        </div>
        <div className='lg:w-[25%] sm:w-full bg-green-500 h-28'>
          <div className='w-full text-white p-5'>
            <h2 className='capitalize font-bold text-xl'>Total Sales</h2>
            <div className='w-full flex flex-row items-center justify-between my-5 font-bold text-lg'>
              <FcSalesPerformance />
              <h4 className="flex items-center">
                <TbCurrencyNaira size={20} />
                <span>2,000,050</span>
              </h4>
            </div>
          </div>
        </div>
        <div className='lg:w-[25%] sm:w-full bg-blue-500 h-28'>
          <div className='w-full text-white p-5'>
            <h2 className='capitalize font-bold text-xl'>Total Customers</h2>
            <div className='w-full flex flex-row items-center justify-between my-5 font-bold text-lg'>
              <PiUsersThree />
              <span>1,000</span>
            </div>
          </div>
        </div>
        <div className='lg:w-[25%] sm:w-full bg-yellow-500 h-28'>
          <div className='w-full text-white p-5'>
            <h2 className='capitalize font-bold text-xl'>Products Value</h2>
            <div className='w-full flex flex-row items-center justify-between my-5 font-bold text-lg'>
              <TbPackages />
              <h4 className="flex items-center">
                <TbCurrencyNaira size={20} />
                <span>20,000,050</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex gap-5 mt-10">
        <div className="lg:w-[70%] sm:w-full">
          <LineChart />
        </div>
        <div className="lg:w-[30%] sm:w-full">
          <table className="w-full border-collapse">
            <thead className="capitalize text-md border-y-2 border-neutral-1 text-left">
              <tr>
                <th className="py-1 px-2">Name</th>
                <th className="py-1 px-2">Type</th>
                <th className="py-1 px-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {expense.map((item, id) => (
                <tr key={id} className="border-y-2 border-neutral-1">
                  <td className="p-2 font-medium capitalize">{item.name}</td>
                  <td className="p-2 font-medium">{item.type}</td>
                  <td className="p-2 font-medium">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/expenses" className="text-primary-200 font-semibold text-center mt-5 block">View</Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
