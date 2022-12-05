const app = require("./app.js");
require("dotenv").config();

// Allows access to .env file and its vars;

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`WellBell LIVE on PORT ${PORT}`);
});

// Listens for requests on whatever the PORT is that we specify - turns our server on.
