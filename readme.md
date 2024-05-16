# MongoDB Express Server

This is a basic Express server set up to interact with a MongoDB database. It provides endpoints to fetch data from the MongoDB database in both HTML table and tabular column format.

## Prerequisites

Before running the server, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Start MongoDB server.
4. Start the Express server by running `npm start`.

## Configuration

Ensure MongoDB is running on `localhost:27017` or adjust the connection string in `server.js` accordingly.

## Endpoints

- **GET /api/data**: Fetches data from MongoDB in table format.
- **GET /data**: Fetches data from MongoDB in tabular column format.

## Frontend

This server is also configured to serve static files from a frontend build directory. You can place your frontend files in the `frontend/build` directory.

## Environment Variables

- **PORT**: Port on which the server will run. Default is 3000.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## http://localhost:3001/api/data   ----> this is the localhost link
