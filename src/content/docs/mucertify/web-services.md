---
title: Web services
description: Web services available in the MuTMS Certifications plugin.
---

The Certifications plugin exposes a set of Moodle web services for integration
with external systems. All services require the caller to be authenticated and
to hold the `tool/mucertify:view` capability in the certification's context.

## Certifications

### `tool_mucertify_get_certifications`

Returns a list of certifications matching the given search parameters.

**Capability:** `tool/mucertify:view`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fieldvalues` | array | List of field/value pairs to filter by. Accepted fields: `id`, `contextid`, `fullname`, `idnumber`, `publicaccess`, `archived`, `tenantid`. |

**Returns:** Array of certification objects with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| `id` | int | Certification id. |
| `contextid` | int | Certification context id. |
| `fullname` | string | Certification full name. |
| `idnumber` | string | Certification ID number. |
| `description` | string | Description text in original format. |
| `descriptionformat` | int | Description text format. |
| `publicaccess` | bool | Public access flag. |
| `archived` | bool | Archived flag. Archived certifications should not change. |
| `programid1` | int | First (initial) program id. |
| `programid2` | int | Re-certification program id. |
| `templateid` | int | Certificate template id. |
| `recertify` | int | `NULL` means no automatic recertification. Otherwise the number of seconds before the end of the last period when the recertification window opens. |
| `periodsjson` | string | Period defaults in JSON format. |
| `timecreated` | int | Certification creation date. |
| `sources` | string[] | Enabled assignment source names. |
| `cohortids` | int[] | Visible cohort ids for non-public certifications. |

---

## Certification assignments

### `tool_mucertify_get_certification_assignments`

Returns a list of assignments for a given certification, optionally filtered by user.

**Capability:** `tool/mucertify:view`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `certificationid` | int | Certification id. |
| `userids` | int[] | Optional list of user ids. Empty or null means all assigned users. |

**Returns:** Array of assignment objects with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| `id` | int | Assignment id. |
| `certificationid` | int | Certification id. |
| `userid` | int | User id. |
| `sourceid` | int | Assignment source id. |
| `sourcetype` | string | Internal source type. |
| `archived` | bool | Archived flag. Archived assignments should not change. |
| `timecertifiedtemp` | int | Temporary certification valid-until date. |
| `evidencejson` | string | Other evidence for temporary certification. |
| `timecertifiedfrom` | int | Date of first certification period start. |
| `timecertifieduntil` | int | Date of latest certification period end. |
| `timecreated` | int | Assignment date. |
| `deletepossible` | bool | Whether deletion is possible. |
| `archivepossible` | bool | Whether archiving is possible. |
| `restorepossible` | bool | Whether restoring is possible. |

---

## Certification periods

### `tool_mucertify_get_certification_periods`

Returns the list of certification periods for a given certification and user.

**Capability:** `tool/mucertify:view`

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `certificationid` | int | Certification id. |
| `userid` | int | User id. |

**Returns:** Array of period objects ordered by `timewindowstart`, with the following fields:

| Field | Type | Description |
| --- | --- | --- |
| `id` | int | Period id. |
| `certificationid` | int | Certification id. |
| `userid` | int | User id. |
| `programid` | int | Program id associated with this period. |
| `timewindowstart` | int | Program allocation start date for this period. |
| `timewindowdue` | int | Program allocation due date for this period. |
| `timewindowend` | int | Program allocation end date for this period. |
| `allocationid` | int | Program allocation id. `NULL` means not yet allocated; `0` indicates an error; value is kept after de-allocation. |
| `timecertified` | int | Certification date. Usually matches program completion, but can be overridden with admin capability. |
| `timefrom` | int | Start date of validity. Required when `timecertified` is set. |
| `timeuntil` | int | End date of validity. Required when `timecertified` is set. |
| `timerevoked` | int | When set, the user is not considered certified even if `timecertified` is present. Must be set before deleting a period. |
| `evidencejson` | string | Alternative certification evidence or revoking details. |
| `recertifiable` | bool | Whether this period is a candidate for recertification. Expected only on the last non-revoked period. |
