import express from 'express'

const app = express()

const port = 3000;

app.get('/', (res, resp) => {
    resp.send('hello');
})
app.get('/api/jokes', (res, resp) => {
    const jokes = [
        {
            id: 1,
            title: 'jokes',
            content: 'joke01',
        },
        {
            id: 2,
            title: 'another_joke',
            content: 'joke01',
        }

    ]
    resp.send(jokes);
})



app.listen(port, () => {
    console.log(`port is running at ${port}`);
    
})