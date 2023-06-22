const app = require("./app");
const mongoose = require("mongoose");
const { DB_HOST, PORT } = process.env;
// name: Ewm
//zwynMBY5KwYQp80R
mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server listening on port 3001");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
