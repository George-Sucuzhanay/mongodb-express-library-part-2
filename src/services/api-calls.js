import axios from "axios";

export const getAllBooks = () => {
    let response = axios.get("htttp://localhost:3001/books")
    return response
}