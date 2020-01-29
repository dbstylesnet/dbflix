const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3002

app.get('/rest/movies', (req, res) => res.send(
    [   
        {id: 'avengers', title: 'Avengers', description: 'Movie about Avengers. Movie about Avengers. Movie about Avengers'},
        {id: 'avatar', title: 'Avatar', description: 'Movie about Avatar. Movie about Avatar. Movie about Avatar. Movie about Avatar.'},
        {id: 'band', title: 'Band of Brothers', description: 'Movie about Banf od brothers. Movie about Banf od brothers. Movie about Banf od brothers '},
        {id: 'ender', title: 'Ender\'s Game', description: 'Movie about Ender. Movie about Ender. Movie about Ender. Movie about Ender.'},
        {id: 'warcraft', title: 'Warcraft', description: 'Movie about Warcraft. Movie about Warcraft. Movie about Warcraft. Movie about Warcraft.'},
        {id: 'xmen', title: 'X-Men', description: 'Movie about X-Men. Movie about X-Men. Movie about X-Men. Movie about X-Men. Movie about X-Men'},
    ]
))
    
app.get('/test', (req, res) => res.send('routeTest 2'))
    
// Serve any static files
app.use(express.static(path.join(__dirname, '../../build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
        
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
            

// app.use(favicon(__dirname + '/build/favicon.ico'))
// app.use(express.static(__dirname))
// app.use(express.static(path.join(__dirname, 'build')))
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join('public')))
// app.get('/ping', function(req, res) {
//     return res.send('pong')
// })

// app.use(express.static(path.join(__dirname, '/backend')))


// app.get('*', function(req, res) {
    //     res.sendFile(path.join(__dirname,'/frontend/', 'index.html'))
    // })
    
    // const port = process.env.PORT || 3003
    
    
    // app.use(express.static('public'));
    // app.get('*', function(req, res) {
        //     res.sendFile(__dirname + '/build/index.html');
        // });
        
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))