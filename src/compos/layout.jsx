import "../App.css";
import React from "react";
import Typed from "typed.js";
export default function Layo() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web It Up"],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="layout">
      <img
        src="product/public/img/isometric-laptop-with-web-design-application.gif"
        alt=""
        className="mainImg"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="textt">
        <span className="holder">
          <span ref={el}></span>
        </span>
        <h3>Make your web dreams happen today!</h3>
        <ul>
          <li>Create,</li>
          <br />
          <br />
          <li>innovate,</li>
          <br />
          <br />
          <li>build,</li>
          <br />
          <br />
          <li>design</li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <li>Make it all happen at once!</li>
        </ul>
      </div>
    </div>
  );
}
