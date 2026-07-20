CREATE TABLE `subscriptions` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`favorite` text NOT NULL,
	`country` text NOT NULL,
	`lead_days` integer DEFAULT 14 NOT NULL,
	`consent` integer NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `subscriptions_email_idx` ON `subscriptions` (`email`,`status`);