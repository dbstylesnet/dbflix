const { MongoClient } = require('mongodb')

const url =
  process.env.MONGO_URL ||
  process.env.MONGODB_URI ||
  'mongodb://localhost:27017/'

const dbName = process.env.MONGO_DB || 'dbflix'

const seedMovies = [
  { id: 'avengers', title: 'Avengers', description: 'Earth’s mightiest heroes assemble.' },
  { id: 'avatar', title: 'Avatar', description: 'A human learns to live on Pandora.' },
  { id: 'band', title: 'Band of Brothers', description: 'Easy Company in WWII Europe.' },
  { id: 'ender', title: "Ender's Game", description: 'A gifted child trains for war.' },
  { id: 'warcraft', title: 'Warcraft', description: 'Humans and orcs clash in Azeroth.' },
  { id: 'xmen', title: 'X-Men', description: 'Mutants fight for survival and acceptance.' }
]

async function main() {
  const client = new MongoClient(url)
  await client.connect()
  const db = client.db(dbName)
  const collection = db.collection('movies')

  await collection.createIndex({ id: 1 }, { unique: true })

  for (const movie of seedMovies) {
    await collection.updateOne({ id: movie.id }, { $set: movie }, { upsert: true })
  }

  const count = await collection.countDocuments()
  console.log(`Seeded movies. Collection now has ${count} documents.`)
  await client.close()
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
