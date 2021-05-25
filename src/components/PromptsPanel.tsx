import './PromptsPanel.scss';
import React from 'react';

import { getPromptForDate } from './Prompts';
import * as Utils from '../utils/DateUtils';

const shortDateFormat = new Intl.DateTimeFormat('default', { month: 'short', day: 'numeric' });

function PromptsPanel() {
    const today = new Date();

    let challengeDate: Date;
    if (Utils.isChallengeAboutToStart(today)) {
        // Show prompts for next month towards the end of the month.
        challengeDate = Utils.getStartOfNextMonth(today);
    } else {
        challengeDate = Utils.getStartOfMonth(today);
    }

    const prompts: JSX.Element[] = [];

    for (let i = 0; i < 7; i++) {
        challengeDate.setDate(i + 1);

        prompts.push(
            <div key={i} className='prompt'>
                <div className='prompt-date'>
                     { shortDateFormat.format(challengeDate) }
                </div>
                <div className='prompt-text'>
                    { getPromptForDate(challengeDate) }
                </div>
            </div>
        );
    }

    return (
        <div className='prompts-list'>
            { prompts }
        </div>
    );
}

export default PromptsPanel;