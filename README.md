# AlloyDB for PostgreSQL Agent Skills

> [!NOTE]
> Currently in beta (pre-v1.0), and may see breaking changes until the first stable release (v1.0).

This repository provides a set of agent skills to interact with [AlloyDB for PostgreSQL](https://cloud.google.com/alloydb) instances. These skills can be used with various AI agents, including [Antigravity](https://antigravity.google/), [Claude Code](https://claude.com/product/claude-code) and [Codex](https://developers.openai.com/codex), to manage your databases, execute queries, explore schemas, and troubleshoot issues using natural language prompts.

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
    - [Antigravity](#antigravity)
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
  - Antigravity
     - [Antigravity CLI](https://github.com/google-gemini/gemini-cli) version **v1.6.0** or higher
     - [Antigravity 2.0](https://antigravity.google/product/antigravity-2) version **v2.0.0** or higher.
  - [Claude Code](https://claude.com/product/claude-code) version **v2.1.94** or higher.
  - [Codex](https://developers.openai.com/codex) **v0.117.0** or higher.
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
<summary id="antigravity">Antigravity</summary>

You can use either of these two agents for Antigravity:
- [Antigravity CLI](https://github.com/google-gemini/gemini-cli) version **v1.6.0** or higher
- [Antigravity 2.0](https://antigravity.google/product/antigravity-2) version **v2.0.0** or higher.

<blockquote>
💡 <strong>Tip — Migrating from Gemini CLI?</strong><br>
If you previously installed this extension with <code>gemini extensions install</code>, you can convert it to an Antigravity plugin instead of reinstalling from scratch:
<ul>
  <li><strong>On first launch of Antigravity CLI</strong>, accept the Migration Options prompt to automatically convert your installed Gemini CLI extensions to Antigravity plugins.</li>
  <li><strong>Or, from your terminal</strong>, run:
    <pre><code class="language-bash">agy plugin import gemini</code></pre>
  </li>
</ul>
See <a href="https://antigravity.google/docs/gcli-migration">Migrating from Gemini CLI</a> for details on plugins, context files (<code>GEMINI.md</code> / <code>AGENTS.md</code>), and MCP server config differences.
</blockquote>

#### Antigravity 2.0 (IDE)

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

_(Tip: Antigravity 2.0 automatically discovers skills in these directories at the start of a session. You can verify they are active by running the `/skills` command in your active session.)_

#### Antigravity CLI

You can install plugins directly from a remote GitHub repository.

**1. Install the plugin:**

```bash
agy plugin install https://github.com/gemini-cli-extensions/alloydb
```

**2. Set env vars:**
Set your environment vars as described in the [configuration section](#configuration).

</details>

<details>
<summary id="claude-code">Claude Code</summary>


**1. Set env vars:**
In your terminal, set your environment vars as described in the [configuration section](#configuration).

**2. Start the agent:**

```bash
claude
```

**3. Install the plugin:**

```bash
/plugin install alloydb@claude-plugins-official
```

_(Tip: Run `/plugin list` inside Claude Code to verify the plugin is active, or `/reload-plugins` if you just installed it.)_
</details>

<details>
<summary id="codex">Codex</summary>

**1. Add the marketplace:**

```bash
codex plugin marketplace add GoogleCloudPlatform/data-agent-kit
```

**2. Install the plugin:**

```bash
codex plugin add alloydb@data-agent-kit
```

**3. Set env vars:**
Enter your environment vars as described in the [configuration section](#configuration).

**4. (Optional) Upgrade the marketplace:**
```bash
codex plugin marketplace upgrade data-agent-kit
```

</details>

## Installing using [open agent skills tool](https://github.com/vercel-labs/skills)

You can install skills using the `npx skills` command.

**1. Install the skills:**

Run the following command in your terminal to automatically download and register the skills:

```bash
npx skills add https://github.com/gemini-cli-extensions/alloydb/tree/0.2.0
```

For detailed info check out the [Skills npm package](https://www.npmjs.com/package/skills).

**2. Set env vars:**
Set your environment vars as described in the [configuration section](#configuration).

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
