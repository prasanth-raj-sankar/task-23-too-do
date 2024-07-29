import PropTypes from "prop-types";

const StatusFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="pt-5">
      <label style={{padding: '7px'}} htmlFor="statusFilter">Status Filter: </label>
      <select
        id="statusFilter"
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

StatusFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default StatusFilter;
