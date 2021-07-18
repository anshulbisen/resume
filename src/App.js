import Page from "./components/Page/Page";
import { IconContext } from "react-icons";
import { ACCENT_COLOR } from "./common/constants/colors";

function App() {
  return (
    <div>
      <IconContext.Provider
        value={{
          color: ACCENT_COLOR,
          className: "global-class-name",
        }}
      >
        <Page />
      </IconContext.Provider>
    </div>
  );
}

export default App;
