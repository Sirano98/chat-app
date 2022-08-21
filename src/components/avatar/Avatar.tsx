import { FC } from "react";
import "./Avatar.css";

interface AvatarProps {
    imageSrc: string
}

export const Avatar: FC<AvatarProps> = ({ imageSrc }) => {
    return (
        <img src={imageSrc} alt="avatar" className="avatar" />
    )
}