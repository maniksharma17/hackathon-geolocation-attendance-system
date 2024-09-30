import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import userRouter from "./routes/user/index.js"
import adminRouter from "./routes/admin/index.js"

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())


app.use('/user', userRouter)
app.use('/admin', adminRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
  console.log(`Listening on PORT ${PORT}`)
})
export default app