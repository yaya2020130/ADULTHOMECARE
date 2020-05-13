import React from 'react'
import { Input, TextArea, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
 function employee() {

 
    // Setting our component's initial state
    const [patients, setPatients] = useState([])
    const [formObject, setFormObject] = useState({})
    useEffect(() => {
      loadEmployee()
    }, [])



  //  / / Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
      API.deletePatient(id)
        .then(res => loadPatients())
        .catch(err => console.log(err));
    }
    function handleFormEdit(event) {
      event.preventDefault();
      if (formObject.title && formObject.author) {
        API.saveBook({
          title: formObject.title,
          author: formObject.author,
          synopsis: formObject.synopsis
        })
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }
    };
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.title && formObject.author) {
        API.saveBook({
          title: formObject.title,
          author: formObject.author,
          synopsis: formObject.synopsis
        })
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }
    };

// Handles updating component state when the user types into the input field
function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
};

  return (
    <div>
      
    </div>
  )
}
export default  employee