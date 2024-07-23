import { useState, useEffect } from "react";
import { CiSearch, CiExport } from "react-icons/ci";
import { FaPlus, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Modal from "../../component/Modal";
import { expenses } from "../../component/dummy"; // Ensure this path is correct
import CreateExpense from "./CreateExpense";

const Expenses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [viewDropdown, setViewDropdown] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Log expenses data to ensure it's being imported correctly
  useEffect(() => {
    console.log("Sales data:", expenses);
  }, []);

  const handleView = (index) => {
    setViewDropdown((prev) => (prev === index ? null : index));
  };

  const handleChangePage = (newPage) => {
    const totalPages = Math.ceil(filteredSales.length / itemsPerPage);
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  const filteredSales = expenses.filter(
    (sale) =>
      typeof sale.name === "string" &&
      sale.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSales.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSales.slice(indexOfFirstItem, indexOfLastItem);

  // Log current items to ensure they are being filtered and paginated correctly
  useEffect(() => {
    console.log("Current items:", currentItems);
  }, [currentItems]);

  return (
    <section className="w-full h-full">
      <h3 className="font-bold capitalize text-2xl lg:text-3xl">expenses</h3>
      <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-y-5 w-full">
        <div className="w-full lg:w-[30%] border-2 rounded-full flex items-center border-neutral-1 focus-within:border-primary-100 p-2">
          <span>
            <CiSearch />
          </span>
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name"
            className="border-none outline-none w-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-5 gap-x-5 w-full lg:w-auto">
          <button
            onClick={handleOpen}
            className="bg-primary-200 w-full lg:w-40 h-8 rounded-full text-white flex items-center justify-center"
          >
            <h3 className="flex gap-x-3 capitalize items-center justify-center">
              <span>
                <FaPlus />
              </span>
              <span>Add expenses</span>
            </h3>
          </button>
          {open && (
            <Modal onClick={handleOpen} visible={open}>
              <CreateExpense handleCancel={handleOpen} />
            </Modal>
          )}
          <button className="bg-transparent w-full lg:w-40 h-8 rounded-full text-primary-100 border-2 border-primary-100 flex items-center justify-center">
            <h3 className="flex gap-x-3 capitalize items-center justify-center">
              <span>
                <CiExport />
              </span>
              <span>Export</span>
            </h3>
          </button>
        </div>
      </div>
      <div className="usersTable w-full mt-5 overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="capitalize text-md border-y-2 border-neutral-1 text-left">
            <tr>
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Category</th>
              <th className="py-3 px-2">type</th>
              <th className="py-3 px-2">Amount</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {currentItems.map((item, id) => (
              <tr key={id} className="border-y-2 border-neutral-1 relative">
                <td className="py-5 px-3 font-medium capitalize">{item.name}</td>
                <td className="py-5 px-3 font-medium">{item.category}</td>
                <td className="py-5 px-3 font-medium">{item.type}</td>
                <td className="py-5 px-3 font-medium">{item.amount}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-5 gap-y-5">
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2">
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border-2 rounded p-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border-2 cursor-pointer hover:bg-primary-200 hover:text-white rounded disabled:opacity-50 border-neutral-1"
          >
            <FaArrowLeft />
          </button>
          <span className="mx-4">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 border-2 cursor-pointer hover:bg-primary-200 hover:text-white rounded disabled:opacity-50 border-neutral-1"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expenses;
