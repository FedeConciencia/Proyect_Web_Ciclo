import axios from "../../../services/axiosInstance";
import errorHandler from "../error/handler";

const getAll = async () => {
  try {
    const response = await axios.get(`/states`);
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    const message = errorHandler(err);

    return {
      success: false,
      error: message,
    };
  }
};

const getById = async (id: string) => {
  try {
    const response = await axios.get(`/states/${id}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    const message = errorHandler(err);

    return {
      success: false,
      error: message,
    };
  }
};

export default {
  getAll,
  getById,
};
