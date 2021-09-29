import "./App.scss";
import ChallengeTimer from "./components/ChallengeTimer";
import PromptsPanel from "./components/PromptsPanel";
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
        <PromptsPanel />
      </header>

      <div>Many thanks to <a href="https://www.instagram.com/jasonnomore/">Jason</a>, <a href="https://www.instagram.com/vertex.shader/">Samir</a>, <a href="https://www.instagram.com/sosunnyproject/">sosunnyproject</a> for helping with prompts for current/past challenges!</div>

      <h3>Some tips:</h3>
      <ol>
        <li>
          There are several websites that will let you pick colors based on relationships between colors on a color wheel (<a href="https://color.adobe.com/create">example</a>).
          Even if you're picking colors with code, you can do something similar!
        </li>
        <li>
          You don't always have to work with RGB colors, you can use alternate representations like HSL.
          Consider reading about "color spaces" and "perceptual color models", as there are more than one way to blend colors, or to create gradients between them.
          Here's an <a href="https://raphlinus.github.io/color/2021/01/18/oklab-critique.html">interesting article</a> by Raph Levien comparing different color spaces.
        </li>
        <li>
          Consider adding a book on color theory to your library. Some recommendations:
          <ol>
            <li><a href="https://www.handprint.com/HP/WCL/color2.html">The geometry of color perception</a></li>
            <li><a href="http://www.huevaluechroma.com">Modern colour theory for traditional and digital painting media</a></li>
            <li><a href="https://online.maryville.edu/liberal-arts-degrees/the-art-of-color">The Art of Color: Color Wheel &amp; Color Relationships</a></li>
            <li>Color and Light: A guide for the realist painter (by <a href="https://www.instagram.com/jamesgurneyart">James Gurney</a>)</li>
            <li>The Art of Color: The Subjective Experience and Objective Rationale of Color (by Johannes Itten)</li>
          </ol>
          Many thanks to these folks for above recommendations:
          <a href="https://www.instagram.com/amy_goodchild">Amy Goodchild</a>,
          <a href="https://www.instagram.com/bendotk/">Ben Kovach</a>,
          <a href="https://www.instagram.com/lalabadie/">Louis-André Labadie</a>,
          <a href="https://www.instagram.com/piterpasma/">Piter Pasma</a>,
          <a href="https://www.instagram.com/rwstruhl/">Ryan Struhl</a>.
        </li>
        <li>
          Don't get stuck too much on theory, be sure to use your own intuition as well!
        </li>
        <li>
          The works of your favorite artists might make for good study material!
        </li>
      </ol>

      <h3>What is "7 Days of Code"?</h3>
      <div>
        This is a super informal creative coding challenge that is meant to provide an instigation to create.
        No hard rules, no stressful deadlines. It's like an "art + code party" that you can join if you like the theme (and have the time for it).
      </div>

      <h3>Why should you participate?</h3>
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
          Got suggestions? Send a message to <a href="https://www.instagram.com/lumic.exe/">the host</a>, or file an issue on{" "}
          <a href="https://github.com/SabinT/7daysofcode">github</a>.
        </li>
      </ol>
      <div className="App-footer">
        The code for this website is available on{" "}
        <a href="https://github.com/SabinT/7daysofcode">github</a>.
      </div>
    </div>
  );
}

export default App;
