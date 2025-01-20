import { drizzle } from "drizzle-orm/d1";
import { usersTable } from "./schemas/schema";

export const db = drizzle(process.env.DB);
