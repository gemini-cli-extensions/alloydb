# AlloyDB for PostgreSQL Agent Skills

> [!NOTE]
> Currently in beta (pre-v1.0), and may see breaking changes until the first stable release (v1.0).

This repository provides a set of agent skills to interact with [AlloyDB for PostgreSQL](https://cloud.google.com/alloydb) instances. These skills can be used with various AI agents, including [Gemini CLI](https://google-gemini.github.io/gemini-cli/), Claude Code, and Codex, to manage your databases, execute queries, explore schemas, and troubleshoot issues using natural language prompts.

> [!IMPORTANT]
> **We Want Your Feedback!**
> Please share your thoughts with us by filling out our feedback [form][form].
> Your input is invaluable and helps us improve the project for everyone.

[form]: https://docs.google.com/forms/d/e/1FAIpQLSfEGmLR46iipyNTgwTmIDJqzkAwDPXxbocpXpUbHXydiN1RTw/viewform?usp=pp_url&entry.157487=alloydb

## Table of Contents

- [Why Use AlloyDB for PostgreSQL Agent Skills?](#why-use-alloydb-for-postgresql-agent-skills)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Configuration](#configuration)
  - [Installation & Usage](#installation--usage)
    - [Gemini CLI](#gemini-cli)
    - [Claude Code](#claude-code)
    - [Codex](#codex)
- [Usage Examples](#usage-examples)
- [Supported Skills](#supported-skills)
- [Additional Agent Skills](#additional-agent-skills)
- [Troubleshooting](#troubleshooting)

## Why Use AlloyDB for PostgreSQL Agent Skills?

- **Seamless Workflow:** Integrates seamlessly into your AI agent's environment. No need to constantly switch contexts for common database tasks.
- **Natural Language Queries:** Stop wrestling with complex commands. Explore schemas and query data by describing what you want in plain English.
- **Full Lifecycle Control:** Manage the entire lifecycle of your database, from creating instances to exploring schemas and running queries.
- **Code Generation:** Accelerate development by asking your agent to generate data classes and other code snippets based on your table schemas.

## Prerequisites

Before you begin, ensure you have the following:

- One of these AI agents installed
  - [Gemini CLI](https://github.com/google-gemini/gemini-cli) version **v0.6.0** or higher
  - [Claude Code](https://claude.com/product/claude-code) version **v2.1.94** or higher
  - [Codex](https://developers.openai.com/codex) **v0.117.0** or higher
- A Google Cloud project with the **AlloyDB API** enabled.
- Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment.
- IAM Permissions:
  - AlloyDB Client (`roles/alloydb.client`)
  - AlloyDB Admin (`roles/alloydb.admin`)

## Getting Started

### Configuration

Please keep these env vars handy during the installation process:

- `ALLOYDB_POSTGRES_PROJECT`: The GCP project ID.
- `ALLOYDB_POSTGRES_REGION`: The region of your AlloyDB instance.
- `ALLOYDB_POSTGRES_CLUSTER`: The ID of your AlloyDB cluster.
- `ALLOYDB_POSTGRES_INSTANCE`: The ID of your AlloyDB instance.
- `ALLOYDB_POSTGRES_DATABASE`: The name of the database to connect to.
- `ALLOYDB_POSTGRES_USER`: (Optional) The database username.
- `ALLOYDB_POSTGRES_PASSWORD`: (Optional) The password for the database user.
- `ALLOYDB_POSTGRES_IP_TYPE`: (Optional) Type of the IP address: `PUBLIC`, `PRIVATE`, or `PSC`. Defaults to `PUBLIC`.

> [!NOTE]
>
> - Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment.
> - If your AlloyDB instance uses private IPs, you must run your agent in the same Virtual Private Cloud (VPC) network.

### Installation & Usage

To start interacting with your database, install the skills for your preferred AI agent, then launch the agent and use natural language to ask questions or perform tasks.

For the latest version, check the [releases page][releases].

[releases]: https://github.com/gemini-cli-extensions/alloydb/releases

<details open>
<summary id="gemini-cli">Gemini CLI</summary>

**1. Install the extension:**

```bash
gemini extensions install https://github.com/gemini-cli-extensions/alloydb
```

During the installation, enter your environment vars as described in the [configuration section](#configuration).

**2. (Optional) Manage Configuration:**
To view or update your configuration in Gemini CLI:

- Terminal: `gemini extensions config alloydb [setting name] [--scope <scope>]`
- Gemini CLI: `/extensions list`

**3. Start the agent:**

```bash
gemini
```

</details>

<details>
<summary id="claude-code">Claude Code</summary>

**1. Add the MCP server configuration:**

In your `claude_desktop_config.json` (or the appropriate configuration file for Claude Code), add the following entry under `mcpServers`:

```json
{
  "mcpServers": {
    "alloydb": {
      "command": "npx",
      "args": [
        "-y",
        "@toolbox-sdk/server@1.0.0",
        "--prebuilt",
        "alloydb-postgres",
        "--stdio"
      ],
      "env": {
        "ALLOYDB_POSTGRES_PROJECT": "<your-project-id>",
        "ALLOYDB_POSTGRES_REGION": "<your-region>",
        "ALLOYDB_POSTGRES_CLUSTER": "<your-cluster-id>",
        "ALLOYDB_POSTGRES_INSTANCE": "<your-instance-id>",
        "ALLOYDB_POSTGRES_DATABASE": "<your-database-name>",
        "ALLOYDB_POSTGRES_USER": "<your-user>",
        "ALLOYDB_POSTGRES_PASSWORD": "<your-password>"
      }
    }
  }
}
```

**2. Start the agent:**

```bash
claude
```

</details>

<details>
<summary id="codex">Codex</summary>

**1. Install the skills:**

Follow the Codex documentation to add a new MCP server. Use the following configuration:

- **Command:** `npx`
- **Args:** `-y`, `@toolbox-sdk/server@1.0.0`, `--prebuilt`, `alloydb-postgres`, `--stdio`
- **Env Vars:** Set the environment variables as described in the [configuration section](#configuration).

**2. Start the agent:**

Launch Codex and ensure the `alloydb` MCP server is active.

</details>

## Usage Examples

Interact with AlloyDB using natural language right from your agent:

- **Provision Infrastructure:**
    - "Create a new AlloyDB cluster named 'e-commerce-prod' in project 'my-gcp-project'."
    - "Add a read-only instance to my 'e-commerce-prod' cluster."
- **Explore Schemas and Data:**
    - "Show me all tables in the 'orders' database."
    - "What are the columns in the 'products' table?"
    - "How many orders were placed in the last 30 days?"
- **Generate Code:**
    - "Generate a Python dataclass to represent the 'customers' table."

## Supported Skills

This repository includes the following skill sets:

- **alloydb-postgres-admin:** Provision clusters/instances, monitor creation, and retrieve configuration.
- **alloydb-postgres-access-management:** Manage users, roles, and security settings.
- **alloydb-postgres-data:** Explore schemas, identify objects (views, triggers), and execute SQL.
- **alloydb-postgres-monitor:** Troubleshoot performance, analyze query plans, and monitor metrics.
- **alloydb-postgres-health:** Optimize storage, identify index issues, and manage maintenance.
- **alloydb-postgres-optimize:** Manage extensions and fine-tune engine-level settings.
- **alloydb-postgres-replication:** Monitor replication health and manage sync states.

## Additional Agent Skills

Find more skills at [github.com/gemini-cli-extensions](https://github.com/gemini-cli-extensions), including:
- [Cloud SQL for PostgreSQL](https://github.com/gemini-cli-extensions/cloud-sql-postgresql)
- [BigQuery](https://github.com/gemini-cli-extensions/bigquery)
- [Firestore](https://github.com/gemini-cli-extensions/firestore)

## Troubleshooting

Use the debug mode of your agent (e.g., `gemini --debug`) to enable debugging.

Common issues:

- "failed to find default credentials: google: could not find default credentials.": Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/external/set-up-adc) for more information.
- "✖ Error during discovery for server: MCP error -32000: Connection closed": The database connection has not been established. Ensure your configuration is set via environment variables.
- "✖ MCP ERROR: Error: spawn .../toolbox ENOENT": The Toolbox binary did not download correctly. Ensure you are using the latest version of your agent.
- "cannot execute binary file": The Toolbox binary did not download correctly. Ensure the correct binary for your OS/Architecture has been downloaded. See [Installing the server](https://mcp-toolbox.dev/documentation/introduction/#install-toolbox) for more information.
