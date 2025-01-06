import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateEvent = mutation({
  args: {
    name: v.string(),
    type: v.union(v.literal("in-person"), v.literal("phone-call")),
    description: v.string(),
    start: v.string(),
    end: v.string(),
  },
  handler: async (ctx, { name, type, description, start, end }) => {
    // Retrieve the authenticated user
    const userIdentity = await ctx.auth.getUserIdentity();

    if (!userIdentity) {
      throw new Error("User not authenticated");
    }

    console.log("User Identity:", userIdentity); // Debugging

    const userEmail = userIdentity.email;

    if (!userEmail) {
      throw new Error("User email not found in identity.");
    }

    // Query the `users` table to find the user by email
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", userEmail))
      .unique();

    if (!user) {
      throw new Error(`User record not found for email: ${userEmail}`);
    }

    console.log("User Record:", user); // Debugging

    // Validate that the start date is before the end date
    if (new Date(start) >= new Date(end)) {
      throw new Error("Start date must be before the end date.");
    }

    // Insert the event into the database
    const createdAt = new Date().toISOString();
    const eventId = await ctx.db.insert("events", {
      name,
      type,
      description,
      start,
      end,
      instructorId: userEmail, // Use email as the instructorId
      createdBy: user._id, // Reference to the user's ID
      createdAt,
    });

    return eventId;
  },
});
