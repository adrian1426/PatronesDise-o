const https = require('https');

//facade
const get = url => new Promise((resolve, reject) => {
  const urlValues = url.split('/');

  const options = {
    hostname: urlValues[0],
    path: `/${urlValues[1]}`,
    method: 'GET'
  };

  const req = https.request(options, res => {
    res.setEncoding('utf8');
    let body = '';

    res.on('data', d => {
      body += d;
    });

    res.on('end', d => {
      const parsed = JSON.parse(body);
      resolve(parsed);
    });
  });

  req.on('error', e => {
    reject(e);
  });

  req.end();
});

get('jsonplaceholder.typicode.com/users')
  .then(res => console.log(res))
  .catch(err => console.log(err));
