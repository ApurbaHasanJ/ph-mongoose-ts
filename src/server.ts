const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })