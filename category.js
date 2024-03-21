import { faker } from "@faker-js/faker";
import {prisma} from "./src/app/lib/prisma";

async function category() {
  try {
    for (let i = 0; i < 100; i++) {
      await prisma.Category.create({
        data: {
            categoryname: faker.commerce.department(),
          
        },
      });
    }
    console.log('Categories entered successfully!');
  } catch (error) {
    console.error('Something went wrong:', error);
  } finally {
    await prisma.$disconnect();
  }
}

category();