import "dotenv/config";

function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 3000),
  nodeEnv: process.env.NODE_ENV ?? "development",

  supabaseUrl: requiredEnv("SUPABASE_URL"),
  supabaseSecretKey: requiredEnv("SUPABASE_SECRET_KEY"),
};