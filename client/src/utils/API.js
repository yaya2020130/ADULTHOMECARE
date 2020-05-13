import axios from "axios";
import logInbtn from "../components/LogInBtn"; const BASE_URL = "http://localhost:8080"


export default {
getAllPatients: ()=> axios.get(`${BASE_URL}/patients`),
getPatientLog: (id)=> axios.get(`${BASE_URL}/patient/${id}`),

 // login btn
 getLogInbtn: (id) =>
   axios.post(`${BASE_URL}/` + id)
}