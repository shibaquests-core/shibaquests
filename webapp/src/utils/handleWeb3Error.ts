import { toast } from "react-toastify";

export const handleWeb3Error = (error: any) => {
  if (error?.cause?.code === 4001) {
    return toast.error('User denied transaction');
  }
  return toast.error('An error occurred');
};
