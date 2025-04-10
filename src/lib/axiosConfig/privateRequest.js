import axios from "axios";
import { getToken, showErrorNotification } from "../../utility/index";

// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 20s. If the request takes longer than
// that then the request will be aborted.
export const privateRequest = axios.create({
  timeout: 20000,
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
    ContentType: "multipart/form-data",
  },
});

// Step-2: Create request, response & error handlers
const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

const responseErrorHandler = (error) => {

  if (error.response) {
    const { status, data:{ message } } = error.response

    switch (status) {
      case 401:
        showErrorNotification("Token Expired! Please Login again")
        setTimeout(() => {
          window.location = '/';
          localStorage.removeItem("token")
        }, 1000)
        break;
      case 400:
        showErrorNotification(message || "Inavalid Input/ Bad Request")
        break;
      case 403:
        showErrorNotification(message || "Access Denied/ Forbidden")
        break;
      case 404:
        showErrorNotification(message || "Item doesn't exist")
        break;
      case 405:
        showErrorNotification(message || "Invalid Request")
        break;
      case 422:
        showErrorNotification(message || "Already Exists")
        break;
      case 504:
        showErrorNotification(message || "Network Error")
        break;
      default:
        showErrorNotification(message || "Some Error Occurred")
        break;
    }
  }
  else {
    showErrorNotification("Some Error Occurred")
  }
  return Promise.reject(error)
}

// Step-3: Configure/make use of request & response interceptors from Axios
privateRequest.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

privateRequest.interceptors.response.use(
  (response) => responseHandler(response),
  responseErrorHandler
);
