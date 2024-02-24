import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./useLocalStorage";
const API_URL = "http://localhost:8080";

const postData = async (data: any): AxiosPromise<any> =>{
    const response = axios.post(API_URL +"/order", data);
    return response;
}

export function useOrderDataMutate(){

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: (data) =>{
            localStorage.setItem('order-data', JSON.stringify(data.data));
            queryClient.invalidateQueries(['order-data'])
        },
        retry: 2

    })
    return mutate ;
}