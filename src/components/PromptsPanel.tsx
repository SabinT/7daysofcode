import "./PromptsPanel.scss";
import React from "react";

import { getPromptForDate, getThemeForDate } from "./Prompts";
import * as Utils from "../utils/DateUtils";

const shortDateFormat = new Intl.DateTimeFormat("default", {
  month: "short",
  day: "numeric",
});
const yearMonthFormat = new Intl.DateTimeFormat("default", {
  month: "short",
  year: "numeric",
});

function PromptsPanel() {
  const today = new Date();
  //const today = new Date("2020-07-01Z");

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
    const prompt = getPromptForDate(challengeDate);

    prompts.push(
      <div key={i} className="prompt">
        <div className="prompt-date">
          {shortDateFormat.format(challengeDate)}
        </div>
        <div className="prompt-text">
          <div className="prompt-title">{prompt.title}</div>
          <div className="prompt-subtitle">{prompt.subtitle}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="prompts-theme">
        Theme for {yearMonthFormat.format(challengeDate)}:{" "}
        <strong>{getThemeForDate(challengeDate)}</strong>
      </div>
      <div className="prompts-list">{prompts}</div>
    </>
  );
}

export default PromptsPanel;
