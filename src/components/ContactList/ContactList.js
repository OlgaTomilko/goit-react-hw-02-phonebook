const ContactList = ({ filter, contacts, onFilter, onDelete }) => {
  return (
    <ul>
      {filter
        ? onFilter().map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button type="button" id={id} onClick={onDelete}>
                Delete
              </button>
            </li>
          ))
        : contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button type="button" id={id} onClick={onDelete}>
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
};

export default ContactList;
