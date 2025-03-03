import myImage from './assets/image.jpeg';  // Assuming your image is imported correctly
import Navbar from './components/Navbar.tsx';

// Assuming Navbar is correctly imported (make sure Navbar is updated with anchor tags)
function App() {
  return (
    <div>
      <Navbar /> {/* This component should have links with href="#section-id" */}
      
      {/* Home Section */}
      <section id="home">
        <div className="image">
          <img src={myImage} alt="A description of the image" />
        </div>
        <div className="text">
          <h1>My works</h1>
          <div className="Projects">
            <div className="Project">
              <h2>Music Trend Analyser</h2>
              <p>Music Trend Analyser is an application that analyses the world's music trends.</p>
            </div>
            <div className="Project">
              <h2>Project 2</h2>
              <p>Project 2 description</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about">
        <h2>About</h2>
        <p>This is the About section.</p>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>Services</h2>
        <p>This is the Services section.</p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>This is the Contact section.</p>
      </section>
    </div>
  );
}

export default App;