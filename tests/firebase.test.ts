import { FirebaseService } from "../src"

/**
 * * FBService TESTS
 * 1. write a test to create a FBService instance
 * 2. write a test to get a collection
 */

describe("FBService", () => {
  const fbService = new FirebaseService()
  test("should create a FBService instance", () => {
    expect(fbService).toBeInstanceOf(FirebaseService)
  })

  test("should get a collection", () => {
    const collection = fbService.getCollection("test")
    expect(collection).toBeDefined()
  })
})
