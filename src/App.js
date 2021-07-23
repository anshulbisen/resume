import Page from "./components/Page/Page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IconContext } from "react-icons";
import { ACCENT_COLOR } from "./common/constants/colors";

import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyEmailPassword, {
  Google,
  ThirdPartyEmailPasswordAuth,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
  appInfo: {
    appName: "Anshul Bisen Resume",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Google.init()],
      },
    }),
    Session.init(),
  ],
});

function App() {
  return (
    <Router>
      <Switch>
        {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
        <Route path="/">
          <ThirdPartyEmailPasswordAuth>
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
          </ThirdPartyEmailPasswordAuth>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
