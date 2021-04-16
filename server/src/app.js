const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req,res,next) => {
  const {email} = req.query;
  const profiles = [
    {
      name: 'Rinneya',
      email:'rinneya@gmail.com',
      age:'22'
    },
    {
      name: 'Zyoneria',
      email:'zyoneria@gmail.com',
      age:'22'
    }
  ];
  const profile = profiles.find(p => p.email == email);
  if(!profile > 0) return res.status(404).json({message:'User not exits'})
  return res.status(200).send({profile})
});

app.post('/', (req, res, next) =>{
  console.log(`req.body`, req.body);
  res.status(201).json({message:'Log in successfull'})
});
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))