import { FC } from 'react';
import './App.css';
import { Chat } from './pages/chat/Chat';
import { Login } from './pages/login/Login';

export const App: FC = () => {
    return (
        <div className="App">
            <Chat />
            {/* <Login /> */}
        </div>
    );
}