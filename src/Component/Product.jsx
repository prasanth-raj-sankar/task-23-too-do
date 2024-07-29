import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Product = ({
  todoName,
  Description,
  id,
  deletetodo,
  loadEditData,
  Status,
}) => {
  return (
    <div className="product-card">
      <h2>Name: {todoName}</h2>
      <p>Description: {Description}</p>
      <div
        className={`status ${
          Status === "Completed" ? "completed" : "not-completed"
        }`}
      >
        <span>Status: </span>
        <select value={Status} disabled>
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="button-group">
        <button
          className="edit-button"
          onClick={() => loadEditData({ todoName, Description, Status, id })}
        >
          Edit
        </button>
        <button className="delete-button" onClick={() => deletetodo(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  Status: PropTypes.string.isRequired,
  todoName: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deletetodo: PropTypes.func.isRequired,
  loadEditData: PropTypes.func.isRequired,
};

export default Product;
