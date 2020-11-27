const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/auth', (req, res) => {
    res.json({
        message: 'Welcome to the API',

    })
})

app.post('/auth/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: 'Post created...',
                authData
            })
        }
    });
});

app.post('/auth/signin', (req, res) => {
    // user

    const user = {
       id: 1,
       username: 'brad',
       email: 'test@test.com'
    }
    jwt.sign({user}, { expiresIn: '30s'}, (err, token) => {
        res.json({
            token
        })
    });
})


// Format of TOKEN
// Authorization: Bearer <access_token>

// verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');

        const bearerToken = bearer[1];

        req.token = bearerToken;

        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}
const PORT = 5000;


app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));