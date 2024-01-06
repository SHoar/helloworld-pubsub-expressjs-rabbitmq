import amqp, { Channel, Connection } from 'amqplib';

const queue: string = 'Hello';

async function start() {
    let channel: Channel, connection: Connection;

    connection = await amqp.connect('amqp://rabbitmq:5672');
    channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: false });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue)
    channel.consume(queue, (msg) => {
        if(msg !== null){
            console.log(" [x] Received %s", msg?.content.toString());
        }
    }, { noAck: true });
}

start().catch(console.error);