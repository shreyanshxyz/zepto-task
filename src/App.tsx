import Chip from "./components/Chip/Chip";
import InputBox from "./components/Input/InputBox";

function App() {
  return (
    <div className="text-center flex flex-col">
      <h1 className="text-3xl pt-10 text-blue-800">Pick Users</h1>
      <InputBox />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
      <Chip />
    </div>
  );
}

export default App;
