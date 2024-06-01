import axiosInstance from "../axios"

interface ILogin {
    username: string
    password: string
}

export const loginApi = async (body: ILogin) => {
    return await axiosInstance.post("/login", body)
}