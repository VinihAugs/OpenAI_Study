import { useState } from 'react';
import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';

import SideMenu from '../gpt-front/src/components/SideMenu/SideMenu';
import {ChatMessage} from './components/ChatMessage/ChatMessage';


function App() {


  const [input, setInput] = useState('');
  const [chatlog, setChatlog] = useState([{
    user:"gpt",
    message: "Olá, eu sou o ChatGPT, como posso te ajudar hoje?"
  }]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await makeRequest({ prompt: input });
      if (!response || !response.data) {
        throw new Error('Resposta inválida da API');
      }
      response = response.data.split('\n').map((line, index) => <p key={index}>{line}</p>);
      setChatlog([...chatlog, {
        user: 'me',
        message: `${input}`
      }, {
        user: 'gpt',
        message: response
      }]);
      setInput('');
    } catch (error) {
      console.error('Erro ao processar a resposta:', error);
      alert('Ocorreu um erro ao processar sua solicitação. Tente novamente.');
    }
  }
  

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className="chatbox">
        <div className="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input">
          <form onSubmit={handleSubmit}>
            <input
              className="chat-input-textarea"
              rows='1' 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
