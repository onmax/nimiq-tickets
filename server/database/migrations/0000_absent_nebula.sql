CREATE TABLE `tickets` (
	`id` integer PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`name` text NOT NULL,
	`username` text NOT NULL,
	`avatar` text NOT NULL
);
