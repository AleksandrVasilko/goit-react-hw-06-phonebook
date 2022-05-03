import { useDispatch, useSelector } from 'react-redux';
import s from './ContactsList.module.css'
import { getVisibleContacts } from 'redux/phonebook/selectors';
import { deleteContactAction } from 'redux/phonebook/actions';

export default function Contacts() {
    const contacts = useSelector(getVisibleContacts);

    const dispatch = useDispatch();

    const onDeleteContact = id => {
        dispatch(deleteContactAction(id));
    };

    return (
        <div>
        <p className={s.title}>Contacts</p>
        <ul className={s.contactList}>
            {contacts.map(({ id, name, number }) => (
                <li
                    key={id}
                    className={s.contactList__item}>
                    
                    <span className={s.contactList__text}>{name}: </span>
                    <span className={s.contactList__text}>{number}</span>
                
                    <button
                        type="button"
                        className={s.contactList__button}
                        onClick={() => onDeleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
            </ul>
        </div>
    );
}
