import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialstate = {
  todoName: "",
  Description: "",
  Status: "Not Completed", // Default status
};

const TodoaddFrom = ({ addtodo, edittodo, editData }) => {
  const [fromtodo, setfromtodo] = useState(initialstate);

  const handlechange = (e) => {
    // console.log(e.target.name);
    setfromtodo({
      //load the previous of the state
      ...fromtodo,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(fromtodo);

  //   //add product function here

  //   if (editData) {
  //     editProduct(fromtodo, editData.id);
  //   } else {
  //     // add product function here
  //     addproduct(fromtodo);
  //   }

  //   //from reset
  //   setfromtodo(initialstate);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      edittodo(fromtodo, editData.id);
    } else {
      // add product function here
      addtodo(fromtodo);
    }

    // reset form to initial state
    setfromtodo(initialstate);
  };

  useEffect(() => {
    if (editData) {
      setfromtodo(editData);
    } else {
      setfromtodo(initialstate);
    }
  }, [editData]);

  return (
    <div className="d-flex justify-content-center">
      {/* {console.log(fromtodo)} */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todoName"> Name</label>
          <input
            name="todoName"
            id="todoName"
            value={fromtodo.todoName}
            onChange={handlechange}
            placeholder="Todo Name"
            required
          />

          <label htmlFor="Description"> Description</label>
          
          <input
            name="Description"
            id="Description"
            value={fromtodo.Description}
            onChange={handlechange}
            placeholder="Todo Description"
            required
          />

          <label htmlFor="Status">Status</label>
          <select
            name="Status"
            id="Status"
            value={fromtodo.Status}
            onChange={handlechange}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>

          <button type="submit">{editData ? "Edit" : "To Add"}</button>
        </div>
      </form>
    </div>
  );
};

TodoaddFrom.propTypes = {
  addtodo: PropTypes.func.isRequired,
  editData: PropTypes.shape({
    id: PropTypes.string,
    todoName: PropTypes.string,
    Description: PropTypes.string,
    Status: PropTypes.string,
  }),
  edittodo: PropTypes.func,
};

export default TodoaddFrom;
