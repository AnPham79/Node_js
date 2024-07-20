const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('index', { users });
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
};

exports.createUser = async (req, res) => {
    try {
        const { user_name, email, password } = req.body;
        await User.create({
            user_name: user_name,
            email: email,
            password: password
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
};
