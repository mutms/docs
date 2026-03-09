---
title: Installing MuTMS
description: Where to find MuTMS plugins and how to install them.
---

MuTMS plugins are distributed through two official channels and can be installed
using one of three methods depending on your setup.

## Where to get MuTMS plugins

### GitHub

The source code for all MuTMS plugins is hosted on GitHub at
[github.com/mutms](https://github.com/mutms). Each plugin has its own
repository following the standard Moodle plugin naming convention.

GitHub is the recommended source if you are installing via Git or want to track
releases and changelogs.

### Moodle Plugins Database

All MuTMS plugins are listed in the official
[Moodle Plugins Database](https://moodle.org/plugins). You can search for
"MuTMS" to find the full collection. The plugins database is the recommended
source for installing directly from within an existing Moodle instance. Note
that the Multi-tenancy plugin requires a core Moodle patch that cannot be
distributed through the plugins database — if you plan to use Multi-tenancy,
the MuTMS distribution is recommended as it includes the required core patch
and simplifies installation significantly.

## Installation methods

### MuTMS distribution

The [mutms/mutms](https://github.com/mutms/mutms) repository is a full Moodle
distribution with all MuTMS plugins pre-included. This is the easiest way to
get started — no need to install Moodle and plugins separately. It always
includes the latest Moodle and MuTMS plugins, making it ideal for evaluation or for sites
that want to stay up to date with the full suite.

### Install from within Moodle

If you already have a Moodle site, you can install MuTMS plugins directly
through the Moodle administration interface. Moodle can find and install plugins
from the plugins database without leaving your site. For full instructions see
[Installing plugins](https://docs.moodle.org/en/Installing_plugins) in the
Moodle documentation.

### Install via Git

Installing individual plugins via Git is recommended for production sites that
already run Moodle, as it makes future updates straightforward. Each MuTMS
plugin has its own repository on GitHub and must be cloned into the correct
directory for its plugin type. Refer to the individual plugin pages in this
documentation for the specific clone path and setup steps.

For general Git-based installation instructions see
[Installing plugins](https://docs.moodle.org/en/Installing_plugins) in the
Moodle documentation.

## Moodle compatibility

MuTMS currently supports Moodle 4.5.x, 5.0.x, and 5.1.x. These correspond to
all officially supported Moodle releases at the time of writing. For information
on which Moodle versions are currently receiving security updates see the
[Moodle releases page](https://moodledev.io/general/releases).

When installing via Git, each plugin repository uses branches named after the
target Moodle version — for example `MOODLE_405_STABLE` for Moodle 4.5.x and
`MOODLE_500_STABLE` for Moodle 5.0.x. For Moodle 5.1.x, the Multi-tenancy
plugin and core patches have a dedicated `MOODLE_501_STABLE` branch, while all
other plugins use `MOODLE_500_STABLE`.
