/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Google OAuth Client ID - Client ID of your Google Cloud OAuth 'Desktop app' credential. Leave empty to use the extension without Google Tasks sync. */
	"clientId": string;

	/** Google OAuth Client Secret - Client secret of the same Desktop app credential. */
	"clientSecret": string;

	/** Google Tasks List Name - Name of the Google Tasks list to sync with. Created automatically if it doesn't exist. */
	"listName": string;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Manage Todos */
	export type ManageTodos = ExtensionPreferences & {
		
	}

	/** Command: Add Todo */
	export type AddTodo = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: Manage Todos */
	export type ManageTodos = {
		
	}

	/** Command: Add Todo */
	export type AddTodo = {
		/** buy milk tomorrow */
		"text"?: string
	}
}