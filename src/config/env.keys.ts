import { config } from "dotenv"
config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env.production",
})

const NODE_ENV = process.env.NODE_ENV || "production"
// ----------- FIREBASE
const FB_PROJECT_ID = process.env.FB_PROJECT_ID
const FB_PRIVATE_KEY = process.env.FB_PRIVATE_KEY?.replace(/\\n/g, "\n")
const FB_CLIENT_EMAIL = process.env.FB_CLIENT_EMAIL
const FB_DB_URL = process.env.FB_DB_URL

// ------------------------------------------- GOOGLE ANALYTICS
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID || ""

export {
  FB_PROJECT_ID,
  FB_PRIVATE_KEY,
  FB_CLIENT_EMAIL,
  FB_DB_URL,
  NODE_ENV,
  GA4_PROPERTY_ID,
}
