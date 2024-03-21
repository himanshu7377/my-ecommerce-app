import prisma from "@/app/lib/prisma";
import bcrypt from 'bcrypt';


import { NextResponse } from "next/server";


export async function POST(request)
{
    const res = await request.json();
    const {name,email,password} = res;
    // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
    const result = await prisma.User.create({
      data:{
        name,
        email,
        password:hashedPassword
      }
    });

    return NextResponse.json({ success: true, message: 'User registered successfully. OTP sent to email', data:result, info:info });
  
    
}



