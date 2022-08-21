import { faker } from "@faker-js/faker";
import { FC } from "react";
import { Contact } from "../contact/Contact";
import { Header } from "../header/Header";
import "./Contacts.css";

export const Contacts: FC = () => {

    const imageSrc = faker.internet.avatar();
    const userName = faker.internet.userName();

    return (
        <div className="contacts">
            <Header imageSrc={imageSrc} userName={userName} />
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