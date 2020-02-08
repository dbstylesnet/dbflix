const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3002

app.get('/rest/movies', (req, res) => res.send(
    [   
        {id: 'avengers', title: 'Avengers', description: 'The grave course of events set in motion by Thanos, that wiped out half the universe and fractured the Avengers ranks, compels the remaining Avengers to take one final stand in Marvel Studios\' grand conclusion to twenty-two films - Avengers: Endgame.'},
        {id: 'avatar', title: 'Avatar', description: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully, a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na\'vi woman. As a bond with her grows, he is drawn into a battle for the survival of her world.'},
        {id: 'band', title: 'Band of Brothers', description: 'The story of Easy Company, 506th Regiment of the 101st Airborne Division, U.S. Army. Based on interviews with survivors of Easy Company, as well as soldiers\' journals and letters, this 10-part series chronicles the experiences of these young men who knew extraordinary bravery and extraordinary fear.'},
        {id: 'ender', title: 'Ender\'s Game', description: 'In the near future, a hostile alien race has attacked Earth. In preparation for the next attack, the highly esteemed Colonel Graff and the International Military seek to find a future leader who can save the human race. Ender Wiggin, a shy but strategically brilliant young mind, is recruited to join the elite, where he\'s trained to lead his fellow soldiers into an epic battle that will determine the future of Earth.'},
        {id: 'warcraft', title: 'Warcraft', description: 'Humans and orcs clash in this feature-film adaptation of the popular fantasy video-game series. After realizing that their home is becoming uninhabitable, a race of orcs travel to the land of Azeroth. There, they encounter the realm\'s human denizens, who fight back against the invaders. In time, an orc warrior (Toby Kebbell) forges an alliance with a group of humans in order to overthrow his race\'s corrupt leader (Daniel Wu) and bring peace to the land.'},
        {id: 'xmen', title: 'X-Men', description: 'Several months have passed since the X-Men defeated Magneto and imprisoned him in a seemingly impregnable plastic chamber. One day, a mutant by the name of Nightcrawler infiltrates the White House and attempts to assassinate the President, setting off a chain reaction of anti-mutant measures by the government. Meanwhile, Logan is trying to discover his past.'},
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