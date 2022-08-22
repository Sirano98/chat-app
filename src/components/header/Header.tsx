import { signOut } from "firebase/auth";
import { FC } from "react";
import { auth } from "../../firebase";
import { Avatar } from "../avatar/Avatar";
import "./Header.css";

interface HeaderProps {
    imageSrc: string;
    userName: string;
}

export const Header: FC<HeaderProps> = ({ imageSrc, userName }) => {
    return (
        <div className="header">
            <div className="header__data">
                <button type="submit" className="getBack-button"></button>
                <Avatar imageSrc={imageSrc} />
                <p className="header__name">{userName}</p>
            </div>
            <button className="logout-button" onClick={() => signOut(auth)}>Log out</button>
            <form
                className="header__form"
                autoComplete="off">

                <label className="contacts__label">
                    <button type="submit" className="search-button"></button>
                    <input
                        type="search"
                        name="search"
                        className="header__input"
                        placeholder="Search or start new chat"
                    />
                </label>

            </form>
        </div>
    )
}