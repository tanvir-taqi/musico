import React, { useEffect } from 'react';
import Blog from './Blog';

const Blogs = () => {

    const blogQA = [
        {
            question: 'What is the difference between SQL and NoSQL?',
            answer: 'SQL means Stuctured Query Language. And NoSql means Not Only Stuctured Query Language.SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.NoSQL databases need not stick to this format.SQL is older so it is widely used. ',
            id: 1
        },
        {
            question: 'What is JWT, and how does it work?',
            answer: 'JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesnt have to completely rely on a datastore(database) to save session information.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.Users Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.Resource server then verifies the authenticity of the token using the secret salt/ public key.',
            id: 2
        },
        {
            question: 'What is the difference between javascript and NodeJS?',
            answer: 'Javascript is a programming language.On the other hand mode.js is a runtime environment for javascript which helps to run js on the server . JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.',
            id: 3
        },
        {
            question: 'How does NodeJS handle multiple requests at the same time?',
            answer: 'NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own Event Loop which is an infinite loop that receives requests and processes them.It recieves requests amd put them in a queue and processes one by one until it reaches the end. Node.js Whenever a request is received and kepps taking more time , node.s puts it in another queue to be processed and when its ready , it is also added to the queue. Thats how node.js hgandles multiple requests at the same time and thats how  it becomes faster.',
            id: 4
        },
    ]


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(()=>{
        document.title = 'Musico-Blogs';
    })
    return (
        <div className='py-32'>
            <h2 className="text-5xl my-6 font-extrabold colored-text text-center">Welcome to Blogs</h2>

            {
                blogQA.map(sblog => <Blog
                    key={sblog.id}
                    sblog={sblog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;