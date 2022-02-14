const { Kafka } = require('kafkajs');
const Chance = require('chance');

var chance = new Chance();

const kafka = new Kafka({
    clientId: 'my-producer',
    brokers: ['localhost:9092'],
});

const topic = 'random_animals';
const producer = kafka.producer();

const run = async () => {
    try {
        await producer.connect();
        const produceMessage = () => {
            producer.send({
                topic,
                messages: [
                    { value: chance.animal() }
                ],
            })
        }
        setInterval(produceMessage, 1000);
    } catch (error) {
        console.log(error.message);
    }

}

run();