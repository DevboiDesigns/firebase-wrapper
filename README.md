# Firebase Node API Wrapper

The Firebase Node API Wrapper is a comprehensive package designed to simplify the integration and interaction with Firebase services in Node.js applications. This wrapper provides a streamlined interface for accessing Firebase Authentication, Firestore, Realtime Database, Cloud Storage, and more. It abstracts the complexity of Firebase's SDK, allowing developers to focus on building features rather than managing configurations and boilerplate code.

## Key Features:

- **Easy Initialization**: Quickly set up and initialize Firebase services with minimal configuration.
- **Authentication**: Seamlessly integrate Firebase Authentication to manage user sign-in and sign-up processes.
- **Firestore**: Access and manipulate Firestore collections and documents with ease.
- **Realtime Database**: Interact with Firebase Realtime Database for real-time data synchronization.
- **Cloud Storage**: Manage file uploads and downloads using Firebase Cloud Storage.
- **Environment Configuration**: Support for multiple environments (development, production, testing) with environment-specific configurations.

## Setup:

1. Clone the repository.
2. Copy the example environment file and fill in the API keys:

```sh
cp .env.example .env.test
cp .env.example .env.prod
```

## Installation

Install the package using npm:

```sh
npm install @devboidesigns/firebase-wrapper
```

## Usage

Import the services and models from the package:

```ts
import {
  FBService,
  GCSBucketName,
  GSCService,
  FBKeys,
  FBSubKeys,
  ERRKeys,
} from "@devboidesigns/firebase-wrapper"
```

**Initializing the Firebase Service**

Create an instance of the `FBService` class to interact with Firebase services:

```ts
const fbService = new FBService()
```

**Getting a Collection**

You can get a collection from Firestore using the `getCollection` method:

```ts
const collection = fbService.getCollection(FBKeys.users)
```

**Getting Data from a Collection**

To get data from a collection, use the `getData` method:

```ts
const userData = await fbService.getData("users", "userId")
```

**Using Google Cloud Storage Service**

Create an instance of the `GSCService` class to interact with Google Cloud Storage:

```ts
const gscService = new GSCService()
```

**Uploading a File to a Bucket**

To upload a file to a Google Cloud Storage bucket:

```ts
const bucket = gscService.storage.bucket(GCSBucketName.PUBLIC_BUCKET)
await bucket.upload("path/to/local/file", { destination: "path/in/bucket" })
```

# Running Tests

To run the tests, use the following command:

```sh
npm test
```

# Building the Project

To build the project, use the following command:

```sh
npm run build
```

This documentation provides an overview of how to set up, install, and use the package, including examples of common operations.
