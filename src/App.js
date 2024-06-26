import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='first-row'>
        <div className='intro-container'>
          <img className='personal-photo' src='self-image.jpg' alt='personal photo'></img>
          <h2>Ryan Carney</h2>
          <p>Upcoming 4th year Computer Science student at UCLA</p>
        </div>
        <div className='links-container'>
          <h2 className='links-header'>My Links</h2>
          <a href='https://github.com/ryancarneyy'>
            <div className='link-container'>
              <p>Ryan Carney's Github</p>
            </div>
            <div className='link-container'>
              <p>Ryan Carney's Github</p>
            </div>
          </a>
        </div>
      </div>
      <div className='second-row'>
        <div className='about-me-container'>
          <h2>About Me</h2>
          <p>Hi, I am a computer science student</p>
        </div>
        <div className='experience-container'>
          <h2>My Experience</h2>
          <ul>
            <li>
              <h4>Basic Training Mentor</h4>
              <p>Taught Web Developnment using React to some outstanding students</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
