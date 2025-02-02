import { drizzle } from "drizzle-orm/d1";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

function initDbConnection() {
  if (process.env.NODE_ENV === "development") {
    const { env } = getRequestContext();

    return drizzle(env.DB);
  }

  return drizzle(process.env.DB as unknown as D1Database);
}

export const db = initDbConnection();
