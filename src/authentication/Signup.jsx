import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signin from "../assets/images/signin.jpeg"; // Assuming you might need this import later
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    user_name: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.email) errors.email = "Required";
    if (!formData.user_name) errors.user_name = "Required";
    if (!formData.password) errors.password = "Required";
    return errors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const errors = validate();
  //   setErrors(errors);
  //   if (Object.keys(errors).length > 0) return;

  //   try {
  //     setLoading(true);
  //     const response = await axiosClient.post("/auth/signup", formData);
  //     setLoading(false);
  //     MySwal.fire({
  //       title: "Success",
  //       icon: 'success',
  //       text: "Signed up successfully."
  //     }).then(() => {
  //       navigate("/users");
  //     });
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error?.response?.data?.message);
  //     MySwal.fire({
  //       title: "Error",
  //       icon: 'error',
  //       text: error?.response?.data?.message || "An error occurred"
  //     });
  //   }
  // };

  const handlePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <section className='w-full h-screen bg-white'>
      <div className='w-full h-full py-5 flex flex-row'>
        <div className='lg:w-[50%] sm:w-0 bg-primary-100'>
          <div className='w-full h-full hidden lg:flex '>
            <div className="flex flex-col items-center justify-center mx-36">
              {/* Add content here if needed */}
            </div>
          </div>
        </div>
        <div className='lg:w-[50%] sm:w-full flex flex-col items-center justify-center px-5'>
          <div className="my-5">
            <h2 className="font-bold text-4xl capitalize">start your journey!</h2>
            <p className="font-medium first-letter:capitalize">sign up to get started</p>
          </div>
          <form className="lg:w-[50%] sm:w-full">
            <div className="w-full mb-5">
              <h2 className="font-bold capitalize">email</h2>
              <input 
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter your email"
                className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="w-full mb-5">
              <h2 className="font-bold capitalize">username</h2>
              <input 
                type="text"
                name="user_name"
                id="user_name"
                onChange={handleChange}
                value={formData.user_name}
                placeholder="Enter your username"
                className="outline-none border-2 border-neutral-1 rounded-lg p-3 focus:border-primary-100 w-full"
              />
              {errors.user_name && <p className="text-red-500">{errors.user_name}</p>}
            </div>
            <div className="w-full mb-5">
              <h2 className="font-bold capitalize">password</h2>
              <div className="flex items-center gap-x-2 outline-none border-2 border-neutral-1 rounded-lg p-3 focus-within:border-primary-100">
                <input 
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Enter your password"
                  className="outline-none border-none w-full"
                />
                <span onClick={handlePasswordVisibility} className="font-bold text-neutral-1 cursor-pointer">
                  {passwordVisible ? <GoEye size={20} /> : <GoEyeClosed size={20} />}
                </span>
              </div> 
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div className="w-full mb-10">
              <button type="submit" className={`capitalize w-full h-14 ${loading ? "bg-primary-100 text-white" : "bg-transparent text-primary-100 border-2 border-primary-100"} font-medium rounded-lg`} disabled={loading}>
                {loading ? "Loading..." : "sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </section>
  );
};

export default Signup;
