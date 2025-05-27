import express from 'express'

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
}
)
app.post('/data', (req, res) => {
    const data = req.body
    res.json({
        message: 'Data received successfully',
        data: data
    })
})
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
