import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Contact } from "../contact/Contact";
import { Header } from "../header/Header";
import "./Contacts.css";

export const Contacts: FC = () => {
    const userName = useAppSelector(state => state.user.user?.displayName);
    const imageSrc = useAppSelector(state => state.user.user?.photoURL);

    return (
        <div className="contacts">
            <Header imageSrc={imageSrc || ""} userName={userName || ""} />
            <p className="contacts__title">Chats</p>
            <div className="contacts__list">
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
            </div>
        </div>
    )
}