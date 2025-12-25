import { sql } from "drizzle-orm";
import { boolean, date, foreignKey, pgTable, primaryKey, text, time, timestamp, varchar } from "drizzle-orm/pg-core";

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


export const events = pgTable("events", {
    id: text("id").primaryKey(),
    creatorId: text("creator_id").notNull(),
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
},
    (table) => [
        foreignKey({
            columns: [table.creatorId],
            foreignColumns: [user.id],
            name: "events_creator_id_foreign",
        }).onDelete("cascade")
    ],
);


export const eventSubscriptions = pgTable(
    "event_subscriptions",
    {
        userId: text("user_id").notNull(),
        eventId: text("event_id").notNull(),
        role: text("role")
            .$type<"admin" | "member">()
            .notNull()
            .default("member"),
        createdAt: timestamp("created_at", { mode: "string" })
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
    },
    (table) => [
        foreignKey({
            columns: [table.userId],
            foreignColumns: [user.id],
            name: "event_subscriptions_user_id_foreign",
        }).onDelete("cascade"),
        foreignKey({
            columns: [table.eventId],
            foreignColumns: [events.id],
            name: "event_subscriptions_event_id_foreign",
        }).onDelete("cascade"),
        primaryKey({
            columns: [table.userId, table.eventId],
            name: "event_subscriptions_pkey",
        }),
    ],
);
