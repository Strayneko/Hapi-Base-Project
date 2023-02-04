// defining base response structure
interface BaseResponse {
  status_code: number;
  status: boolean;
  message: string;
  data?: Object | null;
}

// success response
const success = (
  data: Object | null = null,
  message: string = "Data Successfully Fetched",
  status_code: number = 200,
  status: boolean = true
): BaseResponse => {
  const response: BaseResponse = {
    status_code,
    status,
    message,
    data
  };
  return response;
};

// error response
const error = (
  message: string = "Bad Request",
  status_code: number = 400,
  status: boolean = false
): BaseResponse => {
  const response: BaseResponse = {
    status_code,
    status,
    message
  };
  return response;
};

// response functions map
const response = {
  error,
  success
};
export default response;
