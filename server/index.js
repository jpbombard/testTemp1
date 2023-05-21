const port = process.env.PORT || 3000;
const app = require('./app');
const {db} = require('./db')


const init = async () => {
  try {
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }catch(err) {
    console.log(err)
  }
}

init()
