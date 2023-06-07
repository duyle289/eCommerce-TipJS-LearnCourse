const app = require("./src/app");



const port = 2809



const server = app.listen(port, () => {
    console.log(`server listening in port ${port}`)
});