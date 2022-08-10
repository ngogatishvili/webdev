import React,{useState} from 'react'
import {Modal,Form,Button} from "react-bootstrap"
import { useContacts } from '../contexts/ContactsProvider'
import {useConversationContext} from "../contexts/ConversationProvider";

const NewConversationModal = ({closeModal}) => {

    const [selectedContactIds,setSelectContactIds]=useState([])

    const {contacts}=useContacts();
    const {createConversation}=useConversationContext();

    const handleSubmit=(e)=>{
        e.preventDefault();
        createConversation(selectedContactIds)
        closeModal();
        

    }

    const handleSelectCheckbox=(contactId)=>{
        setSelectContactIds(prevContacts=>{
            if(prevContacts.includes(contactId)) {
                return prevContacts.filter(contact=>contact!==contactId);
            }else{
                return [...prevContacts,contactId];
            }
        })
    }
    
  return (
    <>
    <Modal.Header closeButton>Create Conversation</Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        {contacts.map(contact=>(
            <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check
                    type="checkbox"
                    value={selectedContactIds.includes(contact.id)}
                    label={contact.name}
                    onChange={()=>handleSelectCheckbox(contact.id)}

                />
            </Form.Group>
        ))}
        <Button className='my-3' type='submit'>
          Create
        </Button>
      </Form>
    </Modal.Body>
  </>
  )
}

export default NewConversationModal;
