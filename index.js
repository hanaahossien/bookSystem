import express from 'express'
import { bookrouter } from './src/book/book.router.js'
import { connectdb } from './db/connectionDb.js'
import { authorrouter } from './src/author/author.router.js'
const app = express()
const port = 5000
connectdb()

app.use(express.json())

app.use("/book",bookrouter)
app.use("/author",authorrouter)

app.use((err,req,res,next)=>{
res.status(err["cause"]).json({"error" :"global error handler","err": err.message})
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))