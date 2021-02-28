const Filter = ({ onInputFind }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={onInputFind} id="find"></input>
    </div>
  );
};

export default Filter;
