import { FC } from "react";
import "./Typing.css";

interface TypingProps {
    userName: string
}

export const Typing: FC<TypingProps> = ({ userName }) => {
    return (
        <div className="typing">
            <p className="typing__name">{userName} is typing</p>
            <div className="typing__dots">
                <div className="typing__dot"></div>
                <div className="typing__dot"></div>
                <div className="typing__dot"></div>
            </div>
        </div>
    )
}