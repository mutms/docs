---
title: Installing MuTMS
description: How to install MuTMS plugins for Moodle LMS.
---

MuTMS plugins are distributed through three official channels and can be installed
using one of several methods depending on your setup.

MuTMS currently supports Moodle 4.5.x, 5.0.x, and 5.1.x. These correspond to
all officially supported Moodle releases at the time of writing. For information
on which Moodle versions are currently receiving security updates see the
[Moodle releases page](https://moodledev.io/general/releases).

:::caution
Installing Moodle requires Linux server administration skills, including
configuring a web server (Apache or Nginx), managing file permissions, and
setting up a database. All installation methods assume you are comfortable
with these tasks.
:::

## Where to get MuTMS plugins

### GitHub

The source code for all MuTMS plugins is hosted on GitHub at
[github.com/mutms](https://github.com/mutms). Each plugin has its own
repository following the standard Moodle plugin naming convention.

Patches for multi-tenancy are in separate [patches](https://github.com/mutms/patches)
repository.

You can track changes for each plugin separately via CHANGELOG.md file
or rely on overview of changes in the [MuTMS releases page](https://github.com/mutms/mutms/releases).

### Packagist

All MuTMS plugin releases are automatically published to [Packagist](https://packagist.org/?query=mutms)
repository to allow installation via Composer.

### Moodle Plugins Database

All MuTMS plugins are listed in the official
[Moodle Plugins Database](https://moodle.org/plugins). You can search for
"MuTMS" to find the full collection. The plugins database is the recommended
source for installing directly from within an existing Moodle instance. Note
that the Multi-tenancy plugin requires a core Moodle patch that cannot be
distributed through the plugins database.

## Installation methods

### MuTMS distribution

The [mutms/mutms](https://github.com/mutms/mutms) repository is a full Moodle
distribution with all MuTMS plugins pre-included. This is the easiest way to
get started — no advanced Git skills are required, and Moodle and all plugins
are pre-configured together. It is ideal for evaluation or for sites that want
to stay up to date with the full suite.

Packages can be downloaded directly from the [project release page](https://github.com/mutms/mutms/releases)
or cloned using Git, for example:

```bash
git clone -b MuTMS_45 https://github.com/mutms/mutms.git  
```

The installation process is exactly the same as normal Moodle installation,
see the [Moodle documentation](https://docs.moodle.org/en/Installing_Moodle) for more information.

Upgrade process is also the same as for standard Moodle installations. 

### Composer seed projects

The MuTMS seed packages are [Composer](https://getcomposer.org) project
templates for setting up a new Moodle 5.1.x site with MuTMS plugins.
Moodle 5.0 and 4.5 do not support installation via Composer.

The seed method is particularly well suited when you want to install only a
subset of MuTMS plugins rather than the full suite. 

Two seeds are available depending on whether you need multi-tenancy:

- [mutms/seed](https://github.com/mutms/seed) — standard Moodle with
  MuTMS plugins
- [mutms/seed-mutenancy](https://github.com/mutms/seed-mutenancy) — Moodle
  with the multi-tenancy core patch applied

### Install from within Moodle without multi-tenancy

If you already have a Moodle site, you can install MuTMS plugins directly
through the Moodle administration interface. Moodle can find and install plugins
from the plugins database without leaving your site. For full instructions see
[Installing plugins](https://docs.moodle.org/en/Installing_plugins) in the
Moodle documentation.

### Advanced installation via Git with multi-tenancy

Installing multi-tenancy patch and individual plugins via Git is not recommended
unless you have detailed Git knowledge and advanced web server management skills.

See [Advanced Git installation](../../mutenancy/git-installation/) in the multi-tenancy section.
