import NextAuth from "next-auth"
import type { NextAuthConfig } from 'next-auth';


export const authConfig = {
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);


