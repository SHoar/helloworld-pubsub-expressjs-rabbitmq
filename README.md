# helloworld-pubsub-expressjs-rabbitmq
This is a containerized pub-sub starter project that demonstrates communication with a pub/sub event-driven architecture using node.js, express.js, and RabbitMQ

## Requirements
You must have Docker, Docker-Compose, and/or Node.js 20.10.0 installed on your system.
If you would like to contribute, the code was written in typescript.

You may compile the typescript code with `npx tsc` in the consumer-svc and producer-svc folders and have the javaScript built to their respective `./build/` folders.


## Get up and Running!

```sh
docker-compose up --build
```

This will startup a RabbitMQ container on ports 5672 and set the admin UI on port 15672.  Access the RabbitMQ Admin UI from http://localhost:15672 once the RabbitMQ log has started running.

To test the Producer service, goto: http://localhost:3000/send .

If this producer is communicating properly with the RabbitMQ, you should see these messages:

```sh
...
helloworld-pubsub-expressjs-rabbitmq-producer-1  | Producer service listening at http://localhost:3000
helloworld-pubsub-expressjs-rabbitmq-producer-1  |  [x] Sent Hello World
...
```

You can also check the logs and search for them with this command:

```sh
docker-compose logs producer
```

If the consumer service is running successfully, you should see this message while the consumer service is waiting:
```sh
helloworld-pubsub-expressjs-rabbitmq-consumer-1  |  [*] Waiting for messages in Hello. To exit press CTRL+C
```
and if the consumer service successfully receiveds the messages,:
```sh
helloworld-pubsub-expressjs-rabbitmq-consumer-1  |  [x] Received Hello World
```

To do a grep on the consumer service logs,
```sh
docker-compose logs consumer
```
