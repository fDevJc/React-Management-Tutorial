const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: 'yang',
      birthday: '900210',
      gender: 'M',
      job: 'programmer',
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: 'ji',
      birthday: '900212',
      gender: 'M',
      job: 'designer',
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: 'cheol',
      birthday: '900213',
      gender: 'M',
      job: 'pl',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on Port:${port}`);
});
