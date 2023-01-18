const Kafka = require('kafkajs').Kafka

const streamName = 'stream_name'
const brokers = ['localhost:9092']

async function main() {
  try {
    const kafka = new Kafka({groupId: streamName, brokers})
    const producer = kafka.producer()

    // connection
    console.log('⏳ Connecting...')
    await producer.connect()
    console.log('✅ Connected.')

    const result = await producer.send({
      topic: 'topic_name',
      messages: [{value: JSON.stringify()}],
    })

    console.log('✅ Message Send!', JSON.stringify(result))
    producer.disconnect()
  } catch (error) {
    console.log('error: ', error)
  } finally {
    process.exit(0)
  }
}

main()
