import './App.css';
import ChallengeTimer from './components/ChallengeTimer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          #7DaysOfCode Creative Coding Challenge
        </p>
        <p>
          <strong>7 Days of Code</strong> is a social creativity challenge, where participants (you) create art with code for the first 7 days of every month.
          Any medium/format can be used, however, guidelines are provided to make it easy to share your work on social media.
        </p>
        <p>
          Here's how you can make the most out of this challenge:
          <ul>
            <li>Create alongside a community of like minded people from around the world</li>
            <li>Hone your programming skills by creating interesting artwork</li>
            <li>Boost your portfolio with 7 new creations every month</li>
            <li>Try out new algorithms and techniques</li>
            <li>Inspire and be inspired. Discover others' works, and be discovered.</li>
          </ul> 
        </p>
        <p>
          TODO: random artworks featured from previous challenges
        </p>
        <p>
          TODO: social links
        </p>
        <p>
          TODO: pages for links/resources
        </p>
        <p>
          Gallery pages from past challenges (social media embeds), sorted by Year-Month
        </p>
        <ChallengeTimer />
      </header>
    </div>
  );
}

export default App;
