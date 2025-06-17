import express, { Application } from 'express';
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/hello', (req, res) => {
    res.status(200).json({message: "hello world"});
});
app.listen(3000, () => {
    console.log('Server is running on port 3000...');
})