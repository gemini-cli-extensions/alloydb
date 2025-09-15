# Gemini CLI Extension - AlloyDB for PostgreSQL

random commit to test release please


This Gemini CLI extension provides a set of tools to interact with [AlloyDB for PostgreSQL](https://cloud.google.com/alloydb) instances. It allows you to manage your databases, execute queries, and explore schemas directly from the [Gemini CLI](https://google-gemini.github.io/gemini-cli/), using natural language prompts.

## Features

*   **Integrated with Gemini CLI:** As a Google-developed extension, it integrates seamlessly into the Gemini CLI environment, making security an accessible part of your workflow.
*   **Connect to AlloyDB for PostgreSQL:** Securely connect to your AlloyDB instances.
*   **Explore Database Schema:** List databases, tables, views, and schemas.
*   **Query your Database:** Execute SQL queries against your database.

## Supported Tools

* `list_tables`
* `execute_sql`

## Prerequisites

Before you begin, ensure you have the following:

*   [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed.
*   A Google Cloud project with the **AlloyDB Admin API** enabled.
*   IAM Permissions

## Installation

To install the extension, use the `gemini extensions install` command:

```bash
gemini extensions install github.com/gemini-cli-extensions/alloydb.git
```

## Configuration

*   `ALLOYDB_POSTGRES_PROJECT`: The GCP project ID.
*   `ALLOYDB_POSTGRES_REGION`: The region of the AlloyDB instance.
*   `ALLOYDB_POSTGRES_CLUSTER`: The ID of the AlloyDB cluster.
*   `ALLOYDB_POSTGRES_INSTANCE`: The ID of the AlloyDB instance.
*   `ALLOYDB_POSTGRES_DATABASE`: The name of the database.
*   `ALLOYDB_POSTGRES_USER`: (Optional) The database username. If unspecified, defaults to using IAM user.
*   `ALLOYDB_POSTGRES_PASSWORD`: (Optional) The password for the database user. If unspecified, defaults to using IAM user.
*   `ALLOYDB_POSTGRES_IP_TYPE`: (Optional) The IP Type. Defaults to public.


## Usage

* Provision Infrastructure
* Explore Schemas and Data
* Generate code


## Security

This extension executes commands against your AlloyDB database. Always review the generated SQL queries before execution, especially for write operations.

## Disclaimer

This is not an officially supported Google product. This extension is under active development, and breaking changes may be introduced.
