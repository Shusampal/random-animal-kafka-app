const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-topic',
    brokers: ['localhost:9092'],
});

const admin = kafka.admin();

const topic = 'random_animals';

const run = async () => {
    try {
        await admin.connect();
        await admin.createTopics({
            topics: [{
                topic,
                numPartitions:1
            }]
        })
        await admin.disconnect()
    } catch (error) {
        console.log(error.message);
    }

}

run();