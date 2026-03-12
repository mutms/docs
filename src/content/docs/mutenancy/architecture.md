---
title: Technical architecture
description: Technical architecture of the MuTMS Multi-tenancy plugin for Moodle LMS.
---

Tenants are implemented as a new context level sitting between the system and
user contexts. This allows permissions to be delegated using standard Moodle
roles and capabilities. Separate top-level categories ensure that tenant
content remains isolated from other tenants.

## Tenant categories

Each tenant is assigned its own top-level category to organise its courses
and keep content isolated from other tenants.

## Tenant users

User accounts are either global — available across all tenants — or tied to
one specific tenant as tenant members. Tenant users is the collective term
for all users participating in a tenant:

- **Global users** — standard accounts managed by site administrators,
  available across the whole site
- **Tenant members** — accounts belonging to a specific tenant, managed by
  tenant managers
- **Associated users** — global users who participate in one or more tenants;
  they are visible in tenant courses but do not receive additional capabilities
  in tenant contexts

## Tenant managers

Tenant managers can manage tenant member accounts and courses within their
tenant. They are automatically assigned a special role in tenant contexts and
in the tenant's top-level category. A global user may be a tenant manager for
multiple tenants and can switch between them using the **Switch tenant**
navigation widget.

## Tenant separation

Permission restrictions prevent members of one tenant from accessing courses
or categories belonging to another tenant.

## Tenant cohorts

When a tenant is created, a site-wide cohort is automatically created for its
members. This cohort is kept in sync to always include all current tenant
members and associated users.

## Associated users cohort

An optional regular cohort can be selected in the tenant configuration to
define which global users are associated with the tenant. During enrolment or
role assignment, user options are limited to those connected to the relevant
tenant. Multiple tenants may share the same associated users cohort.
