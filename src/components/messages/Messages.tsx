import { faker } from "@faker-js/faker";
import { FC } from "react";
import { Header } from "../header/Header";
import { Message } from "../message/Message";
import { Typing } from "../typing/Typing";
import "./Messages.css";

export const Messages: FC = () => {

    const imageSrc = faker.internet.avatar();
    const userName = faker.internet.userName();

    return (
        <div className="messages">
            <Header imageSrc={imageSrc} userName={userName} />

            <div className="messages__content">
                <Typing userName={userName} />
                <div className="messages__list">
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                    <Message imageSrc={imageSrc} />
                </div>
            </div>

            <div className="messages__input">
                <form
                    className="messages__form"
                    autoComplete="off">

                    <label className="messages__label">
                        <button type="submit" className="send-button">
                            <svg className="send-button-icon" width="32px" height="32px" viewBox="0 0 32 32" id="Outlined" xmlns="http://www.w3.org/2000/svg"><title /><g id="Fill"><path d="M28.11,13.32,2.13,2.1,7.44,14.85a3.05,3.05,0,0,1,0,2.3L2.13,29.88l26-11a3,3,0,0,0,0-5.51ZM27.31,17,5.87,26.12l3.41-8.2A4.42,4.42,0,0,0,9.56,17H20V15H9.56a4.42,4.42,0,0,0-.28-.92L5.87,5.9l21.45,9.25a1,1,0,0,1,.6.92A1,1,0,0,1,27.31,17Z" /></g></svg>
                        </button>
                        <textarea
                            spellCheck={false}
                            rows={1}
                            cols={1}
                            name="message"
                            className="messages__input__field"
                            placeholder="Type your message"
                        />
                    </label>

                </form>
            </div>
        </div>
    )
}