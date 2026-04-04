---
title: Web services
description: Web services available in the MuTMS Programs plugin.
---

The Programs plugin exposes a set of Moodle web services for integration with
external systems. All services require the caller to be authenticated and to
hold the appropriate capability in the program's context.

## Programs

### `tool_muprog_get_programs`

Returns a list of programs matching the given search parameters.

**Capability:** `tool/muprog:view`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fieldvalues` | array | List of field/value pairs to filter by. Accepted fields: `id`, `contextid`, `fullname`, `idnumber`, `publicaccess`, `archived`, `tenantid`. |

**Returns:** Array of program objects including id, fullname, idnumber, description,
visibility settings, allocation date windows, start/due/end date logic, and lists
of enabled allocation sources and visible cohort ids.

---

## Program allocations

### `tool_muprog_get_program_allocations`

Returns a list of allocations for a given program, optionally filtered by user.

**Capability:** `tool/muprog:view`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |
| `userids` | int[] | Optional list of user ids. Empty or null means all allocated users. |

**Returns:** Array of allocation objects. See `tool_muprog_update_program_allocation` for the allocation object structure.

---

### `tool_muprog_source_manual_allocate_users`

Manually allocates users or cohort members to a program.

**Capability:** `tool/muprog:allocate`, `moodle/cohort:view`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |
| `userids` | int[] | Optional list of user ids to allocate. |
| `cohortids` | int[] | Optional list of cohort ids whose members will be allocated. |
| `dateoverrides` | object | Optional date overrides: `timestart`, `timedue`, `timeend` as Unix timestamps. |

**Returns:** Array of user ids that were allocated (already allocated users are skipped).

---

### `tool_muprog_delete_program_allocations`

Deallocates users from a program.

**Capability:** `tool/muprog:deallocate`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |
| `userids` | int[] | List of user ids to deallocate. |

**Returns:** Array of user ids that were deallocated.

---

### `tool_muprog_update_program_allocation`

Updates allocation dates for a user in a program.

**Capability:** `tool/muprog:admin`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |
| `userid` | int | User id. |
| `allocationdates` | object | Optional date updates: `timestart`, `timedue`, `timeend` as Unix timestamps. |

**Returns:** Allocation object with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| `id` | int | Allocation id. |
| `programid` | int | Program id. |
| `userid` | int | User id. |
| `sourceid` | int | Allocation source id. |
| `sourcetype` | string | Internal source name (e.g. `manual`, `cohort`). |
| `archived` | bool | Whether the allocation is archived. |
| `timeallocated` | int | Date allocated. |
| `timestart` | int | Start date. |
| `timedue` | int | Due date. |
| `timeend` | int | End date. |
| `timecompleted` | int | Completion date. |
| `timecreated` | int | Record creation date. |
| `deletepossible` | bool | Whether deallocation is possible. |
| `archivepossible` | bool | Whether archiving is possible. |
| `restorepossible` | bool | Whether restoring is possible. |
| `editpossible` | bool | Whether editing is possible. |

---

### `tool_muprog_archive_program_allocation`

Archives a user's allocation in a program.

**Capability:** `tool/muprog:deallocate`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |
| `userid` | int | User id. |

**Returns:** Updated allocation object (same structure as `tool_muprog_update_program_allocation`).

---

### `tool_muprog_restore_program_allocation`

Restores an archived allocation.

**Capability:** `tool/muprog:allocate`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |
| `userid` | int | User id. |

**Returns:** Updated allocation object (same structure as `tool_muprog_update_program_allocation`).

---

## Cohort allocation source

### `tool_muprog_source_cohort_get_cohorts`

Returns the list of cohorts synchronised with a program's cohort allocation source.

**Capability:** `tool/muprog:view`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |

**Returns:** Array of cohort objects: `id`, `contextid`, `name`, `idnumber`.

---

### `tool_muprog_source_cohort_add_cohort`

Adds a cohort to the program's cohort allocation source.

**Capability:** `tool/muprog:edit`, `moodle/cohort:view`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |
| `cohortid` | int | Cohort id to add. |

**Returns:** Updated list of synchronised cohorts (same structure as `tool_muprog_source_cohort_get_cohorts`).

---

### `tool_muprog_source_cohort_delete_cohort`

Removes a cohort from the program's cohort allocation source.

**Capability:** `tool/muprog:edit`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `programid` | int | Program id. |
| `cohortid` | int | Cohort id to remove. |

**Returns:** Updated list of synchronised cohorts (same structure as `tool_muprog_source_cohort_get_cohorts`).
