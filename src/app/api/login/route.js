import prisma from '@/app/lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Find the user by email
    const user = await prisma.User.findUnique({
      where: {
        email
      }
    });

    // If user doesn't exist, return error
    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is not correct, return error
    if (!isPasswordValid) {
      return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
    }

    // If email and password are correct, user logged in
    return NextResponse.json({ success: true, message: 'Login successful', user: { email: user.email, name: user.name } });
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ success: false, message: 'Error logging in' }, { status: 500 });
  }
}