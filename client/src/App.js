import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationProvider } from './contexts/ConversationProvider';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [id,setId]=useLocalStorage("id","")

  const dashboard=(
    <ConversationProvider>
    <ContactsProvider>
      <Dashboard id={id}/>
    </ContactsProvider>
    </ConversationProvider>
  )
  return (
    
    
      id? dashboard : <Login onIdSubmit={setId}/> 
    
  );
}

export default App;
