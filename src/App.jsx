// import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", { class: "App" }, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Skippy",
//       breed: "Sherpherd",
//     }),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Luna",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Luna",
//       breed: "Havanese",
//     }),
//   ]);
// };

const App = () => {
  return (
    <>
      <h1>Adopt me!</h1>
      <Pet name="Skippy" animal="Dog" breed="Sherpherd" />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
