module.exports = {
    getName: function(req, res, next){
        res.json(user.name);
    },
    createUser: function(req, res, next){
        req.body.user
        {
            username: 'User1',
            password: 'hunter1234'
        }
    }
}

app.get('/name', mainCtrl.getName);
app.post('/user', mainCtrl.createUser);
app.delete('/user/:user;', mainCtrl.deleteUser);

req.params.createUser;
