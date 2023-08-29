import Axios from "./axios";
import { toast } from "react-toastify";
import axios from 'axios'
export const UPLOAD_IMAGE = async (image: any, callback:(e:any)=> void) => {
    const formData = new FormData();
    formData.append("image", image); // The API couldn't process JSON body so i changed it to formData.!!
    try {
        const {data} = await Axios({
            method: "POST",
            url: "predict",
            data: formData,
        })
        callback(data)
    } catch (error:any) {
        console.log(error);
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}

export const SEND_CODE = async (formData:any, setLoading:any, callback:(e:any)=> void) => {
    try {
        const {data} = await axios({
            url: "https://bentility-api.herokuapp.com/public/sendmail",
            method: "POST",
            data: formData
        })
        callback(data)
    } catch (error:any) {
        console.log(error);
        setLoading(false)
        toast.error(error?.response?.data?.message || "Something went wrong");
    }
}
