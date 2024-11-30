import { getAuth } from "firebase-admin/auth"
import { initializeApp, cert, ServiceAccount } from "firebase-admin/app"
import { getFirestore, FieldValue } from "firebase-admin/firestore"
import { getDatabase } from "firebase-admin/database"
import { getStorage, getDownloadURL } from "firebase-admin/storage"
import GCSBucketName from "../models/GCSBucketName"
import { FB_DB_URL, NODE_ENV } from "./env.keys"
import FIREBASE_SERVICE_ACCOUNT from "./fb.auth"

const bucketName =
  NODE_ENV === "dev"
    ? GCSBucketName.SL_PUBLIC_BUCKET
    : GCSBucketName.SL_PROD_PUBLIC_BUCKET

// INIT
// initializeApp({
//   credential: cert(FIREBASE_SERVICE_ACCOUNT as ServiceAccount),
//   databaseURL: FB_DB_URL,
//   storageBucket: `${bucketName}.appspot.com`,
// })

// INIT App
// const app = initializeApp({
//   credential: cert(FIREBASE_SERVICE_ACCOUNT as ServiceAccount),
//   databaseURL: FB_DB_URL,
//   storageBucket: `${bucketName}.appspot.com`,
// })

// DB's
// const database = getDatabase(app)
// const firestore = getFirestore(app)
// const bucket = getStorage().bucket(bucketName)
// export { firestore, database, bucket, getAuth, getDownloadURL, FieldValue }

// ----------------------- NEW IMPLEMENTATION
export default class FBService {
  app = initializeApp({
    credential: cert(FIREBASE_SERVICE_ACCOUNT as ServiceAccount),
    databaseURL: FB_DB_URL,
    storageBucket: `${bucketName}.appspot.com`,
  })
  // FIRESTORE
  db = getFirestore(this.app)
  // REALTIME DB
  database = getDatabase(this.app)
  // STORAGE
  bucket = getStorage().bucket(bucketName)
  // AUTH
  getAuth = getAuth
  // Download URL
  getDownloadURL = getDownloadURL

  // Properties
  FieldValue = FieldValue

  private static instance: FBService
  constructor() {
    if (FBService.instance) {
      return FBService.instance
    }
    FBService.instance = this
  }

  //* SINGLE COLLECTION
  // GET
  getCollection = (collection: string, doc?: string) => {
    if (doc) {
      return this.db.collection(collection).doc(doc)
    }
    return this.db.collection(collection)
  }

  getData = async <T>(collection: string, doc?: string): Promise<T> => {
    if (doc) {
      const data = await this.db.collection(collection).doc(doc).get()
      return data.data() as T
    }
    const data = await this.db.collection(collection).get()
    return data.docs.map((doc) => doc.data()) as T
  }
  // WRITE
  setData = async (data: any, collection: string, docId?: string) => {
    if (!docId) {
      return await this.db.collection(collection).add(data)
    }
    return await this.db.collection(collection).doc(docId).set(data)
  }

  // MERGE
  mergeData = async (data: any, collection: string, docId: string) => {
    return await this.db
      .collection(collection)
      .doc(docId)
      .set(data, { merge: true })
  }

  //* SUB COLLECTION
  // GET
  getSubCollection = (
    collection: string,
    doc: string,
    subCollection: string,
    subDoc?: string
  ) => {
    if (subDoc) {
      return this.db
        .collection(collection)
        .doc(doc)
        .collection(subCollection)
        .doc(subDoc)
    }
    return this.db.collection(collection).doc(doc).collection(subCollection)
  }

  getSubCollectionData = async <T>(
    collection: string,
    doc: string,
    subCollection: string,
    subDoc?: string
  ): Promise<T> => {
    if (subDoc) {
      const data = await this.db
        .collection(collection)
        .doc(doc)
        .collection(subCollection)
        .doc(subDoc)
        .get()
      return data.data() as T
    }
    const data = await this.db
      .collection(collection)
      .doc(doc)
      .collection(subCollection)
      .get()
    return data.docs.map((doc) => doc.data()) as T
  }

  // SET
  setSubCollectionData = async (
    data: any,
    collection: string,
    doc: string,
    subCollection: string,
    subDoc?: string
  ) => {
    if (!subDoc) {
      return await this.db
        .collection(collection)
        .doc(doc)
        .collection(subCollection)
        .add(data)
    }
    return await this.db
      .collection(collection)
      .doc(doc)
      .collection(subCollection)
      .doc(subDoc)
      .set(data)
  }
}
