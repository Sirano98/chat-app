import { FC } from "react";
import { Contacts } from "../../components/contacts/Contacts";
import { Messages } from "../../components/messages/Messages";
import "./Chat.css";

export const Chat: FC = () => {
    return (
        <main className="chat">
            <Contacts />
            <Messages />
        </main>
    )
}