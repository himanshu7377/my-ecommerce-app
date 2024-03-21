import prisma from '@/app/lib/prisma';
import bcrypt from 'bcrypt';

// export async function POST(req, res) {
//     if (req.method === 'POST') {
//       const { email, password } = req.body;
  
//       // Check if email and password is provided
//       if (!email || !password) {
//         return res.status(400).json({ success: false, message: 'Please provide an email and password' });
//       }
  
//       try {
//         // Check that user exists by email
//         const user = await prisma.User.findUnique({
//           where: {
//             email
//           }
//         });
  
//         if (!user) {
//           return res.status(401).json({ success: false, message: 'Invalid email' });
//         }
  
//         // Check that password matches
//         const isMatch = await bcrypt.compare(password, user.password);
  
//         if (!isMatch) {
//           return res.status(401).json({ success: false, message: 'Invalid password' });
//         }
  
//         // If email and password are correct, user is signed in
//         // You can generate a token here and send it back to the client for authentication
  
//         res.status(200).json({ success: true, message: 'Sign in successful' });
//       } catch (error) {
//         console.error('Error signing in:', error);
//         res.status(500).json({ success: false, message: 'Error signing in' });
//       }
//     } else {
//       res.status(405).json({ success: false, message: 'Method Not Allowed' });
//     }
//   }


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

    // If email and password are correct, user is logged in
    return NextResponse.json({ success: true, message: 'Login successful', user: { email: user.email, name: user.name } });
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ success: false, message: 'Error logging in' }, { status: 500 });
  }
}