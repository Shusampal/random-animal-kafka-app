const { Kafka } = require('kafkajs');
const Chance = require('chance');

var chance = new Chance();

const kafka = new Kafka({
    clientId: 'my-consumer',
    brokers: ['localhost:9092'],
});

const topic = 'random_animals';
const consumer = kafka.consumer({ groupId: 'my-group' });

const run = async () => {
    try {
        await consumer.connect();
        await consumer.subscribe({ topic });
        await consumer.run({
            eachMessage: async ({ message }) => {
                console.log({
                    value: message.value.toString(),
                })
            },
        })
    } catch (error) {
        console.log(error.message);
    }

}

run();