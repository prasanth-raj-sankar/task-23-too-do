import { useState } from "react";
import "./App.css";
import Todoaddform from "./Component/Todoaddform";
import Product from "./Component/Product";
import StatusFilter from "./Component/StatusFilter";
import { v4 } from "uuid";

function App() {
  const [todo, settodo] = useState([]);
  const [editData, setEditData] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");

  const addtodo = (formdetails) => {
    const fromstatus = {
      ...formdetails,
      id: v4(),
    };

    // console.log(product);

    //creating a new array of product with the new product
    const newtodo = [...todo, fromstatus];
    // console.log(newtodo)
    //changing the state variable
    settodo(newtodo);
  };

  //delete 
  const deletetodo = (pdId) => {
    const newtodo = todo.filter((fromstatus) => fromstatus.id !== pdId);
    // console.log(newtodo);
    settodo(newtodo);
  };

  // edit
  const loadEditData = (pdData) => {
    setEditData(pdData);
  };

  const edittodo = (formState, id) => {
    const temptodo = [...todo];
    const pdIndex = temptodo.findIndex((p) => p.id === id);

    temptodo[pdIndex] = {
      ...temptodo[pdIndex], // existing values of the product
      ...formState, // override the existing product with new values
    };

    // console.log(temptodo);
    settodo(temptodo);

    setEditData(null);
  };

  // console.log(editData);
  const handleFilterChange = (filter) => {
    setStatusFilter(filter);
  };

  const filteredtodo = todo.filter((fromstatus) => {
    if (statusFilter === "All") return true;
    return fromstatus.Status === statusFilter;
  });

  return (
    <>
      <h3 className="text-center" style={{ color: "#2a9a80" }}>
        MY Too
      </h3>

      <Todoaddform
        addtodo={addtodo}
        edittodo={edittodo}
        editData={editData}
      />
      <StatusFilter
        currentFilter={statusFilter}
        onFilterChange={handleFilterChange}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredtodo.map((pd) => (
          <Product
            key={pd.id}
            todoName={pd.todoName}
            Description={pd.Description}
            Status={pd.Status}
            deletetodo={() => deletetodo(pd.id)}
            loadEditData={loadEditData}
            id={pd.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
