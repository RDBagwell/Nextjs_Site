import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({

  providers: [

    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {label: "Email", type: "text",placeholder: "johndoe@test.com",},
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        // database look up
        if (
          credentials.username === "john" &&
          credentials.password === "test"
        ) {
          return {
            id: 2,
            name: "Tohn",
            email: "johndoe@test.com",
          };
        } else {
          // login failed
          return null;
        }

      },
    }),

  ],

  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },

  secret: "test",

  jwt: {
    secret: "test",
    encryption: true,
  },

  pages: {
    signIn: '/admin/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  debug: true,

});