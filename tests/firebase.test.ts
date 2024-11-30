import { FBService } from "../src"

// * FBService TESTS
const fbService = new FBService()

/**
 * 1. write a test to create a FBService instance
 * 2. write a test to get a collection
 */

test("should create a FBService instance", () => {
  expect(fbService).toBeInstanceOf(FBService)
})

test("should get a collection", () => {
  const collection = fbService.getCollection("test")
  expect(collection).toBeDefined()
})
