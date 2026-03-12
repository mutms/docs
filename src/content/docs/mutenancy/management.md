---
title: Tenant management
description: How to manage tenant member accounts and global user associations in MuTMS Multi-tenancy.
---

Multi-tenancy supports two distinct ways of associating users with a tenant:
tenant members and associated global users. Each serves a different purpose
and carries different management permissions.

## Tenant member accounts

Tenant members are users tied to one specific tenant. They cannot access
courses belonging to other tenants, though by default they can access
standard non-tenant courses. Their access can be further restricted using
regular category permissions.

Tenant member accounts can be created and managed by tenant managers.

**Creating new tenant member accounts:**

1. Log in as site admin, switch to the tenant, and press **Add a new user**
   on the **Browse list of users** administration page.
2. Log in as tenant manager, open **Tenant management** from the tenant menu,
   go to the **Users** tab, and press **Create account**.
3. Log in as site admin and use **Upload users** with a file that includes
   an additional `tenant` column.

**Migrating an existing global account to a tenant member:**

1. Log in as site admin, navigate to the user's profile, and use the
   **Allocate user** dialog to migrate them to a tenant member account.
2. Log in as site admin, navigate to the **Browse list of users** page, and
   use the bulk action to allocate multiple users to a tenant at once.

Tenant members can be deallocated from a tenant using the same pages and
bulk actions described above.

## Associating global users with tenants

Global users can be associated with a tenant via a cohort selected in the
tenant configuration. Associated users differ from tenant members — they
retain their global account status and tenant managers do not have special
permissions to manage them or their accounts.

By default, unassociated global users are not visible in tenant courses as
candidates for enrolments, program allocations, or similar areas.

:::note
Before associating global users with a tenant, a cohort must be selected
in the tenant configuration to serve as the associated users cohort.
:::

**Associating global users with a tenant:**

- Log in as site admin, navigate to the **Browse list of users** page, and
  use the bulk action to add users to the associated users cohort.
- Use the standard cohort UI to manually add users to the associated
  users cohort.
