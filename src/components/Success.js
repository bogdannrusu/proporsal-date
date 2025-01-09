import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
        Ești prințesa mea preferată și îți mulțumesc că ai acceptat să mergi la un date cu mine.
    </p>
    <p className="App-text-success">
        Sunt foarte bucuros că avem această zi pentru a fi împreună.
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">11/01/2025 & 12/01/2025</p>
  </div>
);

export default Success;
