import axios from "axios";
const REST_API_BASE_URL='http://localhost:8080/api/v1/employees';
export const listEmployee=() => axios.get(REST_API_BASE_URL);
export const CreateEmployee=(Employee) => axios.post(REST_API_BASE_URL,Employee);
export const getDep=(id)=>axios.get(REST_API_BASE_URL+'/Login'+id) 