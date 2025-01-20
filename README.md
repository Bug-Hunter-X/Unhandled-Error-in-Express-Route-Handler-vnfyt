# Express.js Unhandled Error in Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid input.  Specifically, the `/users/:id` route fails to handle cases where `req.params.id` is not a valid user ID.

## Bug
The provided `bug.js` demonstrates the issue.  The route handler directly accesses `req.params.id` without any validation or error checking. If an invalid ID is provided, the application might crash or return an unexpected error response.

## Solution
The `bugSolution.js` provides a corrected version. It includes error handling to gracefully manage invalid user IDs, returning a more appropriate error response to the client.