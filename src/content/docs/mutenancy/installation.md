---
title: Installing Multi-tenancy
description: How to install the MuTMS Multi-tenancy plugin for Moodle LMS.
---

The Multi-tenancy plugin requires a core Moodle patch and cannot be installed
directly from the Moodle plugins database.

## Installation of MuTMS distribution

If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the
easiest option — it includes Moodle, the core patch, and all MuTMS plugins
pre-configured, and supports Moodle 4.5.x, 5.0.x, and 5.1.x.

## Installation via Composer

For Moodle 5.1.x, the recommended installation method for new sites is the
[mutms/seed-mutenancy](https://github.com/mutms/seed-mutenancy) Composer
project template.

## Installation via Git

For Moodle 4.5.x and 5.0.x, or for production sites already running Moodle,
installation is done via Git. See the
[advanced Git installation](../git-installation/) page for full instructions.
