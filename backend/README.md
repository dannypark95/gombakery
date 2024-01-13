# Backend for Gom Bakery

This directory contains the server-side application for Gom Bakery, a robust and scalable backend service built with Go.

## Technology Stack

- **Go (Golang)**: An open-source programming language that makes it easy to build simple, reliable, and efficient software.
- **Docker**: A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
- **Kubernetes**: An open-source system for automating deployment, scaling, and management of containerized applications.

## Getting Started

To run the backend application locally, you need to have Docker and Kubernetes set up and configured on your machine. Here are the steps to get the backend up and running:

### Prerequisites

- Install [Go](https://golang.org/doc/install) on your local machine.
- Install [Docker](https://docs.docker.com/get-docker/).
- Install [Kubernetes](https://kubernetes.io/docs/tasks/tools/) and set up a local cluster, or configure it to point to an existing cluster.

### Running the Application

1. Build the Docker image:

```sh
docker build -t gombakery-backend .
```

2. Deploy the application to Kubernetes:

```sh
kubectl apply -f deployment.yaml
```

Replace `deployment.yaml` with the actual path to your Kubernetes deployment manifest.

3. Once deployed, you can access the API endpoints as specified in your service configuration in Kubernetes.

## Development

For local development, you can run the Go application directly:

```sh
go run main.go
```

Ensure that you are in the `backend` directory before running the above command.

## Contributions

If you wish to contribute to the backend application, please fork the repository and submit a pull request with your proposed changes.

```

```
