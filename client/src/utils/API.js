import axios from "axios";

export default {
getAllPatients: ()=> axios.get("/patients"),
getPatientLog: (id)=> axios.get("/logs/"+id),
}