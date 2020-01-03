const express = require('express')
const app = express()
const port = 3001

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



app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// {id: 'avengers', imageSrc: avengers, title: 'Avengers', description: 'Movie about Avengers. Movie about Avengers. Movie about Avengers'},
// {id: 'avatar', imageSrc: avatar, title: 'Avatar', description: 'Movie about Avatar. Movie about Avatar. Movie about Avatar. Movie about Avatar.'},
// {id: 'band', imageSrc: band, title: 'Band of Brothers', description: 'Movie about Banf od brothers. Movie about Banf od brothers. Movie about Banf od brothers '},
// {id: 'ender', imageSrc: ender, title: 'Ender\'s Game', description: 'Movie about Ender. Movie about Ender. Movie about Ender. Movie about Ender.'},
// {id: 'warcraft', imageSrc: warcraft, title: 'Warcraft', description: 'Movie about Warcraft. Movie about Warcraft. Movie about Warcraft. Movie about Warcraft.'},
// {id: 'xmen', imageSrc: xmen, title: 'X-Men', description: 'Movie about X-Men. Movie about X-Men. Movie about X-Men. Movie about X-Men. Movie about X-Men'},
