

export const ContactList = ({ contacts, onDelete }) => (
    <ul>{
        contacts.map(({ id, name, number }) => (<li key={id}>
            <p>{name} :{number}</p><button onClick={() => onDelete(id)} type="button">Delete</button></li>))}</ul>
);