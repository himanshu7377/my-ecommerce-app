import prisma from "@/app/lib/prisma";
import bcrypt from 'bcrypt';


import { NextResponse } from "next/server";


export async function POST(request)
{
    const res = await request.json();
    const {name,email,password} = res;
    // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);


      try {
        const newUser = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword, // Assuming you have some kind of password hashing mechanism here
          },
        });
        
      return  NextResponse.json({ success: true, message: 'User registered successfully', user: newUser });
      } catch (error) {
        console.error('Error registering user:', error);
      return  NextResponse.json({ success: false, message: error });
      }
    
    
}



