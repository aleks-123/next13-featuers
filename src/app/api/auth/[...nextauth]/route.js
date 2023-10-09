import User from '@/models/User';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import bcrypt from 'bcryptjs';
import connect from '@/utils/db';

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (!user) throw new Error('User not found');

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordCorrect) throw new Error('Password is inncorect');
          return user;
        } catch (err) {
          throw new Error('ace');
        }
      },
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
});

export { handler as GET, handler as POST };
