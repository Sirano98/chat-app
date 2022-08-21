import { faker } from "@faker-js/faker";
import { FC } from "react";
import "./Message.css";

interface MessageProps {
    imageSrc: string,
}

export const Message: FC<MessageProps> = ({ imageSrc }) => {

    const id = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

    return (
        <div className={id ? "message" : "message message-user"}>
            {id ? <img src={imageSrc} alt="avatar" className="avatar" /> : null}
            <div className="message__content">
                <p className="message__text">{faker.lorem.lines()}</p>
                <p className="message__date">4/22/17, 4:10 AM</p>
            </div>
        </div>
    )
}