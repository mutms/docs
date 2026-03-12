---
title: Multi-tenancy
description: An overview of the MuTMS Multi-tenancy plugin for Moodle LMS.
---

Multi-tenancy refers to the ability to create isolated entities, known as tenants, within a single
Moodle instance. Each tenant operates independently, managing its own users, roles, appearance,
courses, and settings. This is particularly useful for organisations that require multiple
self-contained business units or client organisations within a single installation.

The standard Moodle distribution does not support multi-tenancy — this functionality is otherwise
only available through Moodle Workplace. The MuTMS Multi-tenancy plugin brings the same capability
to standard Moodle installations as fully open-source software under the GPL 3.0 licence, with no
restrictions on commercial use or distribution.

## Use cases

- **Corporate training** — create separate tenants for departments, regions, or subsidiaries,
  allowing tailored training programs while keeping management centralised
- **Client training** — offer each client a customised learning environment with unique branding
  and permissions
- **Partner and vendor training** — give external partners or vendors secure access to their own
  training materials without interfering with internal operations
- **Franchise management** — let franchisees run localised training programs while enforcing
  consistent standards across the organisation
- **Event management** — run focused environments for recurring events such as annual meetups,
  updating branding and content each year while keeping past editions accessible with their
  original look and feel
- **Shared resources** — distribute common content such as compliance courses or company
  announcements across all tenants from a single shared space

## Drawbacks

Multi-tenancy is not always the right solution. Consider the following before committing to this
approach:

- **Splitting tenants later is difficult** — separating a multi-tenant site into independent sites
  is a complex process requiring site cloning and significant data cleanup
- **Shared infrastructure** — heavy resource usage by one tenant can affect performance for others
- **Limited customisation** — tenants have less flexibility than standalone Moodle instances
- **Plugin compatibility** — some third-party plugins, particularly enrolment and authentication
  tools, may require adjustments to work correctly in a multi-tenant setup
- **Security** — shared infrastructure means a vulnerability can potentially expose data across multiple tenants
