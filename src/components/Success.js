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
      Ты моя любимая принцесса, и спасибо, что согласилась пойти со мной на свидание.
    </p>
    <p className="App-text-success">
      Я очень рад, что у нас есть этот день, чтобы побыть вместе.
    </p>
    {/* Displaying the date of the special moment */}
    {/* <p className="App-text-date">12/23/2023</p> */}
  </div>
);

export default Success;
