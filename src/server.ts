import Express from 'express';


const app = Express();
app.use(Express.json())

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT =5000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
 });