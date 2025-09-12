# AlloyDB for PostgreSQL Extension

This document provides instructions for the Gemini agent to assist users with the AlloyDB for PostgreSQL extension.

## AlloyDB MCP Server (Data Plane: Connecting and Querying)

This section covers connecting to an AlloyDB database instance.

### Agent Playbook: Client

1.  **Verify Environment Variables**: Before attempting to connect, confirm with the user that the following environment variables are set in the extension configuration or their shell environment.

    *   `ALLOYDB_POSTGRES_PROJECT`: The GCP project ID.
    *   `ALLOYDB_POSTGRES_REGION`: The region of the AlloyDB instance.
    *   `ALLOYDB_POSTGRES_CLUSTER`: The ID of the AlloyDB cluster.
    *   `ALLOYDB_POSTGRES_INSTANCE`: The ID of the AlloyDB instance.
    *   `ALLOYDB_POSTGRES_DATABASE`: The name of the database.
    *   `ALLOYDB_POSTGRES_USER`: (Optional) The database username.
    *   `ALLOYDB_POSTGRES_PASSWORD`: (Optional) The password for the database user.

2.  **Handle Missing Variables**: If a command fails with an error message containing a placeholder like `${ALLOYDB_POSTGRES_PROJECT}`, it signifies a missing environment variable. Inform the user which variable is missing and instruct them to set it.

3.  **Handle Permission Errors**: If you encounter an IAM permission error, the user likely lacks the **AlloyDB Client** (`roles/alloydb.client`) role. Advise the user to ensure their account has this role. You can provide these links for assistance:
    *   Granting Roles: `https://cloud.google.com/iam/docs/grant-role-console`
    *   AlloyDB Permissions: `https://cloud.google.com/iam/docs/roles-permissions/alloydb`

4.  **Guide on Vector Embeddings**: If the user asks about generating vector embeddings, refer them to this guide:
    *   `https://cloud.google.com/alloydb/docs/ai/work-with-embeddings`


## AlloyDB Admin MCP Server (Control Plane: Creating and Managing Infrastructure)

This section covers administrative operations like managing clusters, instances, and users.

### Agent Playbook: Admin

1.  **Verify API Key**: For administrative commands, ensure the `API_KEY` environment variable is set. This key is required for authenticating with the AlloyDB Admin API.

2.  **Handle Permission Errors**:
    *   For operations that create, get, list, delete, or update resources, the user needs the **AlloyDB Admin** (`roles/alloydb.admin`) role.
    *   For read-only operations (get/list), the **AlloyDB Viewer** (`roles/alloydb.viewer`) role is sufficient.
    *   If an operation fails due to permissions, identify the type of operation and recommend the appropriate role. You can provide these links for assistance:
        *   Granting Roles: `https://cloud.google.com/iam/docs/grant-role-console`
        *   AlloyDB Permissions: `https://cloud.google.com/iam/docs/roles-permissions/alloydb`

3.  **Provide Admin Guides**:
    *   For questions about database user management, provide this link: `https://cloud.google.com/alloydb/docs/database-users/overview`
    *   For questions about viewing cluster and instance settings, provide this link: `https://cloud.google.com/alloydb/docs/cluster-settings?resource=primary`
