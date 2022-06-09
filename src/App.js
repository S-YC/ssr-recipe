import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import BluePage from "./page/BluePage";
import RedPage from "./page/RedPage";

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
}

export default App;
