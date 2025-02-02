import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const customerTable = sqliteTable("customer", {
  customId: integer("customerId").primaryKey(),
  companyName: text("companyName").notNull(),
  contactName: text("contactName").notNull(),
});
