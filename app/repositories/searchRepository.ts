import { AxiosInstance } from "./config";

export class searchRepository {
    static searchByInput = async (search: string) => {
        try {
            const response = await AxiosInstance.get(search);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

}