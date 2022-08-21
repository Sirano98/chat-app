import { strictEqual } from 'assert';
import { onAuthStateChanged } from 'firebase/auth';
import { FC, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { RequireAuth } from './hoc/RequireAuth';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { Chat } from './pages/chat/Chat';
import { Login } from './pages/login/Login';
import { loginUser, logoutUser } from './store/reducers/userSlice';
import './App.css';

export const App: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const currentUser = {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    uid: user.uid
                }
                dispatch(loginUser(currentUser))
                navigate("chat", { replace: true })
            } else {
                dispatch(logoutUser())
            }
        });
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="chat" element={
                    <RequireAuth>
                        <Chat />
                    </RequireAuth>
                } />
            </Routes>
        </div>
    );
}