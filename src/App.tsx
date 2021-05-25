import './App.scss';
import ChallengeTimer from './components/ChallengeTimer';
import PromptsPanel from './components/PromptsPanel';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          <strong>#7DaysOfCode</strong> Creative Coding Challenge <br />
            Make art with code on the first 7 days of every month.
          </p> */}
          <img className='App-title-image' src='title.png' alt='7 Days of Code - Monthly Creative Coding Challenge' />
        <ChallengeTimer />
        <PromptsPanel />
      </header>
      <p>
        Why you should join this challenge:
      </p>
      <ul>
        <li>Create alongside a community of like minded people</li>
        <li>Hone your programming skills by creating interesting artwork</li>
        <li>Boost your portfolio with 7 new creations every month</li>
        <li>Practice and learn new algorithms and techniques</li>
        <li>Inspire and be inspired. Discover others' works, and be discovered.</li>
      </ul>
      <p>
        Make sure to share your work on social media with the tag <strong>#7daysofcode</strong> so that creations from this challenge can be discovered easily.
      </p>
      <div className='App-footer'>
        The code for this website is available on <a href='https://github.com/SabinT/7daysofcode'>github</a>, maintained by <a href="https://lumic.space">Sabin T</a>.
      </div>
    </div>
  );
}

export default App;
