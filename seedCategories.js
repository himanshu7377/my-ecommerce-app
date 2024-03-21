const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedCategories() {
  try {
    const categories = [
      // { name: 'Fashion Apparel' },
      // { name: 'Home Decor2' },
      // { name: 'Outdoor Gear' },
      { name: 'Electronics Gadgets' },
      { name: 'Fitness Equipment' },
      { name: 'Office Supplies' },
      { name: 'Kitchen Utensils' },
      { name: 'DIY Supplies' },
      { name: 'Gaming Accessories' },
      { name: 'Baby Products' },
      { name: 'Party Decorations' },
      { name: 'Craft Materials' },
      { name: 'Photography Equipment' },
      { name: 'Travel Accessories' },
      { name: 'Musical Instruments' },
      { name: 'Art Equipment' },
      { name: 'Healthcare Products' },
      { name: 'Automotive Accessories' },
      { name: 'Pet Supplies' },
      { name: 'Smartphone Accessories' }
      // Add more categories as needed
    ];

    for (const category of categories) {
      await prisma.category.create({
        data: category,
      });
    }

    console.log('Categories seeded successfully!');
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedCategories();
