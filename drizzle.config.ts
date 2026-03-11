import { defineConfig } from 'drizzle-kit';
import path from 'path';

export default defineConfig({
  out: './src/db/drizzle/migrations',
  schema: './src/db/drizzle/schemas.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: path.resolve(process.cwd(), 'db.sqlite3'),
  },
});
