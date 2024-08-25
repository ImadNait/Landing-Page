import "../App.css";
import VanillaTilt from "vanilla-tilt";
export default function Aboutus() {
  VanillaTilt.init(document.querySelectorAll(".aboutWe"), {
    max: 30,
    speed: 500,
    scale: 1.05,
  });

  VanillaTilt.init(document.querySelectorAll(".aboutWe"));
  return (
    <div id="about">
      <div className="aboutWe">
        <div>
          <h1 className="aboutUs">Who are we?</h1>
          <br />
        </div>
        <p>
          We are a web service who offers building, designing and hosting
          customizable websites without any single line of code, thanks to our
          advanced Web Building tools. We offer many services with various
          features to allow users build their dream websites, design and develop
          them. We aim to simplify the work for multiple companies, buisnesses,
          individuals,and startups and help them improve their work instead of
          wasting time searching for web developers.{" "}
        </p>
      </div>
    </div>
  );
}
