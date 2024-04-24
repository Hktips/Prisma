
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

//  select * from question offset 0 limit 10;
//   select * from question offset 10 limit 10;
//  select * from question offset 20 limit 10;

async function main() {
  let res = await prisma.post.findMany({
    take: 2, // set limit how many post show and take at a time like in a page
    skip: 2   //offset how many skip at time like first 0 to skip 10 and 10 to skip(offset) 20
  })
    console.log(res);
    
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })