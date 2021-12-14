import NextAuth from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
              },
              authorize:(credentials, req)=>{
                if(credentials.username === 'john' && credentials.password === 'test' ){
                    const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };
                    return user;
                } else {
                    return null;
                }
              }
        })
    ],
    callbacks: {
        jwt: ({token, user}) =>{
            if(user){
                token.id = user.id;
            }
            return token;
        },
        session: ({session, token})=>{
            if(token){
                session.id = token.id
            }
            return session
        }
    },
    secret: "test",
    jwt: {
      secret: "test",
      encryption: true,
    },
    pages: {
      signIn: "auth/sigin",
    }
})