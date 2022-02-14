# kafka project which will produce random animals and consumer can read messages
Topic named random_animals is created .
Producer will push random animal name to that topic.

## Flow of Project
1. Topic is created.
2. Producer produces / pushes message in fixed interval to this topic.
3. Consumer can read these pushed message.

## File structure
1. topic.js - File which creates the kafka topic.
2. producer.js - File which creates the producer and which will then periodically push message.
3. consumer.js - File which reads the pushed message.

## Dependencies
1. kafka.js
2. chance

## How to start
Please run the scripts as below in same order as written below
1. npm run topic
2. npm run producer
3. npm run consumer