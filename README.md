# Gemini CLI Extension - AlloyDB for PostgreSQL

> [!NOTE]
> This extension is currently in beta (pre-v1.0), and may see breaking changes until the first stable release (v1.0).

Instantly manage and query your [AlloyDB for PostgreSQL](https://cloud.google.com/alloydb) databases using the power of natural language, directly from your command line. Go from an idea to a running cluster and queryable data in minutes, without ever leaving your terminal.

Learn more about [Gemini CLI Extensions](https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/index.md).
> [!IMPORTANT]
> **We Want Your Feedback!**
> Please share your thoughts with us by filling out our feedback [form][form]. 
> Your input is invaluable and helps us improve the project for everyone.

[form]: https://docs.google.com/forms/d/e/1FAIpQLSfEGmLR46iipyNTgwTmIDJqzkAwDPXxbocpXpUbHXydiN1RTw/viewform?usp=pp_url&entry.157487=alloydb

## Why Use the AlloyDB Extension?

* **Natural Language Management:** Stop wrestling with complex commands. Provision infrastructure, manage users, and query data by describing what you want in plain English.
* **Seamless Workflow:** Stay in your CLI. No need to constantly switch contexts to the GCP console for common database tasks.
* **Full Lifecycle Control:** Manage the entire lifecycle of your database, from creating clusters and instances to exploring schemas and running queries.
* **Code Generation:** Accelerate development by asking Gemini to generate data classes and other code snippets based on your table schemas.


## Prerequisites

Before you begin, ensure you have the following:

* [Gemini CLI](https://github.com/google-gemini/gemini-cli) installed with version **+v0.6.0**.
* Setup Gemini CLI [Authentication](https://github.com/google-gemini/gemini-cli/tree/main?tab=readme-ov-file#-authentication-options).
* A Google Cloud project with the **AlloyDB API** enabled.
* Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment.
* IAM Permissions:
    * AlloyDB Admin (`roles/alloydb.admin`) (for managing infrastructure)
    * AlloyDB Client (`roles/alloydb.client`) (for connecting and querying)
    * Service Usage Consumer (`roles/serviceusage.serviceUsageConsumer`)

## Getting Started

### Installation

To install the extension, use the following command before starting the Gemini CLI:

```bash
gemini extensions install https://github.com/gemini-cli-extensions/alloydb
```

### Configuration

You will be prompted to configure the following settings during installation. These settings are saved in an `.env` file within the extension's directory.

*   `ALLOYDB_POSTGRES_PROJECT`: The GCP project ID.
*   `ALLOYDB_POSTGRES_REGION`: The region of your AlloyDB cluster.
*   `ALLOYDB_POSTGRES_CLUSTER`: The ID of your AlloyDB cluster.
*   `ALLOYDB_POSTGRES_INSTANCE`: The ID of your AlloyDB instance.
*   `ALLOYDB_POSTGRES_DATABASE`: The name of the database to connect to.
*   `ALLOYDB_POSTGRES_USER`: (Optional) The database username.
*   `ALLOYDB_POSTGRES_PASSWORD`: (Optional) The password for the database user.
*   `ALLOYDB_POSTGRES_IP_TYPE`: (Optional) Type of the IP address: `PUBLIC`, `PRIVATE`, or `PSC`. Defaults to `PUBLIC`.

> [!NOTE]
> This configuration is primarily for the Data Plane tools (querying). The Admin toolset does not strictly require these to be pre-set if you provide them in your prompts, but it is recommended for a smoother experience.

To view or update your configuration:

**List Settings:**
*   Terminal: `gemini extensions list`
*   Gemini CLI: `/extensions list`

**Update Settings:**
*   Terminal: `gemini extensions config alloydb [setting name] [--scope <scope>]`
    *   `setting name`: (Optional) The single setting to configure.
    *   `scope`: (Optional) The scope of the setting in (`user` or `workspace`). Defaults to `user`.
*   Currently, you must restart the Gemini CLI for changes to take effect. We recommend using `gemini --resume` to resume your session.

Alternatively, you can manually set these environment variables before starting the Gemini CLI:

```bash
export ALLOYDB_POSTGRES_PROJECT="<your-gcp-project-id>"
export ALLOYDB_POSTGRES_REGION="<your-alloydb-region>"
export ALLOYDB_POSTGRES_CLUSTER="<your-alloydb-cluster-id>"
export ALLOYDB_POSTGRES_INSTANCE="<your-alloydb-instance-id>"
export ALLOYDB_POSTGRES_DATABASE="<your-database-name>"
export ALLOYDB_POSTGRES_USER="<your-database-user>"  # Optional
export ALLOYDB_POSTGRES_PASSWORD="<your-database-password>"  # Optional
export ALLOYDB_POSTGRES_IP_TYPE="PUBLIC"  # Optional: `PUBLIC`, `PRIVATE`, `PSC`. Defaults to `PUBLIC`.
```

> [!NOTE]
> * Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment.
> * If your AlloyDB instance uses private IPs, you must run Gemini CLI in the same Virtual Private Cloud (VPC) network.
> * See [Troubleshooting](#troubleshooting) for debugging your configuration.

### Start Gemini CLI

To start the Gemini CLI, use the following command:

```bash
gemini
```

> [!WARNING]
> **Changing Instance & Database Connections**
> Currently, the database connection must be configured before starting the Gemini CLI and can not be changed during a session.
> To save and resume conversation history use command: `/chat save <tag>` and `/chat resume <tag>`.

## Usage Examples

Interact with AlloyDB using natural language right from your IDE:

* **Provision Infrastructure:**
    * "Create a new AlloyDB cluster named 'e-commerce-prod' in the 'my-gcp-project' project."
    * "Add a read-only instance to my 'e-commerce-prod' cluster."
    * "Create a new user named 'analyst' with read access to all tables."

* **Explore Schemas and Data:**
    * "Show me all tables in the 'orders' database."
    * "What are the columns in the 'products' table?"
    * "How many orders were placed in the last 30 days, and what were the top 5 most purchased items?"

* **Generate Code:**
    * "Generate a Python dataclass to represent the 'customers' table."

## Supported Tools

This extension provides a comprehensive set of tools:

* **Admin:**
	* `create_cluster`: Use this tool to create an AlloyDB cluster.
	* `create_instance`: Use this tool to create an AlloyDB instance (PRIMARY, READ-POOL, or SECONDARY).
	* `create_user`: Use this tool to create ALLOYDB-BUILT-IN or IAM-based users for an AlloyDB cluster.
    * `get_cluster`: Use this tool to get details about an AlloyDB cluster.
	* `get_instance`: Use this tool to get details about an AlloyDB instance.
	* `get_user`: Use this tool to get details about a user in an AlloyDB cluster.
	* `list_clusters`: Use this tool to list clusters in a given project and location.
	* `list_instances`: Use this tool to list instances in a given project and location.
	* `list_users`: Use this tool to list users in a given project and location.
    * `wait_for_operation`: Use this tool to poll the operations API until the operation is done.

* **Data:**
    * `list_tables`: Use this tool to lists tables in the database.
    * `database_overview`: Use this tool to fetches the current state of the PostgreSQL server.
    * `execute_sql`: Use this tool to executes a SQL query.
    * `list_active_queries`: Use this tool to list currently running queries.
    * `list_available_extensions`: Use this tool to list available extensions for installation.
    * `list_installed_extensions`: Use this tool to list installed extensions.
    * `get_query_plan`: Use this tool to get query plan.
    * `list_autovacuum_configurations`: Use this tool to list autovacuum configurations and its value.
    * `list_database_stats`: Use this tool to lists the key performance and activity statistics for each database in the AlloyDB instance.
    * `list_indexes`: Use this tool to list available user indexes in a PostgreSQL database.
    * `list_memory_configurations`: Use this tool to list memory configurations and its value.
    * `list_pg_settings`: Use this tool to list configuration parameters for the PostgreSQL server.
    * `list_publication_tables`: Use this tool to list publication tables in a PostgreSQL database.
    * `list_replication_slots`: Use this tool to list replication slots.
    * `list_roles`: Use this tool to lists all the user-created roles in PostgreSQL database.
    * `list_schemas`: Use this tool to lists schemas in the database.
    * `list_sequences`: Use this tool to list sequences in a PostgreSQL database.
    * `list_tablespaces`: Use this tool to lists tablespaces in the database.
    * `list_top_bloated_tables`: Use this tool to list top bloated tables.
    * `list_triggers`: Use this tool to lists triggers in the database.
    * `list_views`: Use this tool to lists views in the database from pg_views with a default limit of 50 rows.
    * `list_invalid_indexes`: Use this tool to list invalid indexes.

## Additional Extensions

Find additional extensions to support your entire software development lifecycle at [github.com/gemini-cli-extensions](https://github.com/gemini-cli-extensions), including:
* [Generic PostgreSQL extension](https://github.com/gemini-cli-extensions/postgres)
* [AlloyDB Observability extension](https://github.com/gemini-cli-extensions/alloydb-observability)
* and more!

## Troubleshooting

Use `gemini --debug` to enable debugging.

Common issues:

* "failed to find default credentials: google: could not find default credentials.": Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/external/set-up-adc) for more information.
* "✖ Error during discovery for server: MCP error -32000: Connection closed": The database connection has not been established. Ensure your configuration is set via environment variables.
* "✖ MCP ERROR: Error: spawn /Users/USER/.gemini/extensions/alloydb/toolbox ENOENT": The Toolbox binary did not download correctly. Ensure you are using Gemini CLI v0.6.0+.
* "cannot execute binary file": The Toolbox binary did not download correctly. Ensure the correct binary for your OS/Architecture has been downloaded. See [Installing the server](https://googleapis.github.io/genai-toolbox/getting-started/introduction/#installing-the-server) for more information.
