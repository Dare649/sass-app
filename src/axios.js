import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Accept: "application/json",
    'Content-Type': 'multipart/form-data',
  },
});

// Interceptor to add token to headers if available
axiosClient.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem('token');
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle unauthorized responses
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      MySwal.fire({
        title: "Token Expired",
        text: "You have been signed out due to token expiration.",
        icon: "warning",
      }).then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setTimeout(() => {
          window.location.href = '/signin';
        }, 2000);
      });
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
