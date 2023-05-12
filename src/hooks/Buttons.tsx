type Props = {
    type?: "submit" | "button";
    text: string;
    style: "submit" | "default" | "back";
    onClick?: () => void;
}

const Buttons = ({ text, type = "submit", style = "default", onClick }: Props) => {
    return (
        <button className={`btn ${style}`} type={type} onClick={onClick}>{text}</button>
    )
}
export default Buttons