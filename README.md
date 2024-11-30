# Firebase Node API Wrapper

## Setup:

1. Clone repo
2. `cp .env.example .env.test` - fill in api keys
3. `cp .env.example .env.prod` - fill in api keys

## Installation

Install the package using npm:

```sh
npm install @stocklift/stocklift-firebase
```

# Usage

**Importing the Services**
You can import the services and models from the package as follows:

```ts
import {
  FBService,
  GCSBucketName,
  GSCService,
  FBKeys,
  FBSubKeys,
  ERRKeys,
} from "@stocklift/stocklift-firebase"
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
const bucket = gscService.storage.bucket(GCSBucketName.SL_PUBLIC_BUCKET)
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
