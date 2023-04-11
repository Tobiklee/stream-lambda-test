// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

test('Snapshot', async () => {
  const response = await axios.get('https://ekibq7o4tn4467qmz77soysdva0xnjap.lambda-url.eu-central-1.on.aws/', {
    responseType: 'stream',
  });
  console.log(response);
});