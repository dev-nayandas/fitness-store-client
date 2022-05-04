import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
  return (

    <div className='container'>
      <h1 className='mt-5'> Different Between Javascript and Node.js</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>Javascript</th>
            <th>Node Js</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage.</td>
            <td>Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server.</td>

          </tr>
          <tr>
            <td>2</td>
            <td>It is an interpreted scripting language, and the code can only be executed and run in a web browser.</td>
            <td>Node.js enables JavaScript code to run outside of the browser.</td>



          </tr>
          <tr>
            <td>3</td>
            <td>It is used for both frontend and backend development so that it may run on different devices.</td>
            <td>It is used the JavaScript language to develop server-side applications.</td>



          </tr>
          <tr>
            <td>4</td>
            <td>It is a dynamic language so that developers may make big mistakes easily.</td>
            <td>It's a cross-platform framework that works on Windows, MAC, and Linux.</td>



          </tr>
          <tr>
            <td>5</td>
            <td>Javascript is used in frontend development.</td>
            <td>Nodejs is used in server-side development</td>



          </tr>

        </tbody>
      </Table>

      <h1 className='mt-5'> Different Between sql and nosql database</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Sl No.</th>
            <th>sql</th>
            <th>nosql</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td> Sql  means Structured Query language</td>
            <td>NoSql  means  no Structured Query language</td>

          </tr>
          <tr>
            <td>2</td>
            <td>SQL databases are vertically scalable</td>
            <td>NoSQL databases are horizontally scalable</td>



          </tr>
          <tr>
            <td>3</td>
            <td>Some examples are Oracle, Postgres, and MS-SQL.</td>
            <td>Some examples are MongoDB, Redis, Neo4j, Cassandra, Hbase.</td>



          </tr>
          <tr>
            <td>4</td>
            <td>It should be used when data validity is super important</td>
            <td>Use when it’s more important to have fast data than correct data</td>



          </tr>
          <tr>
            <td>5</td>
            <td>Tables with fixed rows and columns</td>
            <td>Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns.</td>



          </tr>

        </tbody>
      </Table>


      <h1 className='mt-5'> Purpose and working method of jwt</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Sl No.</th>
            <th> Purpose and working method of jwt</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>What is JWT and how it works?
              JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.</td>


          </tr>
          <tr>
            <td>2</td>
            <td>Jwt can typically be used to pass identity of authenticated users between an identity provider and a service provider</td>




          </tr>
          <tr>
            <td>3</td>
            <td>It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</td>



          </tr>
          <tr>
            <td>4</td>
            <td>The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity.</td>




          </tr>
          <tr>
            <td>5</td>
            <td>The idea is simple anybody get a secret token from the service when you set up the API</td>




          </tr>

        </tbody>
      </Table>

    </div>

  );
};

export default Blogs;