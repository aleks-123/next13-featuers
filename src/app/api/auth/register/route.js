import User from '@/models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connect from '@/utils/db';

//test
//test2

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return new NextResponse('User has been created', { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
