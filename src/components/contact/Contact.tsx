import { faker } from "@faker-js/faker";
import { FC } from "react";
import "./Contact.css";

export const Contact: FC = () => {
    return (
        <div className="contact">
            <img alt="avatar" src={faker.internet.avatar()} className="avatar" />
            <div className="contact__data">
                <div className="data__content">
                    <p className="contact__name">{faker.internet.userName()}</p>
                    <p className="contact__date">Feb 18, 2017</p>
                </div>
                <p className="contact__text">{faker.lorem.lines()}</p>
            </div>
        </div>
    )
}