import React from 'react'
import { useState } from 'react';
import {Tab,Nav, NavItem,NavLink, Button,Modal} from "react-bootstrap"
import Contacts from './Contacts';
import Conversations from './Conversations';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';


const CONVERSATIONS_KEY="conversations";
const CONTACTS_KEY="contacts";

const SideBar = ({id}) => {
    const [activeKey,setActiveKey]=useState(CONVERSATIONS_KEY);
    const [modalOpen,setModalOpen]=useState(false);
    const conversationOpen=activeKey===CONVERSATIONS_KEY;

    const closeModal=()=>{
        setModalOpen(false)
    }
  return (
    <div style={{width:"250px"}} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant="tabs" className="justify-content-center">
                <NavItem>
                    <NavLink eventKey={CONVERSATIONS_KEY}>Conversations</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink eventKey={CONTACTS_KEY}>Contacts</NavLink>
                </NavItem>
            </Nav>
            <Tab.Content style={{borderRight:"1px solid #ccc",flexGrow:1,overflow:"auto"}}>
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                   <Conversations/> 
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts/>
                </Tab.Pane>
            </Tab.Content>
            <div className="p-2 border-top border-right small">
                Your Id is <span className="text-muted">{id}</span>
            </div>
            <Button onClick={()=>setModalOpen(true)} className="rounded-0">
                New {conversationOpen?"Conversation":"Contact"}
            </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
          {conversationOpen? <NewConversationModal closeModal={closeModal}/>:<NewContactModal closeModal={closeModal}/>}
      </Modal>
    </div>
  )
}

export default SideBar;
