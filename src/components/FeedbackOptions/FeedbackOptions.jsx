
import { BtnWrapper } from "./FeedbackOptions.styled";
import { BtnFeedback } from "components/BtnFeedback/BtnFeedback";
import { Icons } from "./icons";


export const FeedBackOptions = ({ options, onLeaveFeedback}) => {
    return (
        <BtnWrapper>
            {options.map(option => {
                return (
                    <li key={option}>
                        <BtnFeedback
                            key={option}
                            icon={Icons[option]}
                            type="button"
                            value={option}
                            children={option}
                            onClick={() => onLeaveFeedback(option)}>
                            {option}
                        </BtnFeedback>
                    </li>
                )
            })}
        </BtnWrapper>
    );
};