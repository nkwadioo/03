import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import face from './assets/images/01 image.jpg'
import moon from './assets/images/moon.png'
import day from './assets/images/sun.png'

function App() {
  return (
    <div className="app">
      <input type="checkbox" name="themeToggle" id="themeToggle" />
      
      {/* <img src={day} alt="" className='toggle' /> */}
      <label htmlFor="themeToggle" className='switch'>
        <img src={moon} alt="dark theme" />
        <img src={day} alt="light theme" />
        <span className='slider'></span>
      </label>
      <div className="container">
        <img className='profile' src={face} alt="user profile" />
        <section >
          <Header />
          <Main />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
