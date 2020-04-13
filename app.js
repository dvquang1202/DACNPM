const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello from nodejs express api'
    })
})


app.use('/api/users', require('./routes/user.route'));

app.use('/api/auth', require('./routes/auth.route'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API is running at http://localhost:${PORT}`);
})