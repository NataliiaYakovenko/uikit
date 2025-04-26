import "./App.css";
import Icons from "./components/Icons/Icons";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";

function App() {
  return (
    <div>
      <h3>Icons</h3>
      <Icons name="plus-outline" />
      <Icons name="plus" width={24} height={24} fill="blue" />
      <Icons name="plus-square" />
      <Icons name="radio-chosen" />
      <Icons name="radio-not-chosen" />
      <Icons name="checkbox-chosen" />
      <Icons name="checkbox-not-chosen" />

      <h3>Radio</h3>
      <RadioGroup />

      <h3>Checkbox</h3>
      <CheckboxGroup />
    </div>
  );
}

export default App;
