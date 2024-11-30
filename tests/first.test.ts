import { FBService } from "../src"

// 1. write a test to create a FBService instance
// 2. write a test to get a collection
// 3. write a test to get a document
// 4. write a test to set a document
// 5. write a test to merge a document
// 6. write a test to get a subcollection
// 7. write a test to get a subcollection document

test("should create a FBService instance", () => {
  const fbService = new FBService()
  expect(fbService).toBeInstanceOf(FBService)
})

// test("should get a collection", () => {
//   const fbService = new FBService()
//   const collection = fbService.getCollection("users")
//   expect(collection).toBeDefined()
// })

// test("should get a document", () => {
//   const fbService = new FBService()
//   const doc = fbService.getData("users", "user1")
//   expect(doc).toBeDefined()
// })

// test("should set a document", () => {
//   const fbService = new FBService()
//   const doc = fbService.setData({ name: "John Doe" }, "users")
//   expect(doc).toBeDefined()
// })

// test("should merge a document", () => {
//   const fbService = new FBService()
//   const doc = fbService.mergeData({ name: "John Doe" }, "users", "user1")
//   expect(doc).toBeDefined()
// })

// test("should get a subcollection", () => {
//   const fbService = new FBService()
//   const subCollection = fbService.getSubCollection("users", "user1", "posts")
//   expect(subCollection).toBeDefined()
// })
