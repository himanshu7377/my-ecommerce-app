import prisma from "@/app/lib/prisma";
import bcrypt from 'bcrypt';
// import transporter from '@/path/to/nodemailerConfig'; // Path to your nodemailer configuration
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";


export async function POST(request)
{
    const res = await request.json();
    const {name,email,password} = res;
    console.log({res});
    // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
    const result = await prisma.User.create({
      data:{
        name,
        email,
        password:hashedPassword
      }
    });

    const otp = generateOTP();

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'vincenzo.padberg35@ethereal.email',
          pass: 'ubREVwMWeEA4daekNT'
      }
  });

    // await transporter.sendMail({
    //   from: email,
    //   to: email,
    //   subject: 'Registration OTP',
    //   text: `Your OTP for registration is: ${otp}`
    // });
    const info = await transporter.sendMail({
      from: '<devipurnima26899@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Registration OTP", // Subject line
      text: `Your OTP for registration is: ${otp}`, // plain text body
    });
  
    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ success: true, message: 'User registered successfully. OTP sent to email', data:result, info:info });
  
    // return NextResponse.json({result});
}

const generateOTP = () => {
  const otp = Math.floor(10000000 + Math.random() * 90000000);
  return otp.toString().substring(0, 8); // Get the first 8 digits
};

// export async function handler(req, res) {
//     if (req.method === 'POST') {
//       const { email, name, password } = req.body;
  
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       try {
//         // Create a new user in the database
//         const newUser = await prisma.User.create({
//           data: {
//             email,
//             name,
//             password: hashedPassword
//           }
//         });
  
//         res.status(201).json({ success: true, message: 'User registered successfully', user: newUser });
//       } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ success: false, message: 'Error registering user' });
//       }
//     } else {
//       res.status(405).json({ success: false, message: 'Method Not Allowed' });
//     }
//   }