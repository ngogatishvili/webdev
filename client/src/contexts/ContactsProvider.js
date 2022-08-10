import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactContext = React.createContext();

export const ContactsProvider = ({children}) => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContact = (id, name) => {
    setContacts((prevState) => {
      return [...prevState, {id, name}];
    });
  };

  return (
    <ContactContext.Provider value={{contacts, createContact}}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts=()=>{
  return useContext(ContactContext);
}


