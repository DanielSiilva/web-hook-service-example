# Webhook Communication Example Between Servers

This project demonstrates how two Node.js servers can communicate using webhooks. It simulates a scenario where a form is filled out on a website (`FormServer`), which then notifies another server (`WebhookServer`) about the event. The second server processes the received data and stores it in a MongoDB database.

## Project Structure

The project is divided into two main parts:

- **FormServer**: Simulates a server that accepts form data and notifies another server using a webhook.
- **WebhookServer**: Receives notifications via webhook and stores the received data in a MongoDB database.

## Technologies Used

- Node.js
- Express
- Mongoose
- Axios
- MongoDB

## Configuration

To run this example, you will need Node.js and MongoDB installed on your machine. Additionally, you will need to set up the necessary environment variables for each server.

### Setting Up the WebhookServer

1. Navigate to the `WebhookServer` folder.
2. Install the dependencies with `npm install`.
3. Configure the `.env` file with the desired port and your MongoDB connection string.

### Setting Up the FormServer

1. Navigate to the `FormServer` folder.
2. Install the dependencies with `npm install`.
3. Configure the `.env` file with the desired port and the URL of the `WebhookServer`.

## Running the Servers

For each server, open a terminal in the respective folder and run:

```bash
node index.js
