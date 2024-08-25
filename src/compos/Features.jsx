import "../App.css";
import VanillaTilt from "vanilla-tilt";
export default function Features() {
  VanillaTilt.init(document.querySelectorAll(".childbox"), {
    max: 30,
    speed: 500,
    scale: 1.05,
  });

  VanillaTilt.init(document.querySelectorAll(".childbox"));

  return (
    <div className="features" id="feature">
      <h1>What we have?</h1>
      <div className="boxes">
        <div className="childbox">
          <h2>Design</h2>
          <img
            src="/img/isometric-lettering-ux-slash-ui-in-laptop-with-web-design-application-text.png"
            alt=""
            className="boximgs"
          />
          <p>
            Showcase your creativity and unleash your inner design superpowers.
            Choose your tools, brainstorm ideas & solutions and start the work!
          </p>
        </div>
        <div className="childbox">
          <h2>Interactivity</h2>
          <img
            src="/img/isometric-computer-monitor-with-programming-code-on-screen.png"
            alt=""
            className="boximgs"
          />
          <p>
            Control your webpage components, add responsivity to them exactly
            how you're planning to. We have plenty of tools that makes your
            imagination goes beyond the infinity.
          </p>
        </div>
        <div className="childbox">
          <h2>System management</h2>
          <img
            src="/img/isometric-cloud-computing-and-virtualization-technology.png"
            alt=""
            className="boximgs"
          />
          <p>
            This is for complex projects which needs complex backend operations,
            we offer a special platform to explain all back-end features.
          </p>
        </div>
        <div className="childbox">
          <h2>Our Offers</h2>
          <img
            src="/img/isometric-financial-statistics-and-currency-analytics.png"
            alt=""
            className="boximgs"
          />
          <p>Coming soon</p>
        </div>
      </div>
    </div>
  );
}
