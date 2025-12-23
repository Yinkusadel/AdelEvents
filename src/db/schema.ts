import { boolean, date, integer, pgTable, text, time, timestamp, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    username: text("username").unique(),
    image: text("image"),
    emailVerified: boolean("email_verified")
        .$defaultFn(() => false)
        .notNull(),
    createdAt: timestamp("created_at")
        .$defaultFn(() => /* @__PURE__ */ new Date())
        .notNull(),
    updatedAt: timestamp("updated_at")
        .$defaultFn(() => /* @__PURE__ */ new Date())
        .notNull(),
});


export const event = pgTable("event", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    image: varchar({ length: 255 }).notNull(),
    imageUploadUrl: text("image_upload_url"),
    address: varchar({ length: 255 }).notNull(),
    city: varchar({ length: 255 }).notNull(),
    state: varchar({ length: 255 }).notNull(),
    country: text("country").notNull(),
    time: time().notNull(),
    timezone: varchar({ length: 255 }).notNull(),
    date: date().notNull(),
    createdAt: timestamp("created_at")
        .$defaultFn(() => /* @__PURE__ */ new Date())
        .notNull(),
    updatedAt: timestamp("updated_at")
        .$defaultFn(() => /* @__PURE__ */ new Date())
        .notNull(),
});