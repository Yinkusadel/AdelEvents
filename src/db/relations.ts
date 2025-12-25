import { relations } from "drizzle-orm/relations";
import { events, eventSubscriptions, user } from "./schema";

export const userRelations = relations(user, ({ many }) => ({
    createdEvents: many(events),
    eventSubscriptions: many(eventSubscriptions),
}));

export const eventsRelations = relations(events, ({ one, many }) => ({
    creator: one(user, {
        fields: [events.creatorId],
        references: [user.id],
    }),
  eventSubscriptions: many(eventSubscriptions),
}));

export const eventSubscriptionsRelations = relations(
  eventSubscriptions,
  ({ one }) => ({
    user: one(user, {
      fields: [eventSubscriptions.userId],
      references: [user.id],
    }),
    event: one(events, {
      fields: [eventSubscriptions.eventId],
      references: [events.id],
    }),
  }),
);