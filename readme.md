# kafka project which will produce random animals and consumer can read messages
Topic named random_animals is created .
Producer will push random animal name to that topic.

## Flow of Project
Topic is created.
Producer produces / pushes message in fixed interval to this topic.
Consumer can read these pushed message.

## File structure
topic.js - File which creates the kafka topic
producer.js - File which creates the producer and which will then periodically push message
consumer.js - File which reads the pushed message

## Dependencies
kafka.js
chance

## How to start
Please run the scripts as below in same order as written below
1. npm run topic
2. npm run producer
3. npm run consumer