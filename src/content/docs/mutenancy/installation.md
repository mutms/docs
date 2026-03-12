---
title: Installing Multi-tenancy
description: How to install the MuTMS Multi-tenancy plugin for Moodle LMS.
---

The Multi-tenancy plugin cannot be installed directly from the Moodle plugins
database because it requires a core Moodle patch. Installation must be done
via Git.

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle, the core patch, and all MuTMS plugins pre-configured.
:::

## Installation via Git

The branch names and plugin paths depend on your Moodle version:

| Moodle version | Moodle branch       | patch branch | `tool_mutenancy` | `tool_mulib` |
| --- |---------------------| --- | --- | --- |
| 4.5.x | `MOODLE_405_STABLE` | `patch/mutenancy/MOODLE_405_STABLE` | `MOODLE_405_STABLE` → `admin/tool/mutenancy` | `MOODLE_405_STABLE` → `admin/tool/mulib` |
| 5.0.x | `MOODLE_500_STABLE` | `patch/mutenancy/MOODLE_500_STABLE` | `MOODLE_500_STABLE` → `admin/tool/mutenancy` | `MOODLE_500_STABLE` → `admin/tool/mulib` |
| 5.1.x | `MOODLE_501_STABLE` | `patch/mutenancy/MOODLE_501_STABLE` | `MOODLE_501_STABLE` → `public/admin/tool/mutenancy` | `MOODLE_500_STABLE` → `public/admin/tool/mulib` |

The following commands use Moodle 4.5.x as an example. Adjust branch names and paths according to the table above for other versions.

1. Clone Moodle:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
   cd moodle
```

2. Apply the Multi-tenancy core patch:
```bash
   git remote add patches https://github.com/mutms/patches.git
   git fetch patches
   git merge patches/patch/mutenancy/MOODLE_405_STABLE
```

3. Clone the MuTMS library plugin:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
```

4. Clone the Multi-tenancy plugin:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mutenancy.git admin/tool/mutenancy
```

5. Continue with the
   <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.