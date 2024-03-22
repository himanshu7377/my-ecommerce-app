import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/app/lib/prisma';

export async function GET(request) {
  try {
    // Fetch all users from the database
    const allUsers = await prisma.user.findMany();

    // Retrieve the authentication token from the database (assuming it's stored as a field in the user model)
    // const { authToken } = getUserAuthTokenFromDatabase(); // Implement this function to retrieve the token
    const authToken =localStorage.getItem('token')
    

    // Check if the authentication token is present
    if (!authToken) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    // Decode the authentication token
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);

    // Find the user based on the decoded token
    const user = allUsers.find((u) => u.id === decodedToken.userId);

    // If user not found, return error
    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    // Return the user's name
    return NextResponse.json({ success: true, userName: user.name });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

function getUserAuthTokenFromDatabase() {
  // Implement this function to retrieve the authentication token from the database
  
}
