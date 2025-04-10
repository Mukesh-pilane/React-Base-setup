import { publicRequest } from "../axiosConfig/publicRequest";
import { LOGIN } from "../utility/apiEndPoints"
export const loginUser = (user) => {
    return publicRequest.post(LOGIN, user).then((res) => res.data.data);
};