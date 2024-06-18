# Datavid Cake Tracker

Datavid Cake Tracker is a management tool where you can add all the Datavid members together with their birthdays in order to celebrate everyone. Being a remote multinational company makes these things harder to track and hence the Datavid Cake Tracker has the goal to solve these problems.

## Features

- Add a member with first name, last name, birth date, country, and city.
    - Every user should be unique
    - Every user should be at least 18 years old
- View a list of all members.
- View the member list sorted by closest to date birthdays.

  graph TD
  A[User] --> B[Add Member Form]
  B -->|Submits form| C[Server]
  C -->|Stores in| D[Database]
  C -->|Fetches members| E[Member List]
  E -->|Displays members| A
  C -->|Fetches sorted members| F[Sorted Member List]
  F -->|Displays sorted members| A
  E -->|Rerender on form submission| B
  F -->|Rerender on form submission| B


## Requirements

- Node.js
- npm or yarn or pnpm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Datavid-Cake-Tracker.git
   cd client
   npm/yarn/pnpm run dev
   cd server
   nodemon server.js
    
