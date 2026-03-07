---
title: Supervisors & teams
description: Overview of the MuTMS Supervisors & teams plugin for Moodle LMS.
---

The Supervisors & teams plugin enables administrators to define structured relationships between users —
managers and employees, teachers and students, parents and children — and use those relationships across
other MuTMS plugins for notifications, approval workflows, and report content restrictions.

## Features

- Flexible framework design supporting both simple supervisor relationships and named teams
- Role assignments in the subordinate's user context based on the defined relationship
- Cohort-based access restrictions for managing relationships
- Team cohorts — subordinates of a team can be automatically added as cohort members
- Multi-tenancy aware — relationships respect tenant boundaries
- Usable from other MuTMS plugins for notifications, approvals, and report restrictions

## Modes

The plugin supports two framework modes:

**Supervisors mode** defines one supervisor per subordinate, organised as a tree hierarchy. Suited to
manager–employee or teacher–student relationships where workflows start with subordinate selection. Access
control is defined in the subordinate's user context.

**Teams mode** creates named teams of subordinates managed by a team supervisor. Suited to classes, project
teams, or organisational units where workflows start with team creation. Teams have a name and optional ID
number, each member can have a different position name, and a team cohort can be created automatically so
that all members are added as cohort members. Access control is defined at system or tenant level.
