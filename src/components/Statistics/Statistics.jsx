import { Notification } from 'components/Notification/Notification';
import { StatisticList, StatItem } from './Statistics.styled';
import { BsEmojiHeartEyes, BsEmojiNeutral } from 'react-icons/bs';
import { AiOutlineDislike, AiOutlinePercentage } from 'react-icons/ai';
import { TbSum } from 'react-icons/tb';

export const Statistics = ({
    good,
    neutral,
    bad,
    total = 0,
    positivePercentage = 0,
}) => {
    return total ? (
        <StatisticList>
            <li>
                <StatItem>
                    <BsEmojiHeartEyes size="20" />
                    Good: <span>{good}</span>
                </StatItem>
            </li>
            <li>
                <StatItem>
                    <BsEmojiNeutral size="20" />
                    Neutral: <span>{neutral}</span>
                </StatItem>
            </li>
            <li>
                <StatItem>
                    <AiOutlineDislike size="20"/>
                    Bad: <span>{bad}</span>
                </StatItem>
            </li>
            <li>
                <StatItem>
                    <TbSum size="20"/>
                    Total: <span>{total}</span>
                </StatItem>
            </li>
            <li>
                <StatItem>
                    <AiOutlinePercentage size="20"/>
                    Positive Feedback: <span>{positivePercentage}%</span>
                </StatItem>
            </li>
        </StatisticList>
    ) : (
            <Notification message="There is no feedback!" />
    )
}