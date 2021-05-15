import React from 'react';
import relativeDate from 'tiny-relative-date';

function ChallengeTimer() {
    // TODO make this update every second, and in a days/hour/minute/second format
    const nextChallengeDate = new Date();
    nextChallengeDate.setDate(1);
    nextChallengeDate.setMonth(nextChallengeDate.getMonth() + 1);

    const timeLeft = relativeDate(nextChallengeDate);

    return (
        <div>Next challenge starts in: {timeLeft} ({nextChallengeDate.toDateString()})</div>
    );
}

export default ChallengeTimer;