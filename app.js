let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path');


//USES
app.use(express.static('public'))

app.listen(port, () => {
    console.log('listening on port:', port);
});//end of listen

app.get('/', (req, res) => {
    console.log('Main url hit');
    res.sendFile(path.resolve('views/index.html'))
})
