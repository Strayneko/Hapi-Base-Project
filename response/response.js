export const success = (
  {
    data = null,
    message = "Data successfully fetched!",
    status = true,
    status_code = 200,
  } = {}
) => {
  return data
    ? {
        status_code,
        status,
        message,
        data,
      }
    : {
        status_code,
        status,
        message,
      };
};

export const error = (
  { message = "Bad request!", status_code = 400, status = false } = {}
) => {
  return {
    status_code,
    status,
    message,
  };
};

const response = {
  error,
  success,
};
export default response;
