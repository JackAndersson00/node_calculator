# Node Calculator

A Node.js application for performing various calculations. This project includes a basic Express server, a number-crunching module, and various utilities. It also demonstrates CI/CD integration using Jenkins and GitHub Actions.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/JackAndersson00/node_calculator
   cd node_calculator
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

### Running the Application

To start the application, run:

```bash
npm start
```

The application will be available at [http://localhost:3000].

### Running Tests

To run the unit tests, use:

```bash
npm run unit-test
```

To run the integration tests, use:

```bash
npm run integration-test
```

### CI/CD Pipelines

#### Jenkins

1. **Install Jenkins:** Follow [Jenkins installation guide](https://www.jenkins.io/doc/book/installing/).
2. **Set Up Jenkins Pipeline:** Use the `Jenkinsfile` in this project to configure your Jenkins pipeline.

#### GitHub Actions

1. **GitHub Actions Workflow:** The workflow configuration is located in `.github/workflows/main.yml`. It defines the CI/CD pipeline for GitHub Actions.

Made by Jack Andersson

Goodbye!