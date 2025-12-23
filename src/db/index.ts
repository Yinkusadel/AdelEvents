import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

async function main() {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        throw new Error("🔴🔴 Database URL not found");
    }

    const client = postgres(databaseUrl)
    const db = drizzle({ client });
}

main();
