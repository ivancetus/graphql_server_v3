import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  try {
    // Delete all 'User' and 'Message' records
    await prisma.message.deleteMany({})
    console.log('Deleted records in message table')

    await prisma.user.deleteMany({})
    console.log('Deleted records in user table')

    // await prisma.$queryRaw`ALTER TABLE Message AUTO_INCREMENT = 1`
    // console.log('reset message auto increment to 1')
    //
    // await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`
    // console.log('reset user auto increment to 1')

    // (Re)create dummy 'User' and 'Message' records
    await prisma.user.create({
      data: {
        name: "Jack",
        messages: {
          create: [
            {
              body: "A Note for Jack."
            },
            {
              body: "Another Note for Jack."
            },
          ],
        },
      },
    })
    console.log('user Jack created')

    await prisma.user.create({
      data: {
        name: "Ryan",
        messages: {
          create: [
            {
              body: "A Note for Ryan."
            },
            {
              body: "Another Note for Ryan."
            },
          ],
        },
      },
    })
    console.log('user Ryan created')

    await prisma.user.create({
      data: {
        name: "Adam",
        messages: {
          create: [
            {
              body: "A Note for Adam."
            },
            {
              body: "Another Note for Adam."
            },
          ],
        },
      },
    })
    console.log('user Adam created')

  } catch (e){
    console.log(e)
    process.exit(1)

  } finally {
    await prisma.$disconnect()
  }
}

main()