import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <div className="container">
        <h2>Terms & Confition</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          repudiandae perspiciatis ipsam, architecto tempora hic error molestias
          ut nulla, porro minus debitis deleniti doloribus expedita cupiditate
          possimus aliquid mollitia ratione.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          doloremque laboriosam, atque quidem commodi veritatis amet. Suscipit,
          molestiae, maxime a illum nam, praesentium ad consequuntur autem
          obcaecati dignissimos ut! Ab.
        </p>
        <h4>Done? Lets get back to <Link to='/register'>Register</Link></h4>
      </div>
    </div>
  );
};

export default Terms;
