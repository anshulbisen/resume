const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();
const supertokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");
const ThirdPartyEmailPassword = require("supertokens-node/recipe/thirdpartyemailpassword");

const apiPort = process.env.REACT_APP_API_PORT || 3001;
const apiDomain =
  process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
const websiteDomain =
  process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;

supertokens.init({
  supertokens: {
    connectionURI:
      "https://4d0ffa01ebb611ebbdf60f4974aa0e40-us-east-1.aws.supertokens.io:3572",
    apiKey: "ce4z7FV4cPUKNqAbVw-OEUNWfV4CV5",
  },
  appInfo: {
    appName: "Anshul Bisen Resume",
    apiDomain,
    websiteDomain,
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        ThirdPartyEmailPassword.Google({
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          clientId: process.env.GOOGLE_CLIENT_ID,
        }),
      ],
    }),
    Session.init(),
  ],
});

const app = express();

app.use(
  cors({
    origin: websiteDomain,
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// custom API that requires session verification
app.get("/sessioninfo", Session.verifySession(), async (req, res) => {
  const session = req.session;
  res.send({
    sessionHandle: session.getHandle(),
    userId: session.getUserId(),
    jwtPayload: session.getJWTPayload(),
    sessionData: await session.getSessionData(),
  });
});

app.use(supertokens.middleware());
app.use(supertokens.errorHandler());

app.use((err, req, res, next) => {
  res.status(500).send("Internal error: " + err.message);
});

app.listen(apiPort, () =>
  console.log(`API Server listening on port ${apiPort}`)
);
