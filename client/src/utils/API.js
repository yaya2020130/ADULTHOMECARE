import axios from "axios";

export default {
getAllPatients: ()=> axios.get("/patients")
}