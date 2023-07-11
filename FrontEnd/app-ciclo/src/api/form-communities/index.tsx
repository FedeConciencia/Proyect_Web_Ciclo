import axios from "../../../services/axiosInstance";
import errorHandler from "../error/handler";

const getAll = async () => {
  try {
    const response = await axios.get(`/form-communities`);

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

const getByDate = async (date: string) => {
  try {
    const response = await axios.get(
      `/form-communities?createdAtFilter=${date}`
    );
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

const getByRangeDate = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(
      `/form-communities?startDateFilter=${startDate}&endDateFilter=${endDate}`
    );
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
// Params should be an object with this
type city = {
  id: string | number;
};

type formCommunity = {
  name: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  city: city;
};
const create = async (params: formCommunity) => {
  try {
    const response = await axios.post(`/form-communities`, params);

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
  getByDate,
  getByRangeDate,
  create,
};
