import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatar: v.string(),
    createdAt: v.string(),
  }).index("by_email", ["email"]),

  events: defineTable({
    name: v.string(), // Name of the event
    type: v.string(), // Type of event
    description: v.string(), // Description of the event
    instructorId: v.string(),
    start: v.string(), // Start date and time (ISO format recommended)
    end: v.string(), // End date and time (ISO format recommended)
    createdBy: v.id("users"), // Reference to the user who created the event
    createdAt: v.string(), // Timestamp for when the event was created
  })
  .index("by_instructor_id", ["instructorId"])
  .index("by_start", ["start"]) // Optional index for querying events by start date
});
