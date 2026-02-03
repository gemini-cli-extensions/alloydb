---
name: alloydb-admin
description: skill for performing administrative operations on alloydb
---

## Usage

All scripts can be executed using Node.js. Replace `<param_name>` and `<param_value>` with actual values.

**Bash:**
`node scripts/<script_name>.js '{"<param_name>": "<param_value>"}'`

**PowerShell:**
`node scripts/<script_name>.js '{\"<param_name>\": \"<param_value>\"}'`

## Scripts


### create_cluster

Creates a new AlloyDB cluster. This is a long-running operation, but the API call returns quickly. This will return operation id to be used by get operations tool. Take all parameters from user in one go.

#### Parameters

```json
{
  "properties": {
    "cluster": {
      "description": "A unique ID for the AlloyDB cluster.",
      "type": "string"
    },
    "location": {
      "default": "us-central1",
      "description": "The location to create the cluster in. The default value is us-central1. If quota is exhausted then use other regions.",
      "type": "string"
    },
    "network": {
      "default": "default",
      "description": "The name of the VPC network to connect the cluster to (e.g., 'default').",
      "type": "string"
    },
    "password": {
      "description": "A secure password for the initial user.",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    },
    "user": {
      "default": "postgres",
      "description": "The name for the initial superuser. Defaults to 'postgres' if not provided.",
      "type": "string"
    }
  },
  "required": [
    "cluster",
    "password"
  ],
  "type": "object"
}
```

---

### create_instance

Creates a new AlloyDB instance (PRIMARY or READ_POOL) within a cluster. This is a long-running operation. This will return operation id to be used by get operations tool. Take all parameters from user in one go.

#### Parameters

```json
{
  "properties": {
    "cluster": {
      "description": "The ID of the cluster to create the instance in.",
      "type": "string"
    },
    "displayName": {
      "description": "An optional, user-friendly name for the instance.",
      "type": "string"
    },
    "instance": {
      "description": "A unique ID for the new AlloyDB instance.",
      "type": "string"
    },
    "instanceType": {
      "default": "PRIMARY",
      "description": "The type of instance to create. Valid values are: PRIMARY and READ_POOL. Default is PRIMARY",
      "type": "string"
    },
    "location": {
      "description": "The location of the cluster (e.g., 'us-central1').",
      "type": "string"
    },
    "nodeCount": {
      "default": 1,
      "description": "The number of nodes in the read pool. Required only if instanceType is READ_POOL. Default is 1.",
      "type": "integer"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": [
    "location",
    "cluster",
    "instance"
  ],
  "type": "object"
}
```

---

### create_user

Creates a new AlloyDB user within a cluster. Takes the new user's name and a secure password. Optionally, a list of database roles can be assigned. Always ask the user for the type of user to create. ALLOYDB_IAM_USER is recommended.

#### Parameters

```json
{
  "properties": {
    "cluster": {
      "description": "The ID of the cluster where the user will be created.",
      "type": "string"
    },
    "databaseRoles": {
      "default": [],
      "description": "Optional. A list of database roles to grant to the new user (e.g., ['pg_read_all_data']).",
      "type": "array"
    },
    "location": {
      "description": "The location of the cluster (e.g., 'us-central1').",
      "type": "string"
    },
    "password": {
      "description": "A secure password for the new user. Required only for ALLOYDB_BUILT_IN userType.",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    },
    "user": {
      "description": "The name for the new user. Must be unique within the cluster.",
      "type": "string"
    },
    "userType": {
      "description": "The type of user to create. Valid values are: ALLOYDB_BUILT_IN and ALLOYDB_IAM_USER. ALLOYDB_IAM_USER is recommended.",
      "type": "string"
    }
  },
  "required": [
    "location",
    "cluster",
    "user",
    "userType"
  ],
  "type": "object"
}
```

---

### get_cluster

Retrieves details about a specific AlloyDB cluster.

#### Parameters

```json
{
  "properties": {
    "cluster": {
      "description": "The ID of the cluster.",
      "type": "string"
    },
    "location": {
      "description": "The location of the cluster (e.g., 'us-central1').",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": [
    "location",
    "cluster"
  ],
  "type": "object"
}
```

---

### get_instance

Retrieves details about a specific AlloyDB instance.

#### Parameters

```json
{
  "properties": {
    "cluster": {
      "description": "The ID of the cluster.",
      "type": "string"
    },
    "instance": {
      "description": "The ID of the instance.",
      "type": "string"
    },
    "location": {
      "description": "The location of the instance (e.g., 'us-central1').",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": [
    "location",
    "cluster",
    "instance"
  ],
  "type": "object"
}
```

---

### get_user

Retrieves details about a specific AlloyDB user.

#### Parameters

```json
{
  "properties": {
    "cluster": {
      "description": "The ID of the cluster.",
      "type": "string"
    },
    "location": {
      "description": "The location of the cluster (e.g., 'us-central1').",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    },
    "user": {
      "description": "The ID of the user.",
      "type": "string"
    }
  },
  "required": [
    "location",
    "cluster",
    "user"
  ],
  "type": "object"
}
```

---

### list_clusters

Lists all AlloyDB clusters in a given project and location.

#### Parameters

```json
{
  "properties": {
    "location": {
      "default": "-",
      "description": "Optional: The location to list clusters in (e.g., 'us-central1'). Use '-' to list clusters across all locations.(Default: '-')",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_instances

Lists all AlloyDB instances in a given project, location and cluster.

#### Parameters

```json
{
  "properties": {
    "cluster": {
      "default": "-",
      "description": "Optional: The ID of the cluster to list instances from. Use '-' to get results for all clusters.(Default: '-')",
      "type": "string"
    },
    "location": {
      "default": "-",
      "description": "Optional: The location of the cluster (e.g., 'us-central1'). Use '-' to get results for all regions.(Default: '-')",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "type": "object"
}
```

---

### list_users

Lists all AlloyDB users in a given project, location and cluster.

#### Parameters

```json
{
  "properties": {
    "cluster": {
      "description": "The ID of the cluster to list users from.",
      "type": "string"
    },
    "location": {
      "description": "The location of the cluster (e.g., 'us-central1').",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": [
    "location",
    "cluster"
  ],
  "type": "object"
}
```

---

### wait_for_operation

This will poll on operations API until the operation is done. For checking operation status we need projectId, locationID and operationId. Once instance is created give follow up steps on how to use the variables to bring data plane MCP server up in local and remote setup.

#### Parameters

```json
{
  "properties": {
    "location": {
      "description": "The location ID",
      "type": "string"
    },
    "operation": {
      "description": "The operation ID",
      "type": "string"
    },
    "project": {
      "default": "whaoyu-playground",
      "description": "The GCP project ID. This is pre-configured; do not ask for it unless the user explicitly provides a different one.",
      "type": "string"
    }
  },
  "required": [
    "location",
    "operation"
  ],
  "type": "object"
}
```

---

