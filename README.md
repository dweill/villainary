# Villainary

Villainary is an e-commerce/business management platform with the conceit that it's users are villains. The purpose of Villainary is

1. To provide the best and easiest experience for villains to manage their villainous plans, lairs, and equipment
2. To allow software developers to practice technologies in a realistic app, with whatever tech they may wish. If a developer wants to learn angular, they can implement the Villainary feature set in Angular, independently of a vue or react client. If developers want to learn node, spring-boot, .Net or any other technology, developers can implement it and configure whatever stack they prefer. New components of the application should be created in a subdirectory with the convention (villainary-${client/server/db technology}, ex: villainary-react).

3. To allow developers to learn and practice best practices in a collaborative environment.

## Setup

 * **Clone the repository:**

   `git clone https://github.com/dweill/villainary`
   `cd villainary`

## Running with docker

Before running the project, ensure you have the following installed:

### Prerequisites

- **Docker:** [Download and install Docker](https://www.docker.com/get-started)

### Docker Steps

* **Build and Run with Docker:**

   1. `docker-compose up --build`
   
   2. Access the application at `http://localhost:3000`
