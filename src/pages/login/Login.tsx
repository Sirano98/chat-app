import { FC } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { signInWithGoole } from "../../store/reducers/userSlice";
import "./Login.css";

export const Login: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="login">
            <svg className="login__icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g id="User"><path d="M0.25 20C0.25 16.2721 3.27208 13.25 7 13.25H17C20.7279 13.25 23.75 16.2721 23.75 20V22C23.75 22.9665 22.9665 23.75 22 23.75H2C1.0335 23.75 0.25 22.9665 0.25 22V20ZM7 14.75C4.10051 14.75 1.75 17.1005 1.75 20V22C1.75 22.1381 1.86193 22.25 2 22.25H22C22.1381 22.25 22.25 22.1381 22.25 22V20C22.25 17.1005 19.8995 14.75 17 14.75H7Z" id="Rectangle 39 (Stroke)" /><path d="M11.5 1.75C8.87665 1.75 6.75 3.87665 6.75 6.5C6.75 9.12335 8.87665 11.25 11.5 11.25C14.1234 11.25 16.25 9.12335 16.25 6.5C16.25 3.87665 14.1234 1.75 11.5 1.75ZM5.25 6.5C5.25 3.04822 8.04822 0.25 11.5 0.25C14.9518 0.25 17.75 3.04822 17.75 6.5C17.75 9.95178 14.9518 12.75 11.5 12.75C8.04822 12.75 5.25 9.95178 5.25 6.5Z" id="Ellipse 21 (Stroke)" /></g></svg>
            <h1 className="login__title">User login</h1>
            <button className="login__btn" onClick={() => dispatch(signInWithGoole())}>Login with Google</button>
        </div>
    )
}