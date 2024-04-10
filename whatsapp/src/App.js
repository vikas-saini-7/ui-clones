import ChatSection from './components/ChatSection';
import ListSection from './components/ListSection';
import './styles/main.scss';

function App() {
  return (
    <div className='flex flex-row h-screen'>
      <ListSection/>
      <ChatSection/>
    </div>
  );
}

export default App;
