import { Component } from "react";
import "./App.css";

const Header = () => {
  return <h2>Hello world!</h2>;
};

class Field extends Component {
  render() {
    const holder = "Enter here";
    const styledField = {
      width: "300px",
    };
    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

function Button() {
  const text = "Log in";
  const res = () => {
    return "Log in";
  };
  return <button>{res()}</button>;
}
function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Button />
    </div>
  );
}

export { Header };
export default App;
