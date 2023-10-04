import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    await connect();

    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
