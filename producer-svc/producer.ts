import * as amqp from 'amqplib';
import express, {Express} from 'express';
import { Channel, Connection } from 'amqplib';

const app: Express = express();
const port = 3000;

const queue = 'hello';
let channel: Channel, connection: Connection;

async function start() {
  connection = await amqp.connect('amqp://rabbitmq:5672');
  channel = await connection.createChannel();
  await channel.assertQueue(queue, {
    durable: false
  });

  app.get('/send', async (req, res) => {
    const msg: string = 'Hello World';
    await channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
    res.send("Message sent: " + msg);
  });

  app.listen(port, () => {
    console.log(`Producer service listening at http://localhost:${port}`)
  });
}

start().catch(console.error);