const User = require("../modals/User");

//Adding New User
exports.insertUser = async (req, res) => {
  const { name, email, age, mobile, work, address, desc } = req.body;
  if (!name || !email || !age || !mobile || !work || !address || !desc) {
    res.status(404).json("Please fill the Data");
  }
  try {
    const preuser = await User.findOne({ email: email });
    console.log(preuser);
    if (preuser) {
      res.status(404).json("This user is already present");
    } else {
      const adduser = new User({name,email,age,mobile,work,address,desc,
      });
      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
};
//GET ALL DATA
exports.getData = async (req, res) => {
  try {
    const userdata = await User.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
};
//GET individual user
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(req.params);
    const individualdata = await User.findById({ _id: id });
    res.json(individualdata);
    console.log(individualdata);
  } catch (error) {
    res.status(422).json(error);
  }
};
//update user data
exports.updateById = async (req, res) => {
  const user = req.body; //put api se dataObj
  const editUser = new User(user); //chck model valid obj
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.json(editUser);
  } catch (error) {
    res.status(422).json(error);
  }
};

exports.deleteById = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    const deleteuser = await User.deleteOne({ _id: id });
    res.json(deleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
};

exports.searchUser = async (req, res) => {
  console.log(req.params.key);

  const data = await User.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  res.send(data);
};

// updateById

//     const user =req.body //put api se dataObj
//     const editUser= new User(user); //chck model valid obj
// try {
//     await User.updateOne({_id:req.params.id},editUser)
//     res.json(editUser)
// } catch (error) {

// }

// console.log(req.body,req.params.id)
// try {
//     const query = {};
//     for (i in req.body) {
//       // console.log('for in loop',req.body[i],i)
//       if (req.body[i]) {
//         query[i] = req.body[i];
//       }
//     }
//     const data= await User.updateOne({_id:req.params.id},{$set:query})

//     res.json({msg:"Record get by id", data:data})

// } catch (error) {

// }
