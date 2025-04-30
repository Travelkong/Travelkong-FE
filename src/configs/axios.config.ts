import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from "axios"

const instance: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    transformResponse: [
        data => JSON.parse(data)
    ]
})

instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        console.error(error)
        // Ensuring the error is propagated.
        return Promise.reject(error)
    }
)

export default instance