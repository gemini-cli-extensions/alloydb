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
    - [Antigravity](#antigravity)
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
  - [Antigravity](https://antigravity.google) **v1.14.2** or higher
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

<!-- {x-release-please-start-version} -->

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

_(Tip: Run `/extensions list` to verify your configuration and active extensions.)_

> [!WARNING]
> **Changing Instance & Database Connections**
> Currently, the database connection must be configured before starting the agent and can not be changed during a session.
> To save and resume conversation history in Gemini CLI use command: `/chat save <tag>` and `/chat resume <tag>`.

</details>

<details>
<summary id="claude-code">Claude Code</summary>


**1. Set env vars:**
In your terminal, set your environment vars as described in the [configuration section](#configuration).

**2. Start the agent:**

```bash
claude
```

**3. Add the marketplace:**

```bash
/plugin marketplace add https://github.com/gemini-cli-extensions/alloydb.git#0.2.0
```

**4. Install the plugin:**

```bash
/plugin install alloydb@alloydb-marketplace
```

_(Tip: Run `/plugin list` inside Claude Code to verify the plugin is active, or `/reload-plugins` if you just installed it.)_
</details>

<details>
<summary id="codex">Codex</summary>

**1. Clone the Repo:**

```bash
git clone --branch 0.2.0 git@github.com:gemini-cli-extensions/alloydb.git
```

**2. Install the plugin:**

```bash
mkdir -p ~/.codex/plugins
cp -R /absolute/path/to/alloydb ~/.codex/plugins/alloydb
```

**3. Set env vars:**
Enter your environment vars as described in the [configuration section](#configuration).

**4. Create or update marketplace.json:**
`~/.agents/plugins/marketplace.json`

```json
{
  "name": "my-data-cloud-google-marketplace",
  "interface": {
    "displayName": "Google Data Cloud Skills"
  },
  "plugins": [
    {
      "name": "alloydb",
      "source": {
        "source": "local",
        "path": "./plugins/alloydb"
      },
      "policy": {
        "installation": "AVAILABLE",
        "authentication": "ON_INSTALL"
      },
      "category": "Database"
    }
  ]
}
```

_(Tip: Run `codex plugin list` or use the `/plugins` interactive menu to verify your installed plugins.)_

</details>
<details>
<summary id="antigravity">Antigravity</summary>

**1. Clone the Repo:**

```bash
git clone --branch 0.2.0 https://github.com/gemini-cli-extensions/alloydb.git
```

**2. Install the skills:**

Choose a location for the skills:
- **Global (all workspaces):** `~/.gemini/antigravity/skills/`
- **Workspace-specific:** `<workspace-root>/.agents/skills/`

Copy the skill folders from the cloned repository's `skills/` directory to your chosen location:

```bash
cp -R alloydb/skills/* ~/.gemini/antigravity/skills/
```

**3. Set env vars:**
Set your environment vars as described in the [configuration section](#configuration).

_(Tip: Antigravity automatically discovers skills in these directories at the start of a session.)_

</details>


<!-- {x-release-please-end} -->


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

- [alloydb-postgres-admin](./skills/alloydb-postgres-admin/SKILL.md): Provision clusters/instances, monitor creation, and retrieve configuration.
- [alloydb-postgres-access-management](./skills/alloydb-postgres-access-management/SKILL.md): Manage users, roles, and security settings.
- [alloydb-postgres-data](./skills/alloydb-postgres-data/SKILL.md): Explore schemas, identify objects (views, triggers), and execute SQL.
- [alloydb-postgres-monitor](./skills/alloydb-postgres-monitor/SKILL.md): Troubleshoot performance, analyze query plans, and monitor metrics.
- [alloydb-postgres-health](./skills/alloydb-postgres-health/SKILL.md): Optimize storage, identify index issues, and manage maintenance.
- [alloydb-postgres-optimize](./skills/alloydb-postgres-optimize/SKILL.md): Manage extensions and fine-tune engine-level settings.
- [alloydb-postgres-replication](./skills/alloydb-postgres-replication/SKILL.md): Monitor replication health and manage sync states.

## Additional Agent Skills

Find additional skills to support your entire software development lifecycle at [github.com/gemini-cli-extensions](https://github.com/gemini-cli-extensions), including:
* [Generic PostgreSQL extension](https://github.com/gemini-cli-extensions/postgres)
* [AlloyDB Observability extension](https://github.com/gemini-cli-extensions/alloydb-observability)

## Troubleshooting

Use the debug mode of your agent (e.g., `gemini --debug`) to enable debugging.

Common issues:

- "failed to find default credentials: google: could not find default credentials.": Ensure [Application Default Credentials](https://cloud.google.com/docs/authentication/gcloud) are available in your environment. See [Set up Application Default Credentials](https://cloud.google.com/docs/authentication/external/set-up-adc) for more information.
- "✖ Error during discovery for server: MCP error -32000: Connection closed": The database connection has not been established. Ensure your configuration is set via environment variables.
- "✖ MCP ERROR: Error: spawn .../toolbox ENOENT": The Toolbox binary did not download correctly. Ensure you are using the latest version of your agent.
- "cannot execute binary file": The Toolbox binary did not download correctly. Ensure the correct binary for your OS/Architecture has been downloaded. See [Installing the server](https://mcp-toolbox.dev/documentation/introduction/#install-toolbox) for more information.
