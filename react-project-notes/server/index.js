import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('home page');
})


const server = app.listen(8080, () => {
    console.log("start port 8080-1");
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated')
    })
})

// module.exports = app;