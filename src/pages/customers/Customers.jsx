import { useState } from "react";
import { CiSearch, CiExport } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Modal from "../../component/Modal";
import { userTable } from "../../component/dummy";
import CreateCustomer from "./CreateCustomer";

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [viewDropdown, setViewDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const {id} = useParams();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleView = (index) => {
    setViewDropdown((prev) => (prev === index ? null : index));
  };

  const totalPages = Math.ceil(userTable.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  const filteredUsers = userTable.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="w-full h-full">
      <h3 className="font-bold capitalize text-2xl lg:text-3xl">customers</h3>
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
        <div onClick={handleOpen} className="flex flex-col lg:flex-row items-center gap-y-5 gap-x-5 w-full lg:w-auto">
          <button className="bg-primary-200 w-full lg:w-40 h-8 rounded-full text-white flex items-center justify-center">
            <h3 className="flex gap-x-3 capitalize items-center justify-center">
              <span>
                <FaPlus />
              </span>
              <span>add customers</span>
            </h3>
          </button>

          {open && (
            <Modal onClick={handleOpen} visible={open}>
              <CreateCustomer handleCancel={handleOpen} />
            </Modal>
          )}

          <button className="bg-transparent w-full lg:w-40 h-8 rounded-full text-primary-100 border-2 border-primary-100 flex items-center justify-center">
            <h3 className="flex gap-x-3 capitalize items-center justify-center">
              <span>
                <CiExport />
              </span>
              <span>export</span>
            </h3>
          </button>
        </div>
      </div>
      <div className="usersTable w-full mt-5 overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="capitalize text-md border-y-2 border-neutral-1 text-left">
            <tr>
              <th className="py-3 px-2">name</th>
              <th className="py-3 px-2">email</th>
              <th className="py-3 px-2">date of birth</th>
              <th className="py-3 px-2">status</th>
              <th className="py-3 px-2">action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {currentItems.map((item, id) => (
              <tr key={id} className="border-y-2 border-neutral-1 relative">
                <td className="py-5 px-3 font-medium capitalize">{item.name}</td>
                <td className="py-5 px-3 font-medium">{item.email}</td>
                <td className="py-5 px-3 font-medium">{item.login}</td>
                <td
                  className={`py-5 px-3 font-medium capitalize ${
                    item.status === "active" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.status}
                </td>
                <td
                  onClick={() => handleView(id)}
                  className="py-5 px-3 font-bold text-neutral-1 cursor-pointer hover:text-primary-200"
                >
                  <BsThreeDots />
                </td>
                {viewDropdown === id && (
                  <div className="absolute top-full right-0 mt-2 w-40 rounded bg-white p-5 shadow-md z-10">
                    <Link
                      to={`/view-customers/${item.id}`} // Adjusted link to include customer ID
                      className="block text-primary-200 capitalize font-medium mb-2"
                    >
                      view
                    </Link>
                    <h3 className="block capitalize font-medium text-red-500 cursor-pointer">
                      disable user
                    </h3>
                  </div>
                )}
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

export default Customers;
