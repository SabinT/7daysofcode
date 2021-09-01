import "./App.scss";
import ChallengeTimer from "./components/ChallengeTimer";
// import PromptsPanel from "./components/PromptsPanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="App-title-image"
          src="title.png"
          alt="7 Days of Code - Monthly Creative Coding Challenge"
        />
        <ChallengeTimer />
        {/* <PromptsPanel /> */}
        <div className="App-temporary-notice">
          7 Days of Code is on a break on September 2021. <br />
          Rather, it's freestyle this month :) <br />
          It will be back, so stay tuned!
          <br />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1528962862197-29c4f24ccc04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
            alt="Laptop with coffee indicating chill mood for coding"
          />
        </div>
      </header>
      <h3>How to participate:</h3>
      <ol>
        <li>
          Use an element of <strong>programming</strong> to create art in any
          format you want (e.g., image, video, audio, electronics, LEDs,
          interactive, and whatnot). You can use any kind of programming: any
          language (including visual programming), any environment/framework.
        </li>
        <li>
          Make something with the prompt of the day in mind. You may
          re-interpret the prompt as you like (e.g., if the prompt is "gravity",
          you can also make something that has zero gravity)
        </li>
        <li>
          You may create something new, or iterate on something you were already
          working on.
        </li>
        <li>
          Share your work on social media with the tag{" "}
          <strong>#7daysofcode</strong>. (no need to share code)
        </li>
        <li>
          Follow the hashtag <strong>#7daysofcode</strong> (e.g., on{" "}
          <a href="https://www.instagram.com/explore/tags/7daysofcode/">
            Instagram
          </a>
          ) to find works from other people on the challenge.
        </li>
        <li>
          If you cannot do all 7 days, pick the prompts you like and participate
          on the days you want!
        </li>
      </ol>

      <h3>Why you should join this challenge:</h3>
      <ol>
        <li>
          Get into the habit of creative coding and improve your workflow.
        </li>
        <li>Create alongside a community of like minded people</li>
        <li>Boost your portfolio with 7 new creations every month</li>
        <li>Practice and learn new algorithms and techniques</li>
        <li>
          Inspire and be inspired. Discover others' works, and be discovered.
        </li>
      </ol>
      <h3>Some tips:</h3>
      <ol>
        <li>
          Beginner? <a href="https://processing.org/">Processing</a>,{" "}
          <a href="https://p5js.org/">p5js</a>, and{" "}
          <a href="https://openframeworks.cc/">openFrameworks</a> are excellent
          general-purpose creative coding frameworks
        </li>
        <li>
          Make your work re-usable so that you can build upon it in the future
        </li>
        <li>
          Automate permutation of parameters/variables to discover hidden
          patterns
        </li>
        <li>
          Got questions? Need help? Have suggestions? Send an email to{" "}
          <strong>info</strong> <strong>at</strong>{" "}
          <strong>7daysofcode.art</strong> (or file an issue on{" "}
          <a href="https://github.com/SabinT/7daysofcode">github</a>)
        </li>
      </ol>
      <div className="App-footer">
        The code for this website is available on{" "}
        <a href="https://github.com/SabinT/7daysofcode">github</a>, maintained
        by <a href="https://lumic.space">Sabin T</a>.
      </div>
    </div>
  );
}

export default App;
