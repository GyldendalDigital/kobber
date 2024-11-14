CREATE TABLE IF NOT EXISTS "visitor" (
	"id" text PRIMARY KEY NOT NULL,
	"ip" text,
	"created_at" timestamp DEFAULT now()
);
