/ src/pages/api/saveCategories.js
import { getSession } from 'next-auth/react'; // Assuming you're using NextAuth for user authentication
import prisma from '@/app/lib/prisma'; // Adjust the import path according to your project structure

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Assuming you have a user authentication mechanism to get the user's ID
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const userId = session.user.id; // Adjust according to how you store this in the session

  const { categories } = req.body;

  try {
    // First, remove existing categories associated with the user
    await prisma.user.update({
      where: { id: userId },
      data: { categories: { set: [] } }, // This disassociates existing categories
    });

    // Then, link the selected categories with the user
    await prisma.user.update({
      where: { id: userId },
      data: {
        categories: {
          connect: categories.map((categoryId) => ({ id: categoryId })),
        },
      },
    });

    res.json({ success: true, message: 'Categories updated successfully' });
  } catch (error) {
    console.error('Failed to update categories:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}