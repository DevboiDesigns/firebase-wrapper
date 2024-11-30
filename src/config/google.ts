import FIREBASE_SERVICE_ACCOUNT from "./fb.auth"
// STORAGE
import { Storage } from "@google-cloud/storage"
// ANALYTICS
import { GA4_PROPERTY_ID } from "./env.keys"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

export default class GSCService {
  // ACCOUNT
  account = FIREBASE_SERVICE_ACCOUNT
  // ANALYTICS GA4
  propertyId = GA4_PROPERTY_ID
  // STORAGE - Bucket
  storage = new Storage({
    credentials: this.account,
  })
  // ANALYTICS config
  analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: this.account,
    projectId: this.account.project_id,
  })

  private static instance: GSCService
  constructor() {
    if (GSCService.instance) {
      return GSCService.instance
    }
    GSCService.instance = this
  }
}
