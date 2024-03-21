import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(request) {
  try {
    // Fetch all categories from the database
    const categories = await prisma.category.findMany();

    // Return the list of categories
    return NextResponse.json({ success: true, categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ success: false, message: 'Error fetching categories' }, { status: 500 });
  }
}
