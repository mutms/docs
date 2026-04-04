---
title: Web services
description: Web services available in the MuTMS Multi-tenancy plugin.
---

The Multi-tenancy plugin exposes a set of Moodle web services for integration
with external systems. All write operations require the `tool/mutenancy:admin`
capability at system context. All services will return an error if multi-tenancy
is not active on the site.

## Tenant object

The following fields are returned by `tool_mutenancy_get_tenants`,
`tool_mutenancy_create_tenant`, and `tool_mutenancy_update_tenant`:

| Field | Type | Description |
| --- | --- | --- |
| `id` | int | Tenant id. |
| `name` | string | Tenant name. |
| `idnumber` | string | Tenant ID number. |
| `loginshow` | bool | Whether the tenant is shown on the login page. |
| `memberlimit` | int | Maximum number of tenant members. `0` means no limit. |
| `categoryid` | int | Tenant course category id. |
| `cohortid` | int | Tenant members cohort id. |
| `assoccohortid` | int | Associated users cohort id. |
| `sitefullname` | string | Tenant site full name. |
| `siteshortname` | string | Tenant site short name. |
| `archived` | bool | Archived flag. |
| `timecreated` | int | Creation date. |
| `timemodified` | int | Last modification date. |

---

## Tenants

### `tool_mutenancy_get_tenants`

Returns a list of tenants matching the given search parameters.

**Capability:** `tool/mutenancy:view` (system context)

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fieldvalues` | array | List of field/value pairs to filter by. Accepted fields: `id`, `name`, `idnumber`, `archived`. |

**Returns:** Array of tenant objects.

---

### `tool_mutenancy_create_tenant`

Creates a new tenant.

**Capability:** `tool/mutenancy:admin` (system context)

**Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | yes | Tenant name. |
| `idnumber` | string | yes | Tenant ID number. |
| `loginshow` | bool | no | Show on login page. |
| `memberlimit` | int | no | Maximum number of members. |
| `sitefullname` | string | no | Site full name. |
| `siteshortname` | string | no | Site short name. |
| `categoryname` | string | no | Tenant category name. |
| `categoryidnumber` | string | no | Tenant category ID number. |
| `cohortname` | string | no | Tenant cohort name. |
| `cohortidnumber` | string | no | Tenant cohort ID number. |
| `assoccohortcreate` | bool | no | Whether to create an associated users cohort. |

**Returns:** Created tenant object.

---

### `tool_mutenancy_update_tenant`

Updates an existing tenant.

**Capability:** `tool/mutenancy:admin` (system context)

**Parameters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | int | yes | Tenant id. |
| `name` | string | no | Tenant name. |
| `idnumber` | string | no | Tenant ID number. |
| `loginshow` | bool | no | Show on login page. |
| `memberlimit` | int | no | Maximum number of members. |
| `sitefullname` | string | no | Site full name. |
| `siteshortname` | string | no | Site short name. |
| `categoryname` | string | no | Tenant category name. |
| `categoryidnumber` | string | no | Tenant category ID number. |
| `cohortname` | string | no | Tenant cohort name. |
| `cohortidnumber` | string | no | Tenant cohort ID number. |

**Returns:** Updated tenant object.

---

## Tenant managers

### `tool_mutenancy_get_managers`

Returns the list of managers for a tenant.

**Capability:** `tool/mutenancy:view` (tenant context)

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `tenantid` | int | Tenant id. |

**Returns:** Array of user objects with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| `id` | int | User id. |
| `username` | string | Username. |
| `firstname` | string | First name. |
| `lastname` | string | Last name. |
| `email` | string | Email address. |
| `tenantid` | int | Tenant id if the manager is also a member of the tenant, otherwise `NULL`. |

---

### `tool_mutenancy_add_manager`

Adds a user to the tenant manager position.

**Capability:** `tool/mutenancy:admin` (system context)

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `tenantid` | int | Tenant id. |
| `userid` | int | User id. |

**Returns:** `true` if added, `false` if the user was already a manager.

---

### `tool_mutenancy_remove_manager`

Removes a user from the tenant manager position.

**Capability:** `tool/mutenancy:admin` (system context)

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `tenantid` | int | Tenant id. |
| `userid` | int | User id. |

**Returns:** `true` if removed, `false` if the user was not a manager.

---

## User allocation

### `tool_mutenancy_allocate_user`

Allocates a user as a tenant member, or deallocates them to a global user.

**Capability:** `tool/mutenancy:allocate` (system context)

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `userid` | int | User id. |
| `tenantid` | int | Tenant id to allocate to, or `NULL` to make the user a global user. |

**Returns:** `true` if the allocation changed, `false` if the user was already in the requested state.
