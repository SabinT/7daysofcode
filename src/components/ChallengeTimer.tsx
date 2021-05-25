import './ChallengeTimer.scss';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import * as Utils from '../utils/DateUtils';

function timerRenderer(props: CountdownRenderProps) {
    if (props.completed) {
        // Render a completed state
        return <div>The challenge is now active!</div>;
    } else {
        // Render a countdown
        return (
            <span>
                <strong>{props.days}</strong> days, 
                <strong>{props.hours}</strong> hours, 
                <strong>{props.minutes}</strong> minutes, 
                <strong>{props.seconds}</strong> seconds left.
            </span>
        );
    }
}

function ChallengeTimer() {
    var today = new Date();
    if (Utils.isChallengeActive(today)) {
        // Don't show timer when a challenge is running
        return <></>;
    }

    const nextChallengeDate = Utils.getStartOfNextMonth(today);

    return (
        <div className='challenge-timer'>
            <p>Next challenge starts on <strong>{nextChallengeDate.toDateString()}</strong>.</p>
            <p>
                <Countdown
                    date={nextChallengeDate}
                    renderer={timerRenderer}
                />
            </p>
        </div>
    );
}

export default ChallengeTimer;