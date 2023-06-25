import { MSG_SERVER_ERROR, MSG_CLIENT_ERROR } from "./messages";

// handlear errores de llamdas a la API
export default function handler(err: any) {
  let message: any = null;
  let errorsList = [];

  // client received response
  if (err.response) {
    const errors = err.response.data;
    if (errors) {
      let mappedErrors: any = {};
      errors.map((x: any) => {
        mappedErrors[x.field] = x.message;
      });

      errorsList = mappedErrors;
    } else {
      message = `ERROR: ${err.response.config.url}: ${JSON.stringify(
        err.response.data
      )}`;
    }
  } else if (err.request) {
    // client never received a response, or request never left
    message = MSG_SERVER_ERROR;
  } else {
    // anything else
    message = MSG_CLIENT_ERROR;
  }

  if (message) {
    console.log(message);
  }

  return errorsList;
}
