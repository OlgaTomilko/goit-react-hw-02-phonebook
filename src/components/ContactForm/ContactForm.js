const ContactForm = ({ onInputChange, onButtonClick }) => {
  return (
    <form>
      <label>Name</label>
      <input type="text" onChange={onInputChange} id="name"></input>
      <label>Number</label>
      <input type="text" onChange={onInputChange} id="number"></input>
      <button onClick={onButtonClick}>Add contact</button>
    </form>
  );
};

export default ContactForm;
