import Icons from "./components/Icons/Icons";
import RadioGroup from "./components/RadioGroup/RadioGroup";
import './App.css'


function App() {
  return (
    <div>
    <h3>Icons</h3>
     <Icons name='plus-outline'/>
     <Icons name='plus' width={24} height={24} fill="blue"/>
     <Icons name='plus-square'/>
     <Icons name='radio-chosen'/>
     <Icons name='radio-not-chosen'/>

     <h3>Radio</h3>
     <RadioGroup/>

    </div>
  );
}

export default App;
