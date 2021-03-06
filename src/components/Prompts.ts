export interface IPrompt {
    title: string;
    subtitle?: string;
}

// key: YYYY-MM-DD
// value: prompt
const prompts: { [key: string]: IPrompt }  = {
    "2021-06-01": { title: "Sun" },
    "2021-06-02": { title: "Water" },
    "2021-06-03": { title: "Leaf" },
    "2021-06-04": { title: "Sky" },
    "2021-06-05": { title: "Flower" },
    "2021-06-06": { title: "Fire" },
    "2021-06-07": { title: "Wind" },

    "2021-07-01": { title: "Mirror" },
    "2021-07-02": { title: "Flow" },
    "2021-07-03": { title: "Repeat" },
    "2021-07-04": { title: "Combine" },
    "2021-07-05": { title: "Rotate" },
    "2021-07-06": { title: "Distort" },
    "2021-07-07": { title: "Divide" },

    "2021-08-01": { title: "Gravity", subtitle: "or no gravity" },
    "2021-08-02": { title: "Stars", subtitle: "and constellations" },
    "2021-08-03": { title: "Supernova", subtitle: "some kind of epic explosion" },
    "2021-08-04": { title: "Orbit", subtitle: "planets, moons, satellites, etc" },
    "2021-08-05": { title: "Nebula", subtitle: "space clouds where stars are born" },
    "2021-08-06": { title: "Galaxy", subtitle: "Milky Way, Andromeda, Whirlpool, etc" },
    "2021-08-07": { title: "Black Hole", subtitle: "" },

    "2021-10-01": { 
        title: "Fixed Palette", 
        subtitle: "Create a palette with at most 5 colors, and limit your sketch to use those colors." 
    },
    "2021-10-02": { title: "Sourced from life", subtitle: "Pick colors based on something from real life. Could be your favorite flower, fruit, plant, animal, insect, photo, etc." },
    "2021-10-03": { title: "Retro", subtitle: "Something that evokes retro/historical vibes. For ideas, you could think about something you'd see on an old TV/video game/sci-fi movie, CRT monitors, old photographs/prints, etc." },
    "2021-10-04": { title: "Least favorite color", subtitle: "Instead of using the same favorite color all the time, maybe give a chance to the colors that you avoid ;)" },
    "2021-10-05": { title: "Gradient", subtitle: "Use a gradient between two or more colors. Multiple gradients OK." },
    "2021-10-06": { title: "Mild", subtitle: "Go for a mild color scheme, where colors aren't too saturated, and don't vary too much in contrast." },
    "2021-10-07": { title: "Vibrant", subtitle: "Use bright, vivid colors!" }
};

/**
 * key is the month in format "YYYY-MM"
 * value is the theme for the month
 */
const themes: { [key: string]: string; } = {
    "2021-06": "Nature",
    "2021-07": "Transformations",
    "2021-08": "Space",
    "2021-10": "Colors"
}

function getLocalYearMonthDate(d: Date) {
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
        month = "0" + month;
    }

    if (day.length < 2) {
        day = "0" + day;
    }

    return [year, month, day].join("-");
}

export function getPromptForDate(date: Date): IPrompt {
    const key = getLocalYearMonthDate(date);
    return prompts[key] ?? { title: "..."};
}

export function getThemeForDate(date: Date): string {
    const key = getLocalYearMonthDate(date).substr(0, 7);
    return themes[key] ?? "...";
}