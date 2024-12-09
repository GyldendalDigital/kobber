import * as schema from "@/drizzle/schema"
import { neon } from "@neondatabase/serverless"
import { config } from "dotenv"
import { drizzle } from "drizzle-orm/neon-http"

config({ path: ".env" }) // or .env.local

const sql = neon(process.env.DATABASE_URL!)

export const db = drizzle(sql, { schema })




// import { config } from "dotenv"
// import { drizzle } from "drizzle-orm/neon-http"

// config({ path: ".env" }) // or .env.local

// export const db = drizzle(process.env.DATABASE_URL!)





// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";
// import { config } from "dotenv"
// config({ path: ".env" }) // or .env.local
// const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle({ client: sql });
// const result = await db.execute("select 1");
// console.log(result)