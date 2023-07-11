import axios from "../../../services/axiosInstance";
import errorHandler from "../error/handler";

const getAll = async () => {
  try {
    const response = await axios.get(`/form-projects`);
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
    const response = await axios.get(`/form-projects?createdAtFilter=${date}`);
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
type projectType = "CONSTRUCCION_DE_CERO" | "REMODELACION";
type formProject = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  projectType: projectType;
};
const create = async (params: formProject) => {
  try {
    const response = await axios.post(`/form-projects`, params);

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
  create,
};
