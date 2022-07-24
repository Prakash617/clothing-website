import { toast } from "react-toastify";

export const backendErrorDisplay = (errors: any) => {
  const errorList: any = {};
  for (const error in errors) {
    if (error === "nonFieldErrors") {
      toast.error(errors?.nonFieldErrors[0]?.message);
    } else {
      errorList[error] = errors[error]?.map((item: any) => item.message);
      toast.error("Invalid form");
    }
  }
  return errorList;
};
