import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
    console.log('Redis not running');
});

await client.connect();

await client.set('coin', 'Bitcoin');

const value = await client.get('key');

console.log(value);