import { WpImages } from "./molecules/Molecules";

const { Global } = require("./helpers/GlobalStyles");
const { default: ListCards } = require("./listCards/ListCards");



function App() {
  return (
    <>
    <Global/>
    <ListCards/>
    </>
  );
}

export default App;
