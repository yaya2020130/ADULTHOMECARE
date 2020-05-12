import axios from "axios";
import logInbtn from "../components/LogInBtn";



export default {
getAllPatients: ()=> axios.get("/patients"),
getPatientLog: (id)=> axios.get(`/patient/${id}`),

 // login btn
 getLogInbtn: (id) =>
   axios.post("/" + id)
}