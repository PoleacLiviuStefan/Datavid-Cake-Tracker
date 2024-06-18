# Datavid Cake Tracker

Datavid Cake Tracker is a management tool where you can add all the Datavid members together with their birthdays in order to celebrate everyone. Being a remote multinational company makes these things harder to track and hence the Datavid Cake Tracker has the goal to solve these problems.

## Features

- Add a member with first name, last name, birth date, country, and city.
    - Every user should be unique
    - Every user should be at least 18 years old
- View a list of all members.
- View the member list sorted by closest to date birthdays.

[![](https://mermaid.ink/img/pako:eNp1kcFuwjAQRH9ltWf4gRwqBZKc2kvTnhwOm3ghVnEcrR0kRPh3nAQJStWbPfNmVmtfsHGaMcGDUN_CV1Z1AKn69iw7WK_fYKNSreGDbc0ChRO7m4jN5I3lUFsTPOyjPMJWlSynmJuA7QIEJ-zBdCNkKqNANXl-8gsOTRsBO9f7EXJ1n_RufJjBfAYz4_sjnZ_I9G-LdxJYP5BClYvy2ln87nzNpY8NP1m40zG7rJj_6xS4Qstiyej4mJeJqzC0bLnCJB41yU-FVXeNHA3BleeuwSTIwCsUNxxaTPZ09PE29JoCZ4bij9i7er0BYriOCg?type=png)](https://mermaid.live/edit#pako:eNp1kcFuwjAQRH9ltWf4gRwqBZKc2kvTnhwOm3ghVnEcrR0kRPh3nAQJStWbPfNmVmtfsHGaMcGDUN_CV1Z1AKn69iw7WK_fYKNSreGDbc0ChRO7m4jN5I3lUFsTPOyjPMJWlSynmJuA7QIEJ-zBdCNkKqNANXl-8gsOTRsBO9f7EXJ1n_RufJjBfAYz4_sjnZ_I9G-LdxJYP5BClYvy2ln87nzNpY8NP1m40zG7rJj_6xS4Qstiyej4mJeJqzC0bLnCJB41yU-FVXeNHA3BleeuwSTIwCsUNxxaTPZ09PE29JoCZ4bij9i7er0BYriOCg)
## Requirements

- Node.js
- npm or yarn or pnpm

## Installation and Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Datavid-Cake-Tracker.git
2. Run the project:
  ```bash
   cd client  
   npm/yarn/pnpm run dev  
   cd server  
   nodemon server.js    
```
## API Endpoints
GET /api/show-members - Retrieves all members.  
GET /api/sorted-members - Retrieves all members sorted by closest birthdays.  
POST /api/add-member - Adds a new member.
    
