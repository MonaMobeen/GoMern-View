const userSchema = new Schema({
   firstName: String,
   lastName: String,
   email: String,
   password: String,
   permissionLevel: Number
});

const userModel = mongoose.model('Users', userSchema);
app.post('/users', [
   UsersController.insert
]);

exports.insert = (req, res) => {
   let salt = crypto.randomBytes(16).toString('base64');
   let hash = crypto.createHmac('sha512',salt)
                                    .update(req.body.password)
                                    .digest("base64");
   req.body.password = salt + "$" + hash;
   req.body.permissionLevel = 1;
   UserModel.createUser(req.body)
       .then((result) => {
           res.status(201).send({id: result._id});
       });
};
//    req.body.password = salt + "$" + hash;
//    req.body.permissionLevel = 1;
//    UserModel.createUser(req.body)
//        .then((result) => {
//            res.status(201).send({id: result._id});
//        });
// };
