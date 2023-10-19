
import { Button } from "./BtnFeedback.styled";


export const BtnFeedback = ({
    icon: Icon = null,
    type = 'button',
    children,
    onClick,
}) => {
    return (
        <Button type={type} onClick={onClick}>
            {Icon && <Icon size="16" />}
            {children}
        </Button>
    );
};