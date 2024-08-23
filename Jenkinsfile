pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }
        stage('Unit Test') {
            steps {
                // Run unit tests
                sh 'npm run unit-test'
            }
        }
        stage('Integration Test') {
            steps {
                // Run integration tests
                sh 'npm run integration-test'
            }
        }
    }

    post {
        always {
            // Optional: Clean up, archive artifacts, send notifications, etc.
            echo 'Pipeline completed!'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
