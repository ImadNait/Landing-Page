import "../App.css";
export default function Header() {
  return (
    <div id="header" className="header">
      <header>
        <a href="#header">
          <img src="/img/logo-no-background.svg" alt="" className="imgg" />
        </a>
        <div className="menuCont">
          <ul>
            <li>
              {" "}
              <a href="#header" className="menuB">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menuB">
                About us
              </a>
            </li>
            <li>
              {" "}
              <a href="#feature" className="menuB">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="menuB">
                Contact us
              </a>
            </li>
          </ul>

          <br />
        </div>
      </header>
    </div>
  );
}
