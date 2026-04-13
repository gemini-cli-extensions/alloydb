# DEVELOPER.md

This document provides instructions for setting up your development environment
and contributing to the AlloyDB Agent Skills project.

## Prerequisites

Before you begin, ensure you have the following:

1.  **Gemini CLI:** Install the Gemini CLI version v0.6.0 or above. Installation
    instructions can be found on the [official Gemini CLI documentation](https://google-gemini.github.io/gemini-cli/). You can
    verify your version by running `gemini --version`.
2.  **AlloyDB Cluster & Instance:** For testing data plane skills, you will need access to an active AlloyDB
    for PostgreSQL instance. We recommend using Public IP to eliminate the need to create and use a workspace
    within the same VPC network as the database. 

## Developing the Extension

The development process involves generating the skills from the `toolbox` prebuilt configurations and testing them locally.

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/gemini-cli-extensions/alloydb.git
    cd alloydb
    ```

2.  **Generate Skills:** Use the latest `toolbox` binary to generate the skills.

    ```bash
    export VERSION=1.0.0
    # Download the toolbox binary for your platform (darwin/arm64 shown)
    curl -L -o toolbox https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/darwin/arm64/toolbox
    chmod +x toolbox

    # Generate a specific skill (example for alloydb-postgres-admin)
    ./toolbox --prebuilt alloydb-postgres skills-generate \
      --name "alloydb-postgres-admin" \
      --description "Use these skills when you need to provision new AlloyDB clusters and instances, monitor their creation status, and retrieve high-level configuration or health data for the environment." \
      --toolset=admin \
      --license-header "// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the \"License\");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an \"AS IS\" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License." \
      --additional-notes="Note: The scripts automatically load the environment variables from various .env files. Do not ask the user to set vars unless skill executions fails due to env var absence."
    ```

3.  **Install the Extension Locally:** Use the Gemini CLI to install the
    extension from your local directory.

    ```bash
    gemini extensions link .
    ```
    The CLI will prompt you to confirm the installation. Accept it to proceed.

4.  **Testing Changes:** After installation, start the Gemini CLI (`gemini`).
    You can now interact with the `alloydb` skills to manually test your changes
    against your connected database.

## Testing

### Automated Presubmit Checks

A GitHub Actions workflow (`.github/workflows/presubmit-tests.yml`) is triggered
for every pull request. This workflow verifies that the extension can
be successfully installed by the Gemini CLI.

The skills themselves are validated using the `skills-validate.yml` workflow.

### Other GitHub Checks

* **License Header Check:** A workflow ensures all necessary files contain the
    proper license header.
* **Conventional Commits:** This repository uses
    [Release Please](https://github.com/googleapis/release-please) to manage
    releases. Your commit messages must adhere to the
    [Conventional Commits](https://www.conventionalcommits.org/) specification.
* **Dependency Updates:** [Renovate](https://github.com/apps/forking-renovate)
    is configured to automatically create pull requests for dependency updates.

## Building the Extension

The building process for this extension is handled automatically by the
automated workflows when a new release is created. Manual building is not
required.

## Maintainer Information

### Team

The primary maintainers for this repository are defined in the
[`.github/CODEOWNERS`](.github/CODEOWNERS) file:

* `@gemini-cli-extensions/senseai-eco`
* `@gemini-cli-extensions/alloydb-maintainers`

### Releasing

The release process is automated using `release-please`. It consists of an automated changelog preparation step followed by the manual merging of a Release PR.
