import { TabTitle } from "../../utilities/TabTitle";

const Blog = () => {
    TabTitle('DisneyLand Toys||Blog')
    return (
        <div className='mx-16 my-10 bg-blue-100 px-5 py-5 rounded-xl'>
            <h2 className='text-3xl font-bold mb-8'>Q1:What is an access token and refresh token? How do they work and where should we store them on the client-side? </h2>
            <p><strong>Access Token</strong>Access Token are usually short-lived JWT Tokens that are signed by the server and are included in every HTTP request to the server to authorize the request.</p>
            <p>
            <strong>Refresh tokens</strong> are usually long-lived opaque strings that are stored in your database and used to get a new access token when it expires.
            </p>
            <p>A refresh token is a special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires</p>
            <p>There are two common ways to store your tokens. The first is in localStorage and the second is in cookies. There is a lot of debate over which one is better with most people leaning toward cookies as they are more secure.</p>

            
            <h2 className='text-3xl font-bold mb-8 mt-8'>Q2:Compare SQL and NoSQL databases? </h2>
            <p>
            <strong>SQL</strong> databases are primarily called Relational Databases (RDBMS); <br />
            <strong>NoSQL</strong> databases are primarily called non-relational or distributed databases. 
            </p>
            <p><strong>SQL</strong> databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. <br />
 

 <strong>NoSQL</strong> database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
 <strong>SQL</strong> databases are table-based. <br /> <strong>NoSQL</strong> databases are either key-value pairs, document-based, graph databases, or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
            <h2 className='text-3xl font-bold mb-8 mt-8'>Q3:What is express js? What is Nest JS? </h2>
            <p>
            <strong>Express</strong> is a minimalist and flexible framework that provides a simple and intuitive API for building web applications with Node.js. Some of its key features and benefits include:

<li>Simple and intuitive API: Express provides a simple and easy-to-use API that allows developers to quickly build web applications with Node.js.</li>

<li>Minimalist approach: Express follows a minimalist approach, which means that it provides only the essential features and leaves the rest to the developers.</li>

<li>Middleware support: Express provides built-in support for middleware, which allows developers to add functionality to their applications easily.</li>

<li>Large community: Express has a large and active community of developers, which means that there are plenty of resources available for learning and getting help.</li>
            </p>
            <p>
                <br />
            <strong>NestJS</strong> is a framework that is built on top of Express and provides additional features and benefits. Some of its key features and benefits include:

<li>Dependency injection: NestJS provides built-in support for dependency injection, which makes it easier to manage dependencies and write modular and scalable code.</li>

<li>Modular architecture: NestJS follows a modular architecture, which allows developers to break their applications into smaller and more manageable modules.</li>

<li>Intuitive CLI: NestJS provides an intuitive CLI that makes it easy to create new applications, modules, controllers, and services.</li>

TypeScript support: NestJS has built-in support for TypeScript, which provides developers with additional features such as type checking, interfaces, and decorators.
            </p>
            <h2 className='text-3xl font-bold mb-8 mt-8'>Q4:What is MongoDB aggregate and how does it work? </h2>
            <p>
            <strong>Aggregation</strong> is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
<br />

One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. 
            </p>
        </div>
    );
};

export default Blog;