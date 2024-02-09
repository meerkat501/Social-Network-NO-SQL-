# Social-Network-NO-SQL-

## Summary

This Social Network API is a backend application designed to provide a foundation for social networking platforms. It supports user and thought management, including the ability to post thoughts, react to thoughts, and add or remove friends/

## Features

- User creation, update, and deletion.
- Posting thoughts, updating them, and deletion.
- Adding and removing reactions to thoughts.
- Adding and removing friends from a user's friend list.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- MongoDB

### Installation

1. Clone the repository to your local machine: `git clone git@github.com:meerkat501/Social-Network-NO-SQL-.git`

2. Navigate to the project directory: `cd Social-Network-NO-SQL`

3. Install the required npm packages

### Starting the application

Start the server: `node .\server.js`

## API Endpoints

Below are the available API endpoints:

### Users

- `POST /api/users` - Create a new user.
- `GET /api/users` - Retrieve all users.
- `GET /api/users/:userId` - Retrieve a single user by ID.
- `PUT /api/users/:userId` - Update a user by ID.
- `DELETE /api/users/:userId` - Delete a user by ID.
- `POST /api/users/:userId/friends/:friendId` - Add a friend.
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend.

### Thoughts

- `POST /api/thoughts` - Create a new thought.
- `GET /api/thoughts` - Retrieve all thoughts.
- `GET /api/thoughts/:thoughtId` - Retrieve a single thought by ID.
- `PUT /api/thoughts/:thoughtId` - Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID.
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought.

## Testing

Test the API endpoints using Insomnia by sending requests to `http://localhost:3000/api/<endpoint>`.


