---
title: Advanced Git installation
description: Installing the MuTMS Multi-tenancy plugin via Git
---

This page covers installing Multi-tenancy via Git. This is intended for
administrators comfortable with the command line, Git, and web server
configuration. For new sites on Moodle 5.1.x, the
[Composer seed](../installation/#installation-via-composer) is recommended
instead.

## Installation via Git

The branch names and plugin paths depend on Moodle version:

| Moodle version | Moodle branch | Patch branch | `tool_mutenancy` | `tool_mulib` |
| --- | --- | --- | --- | --- |
| 4.5.x | `MOODLE_405_STABLE` | `patch/mutenancy/MOODLE_405_STABLE` | `MOODLE_405_STABLE` → `admin/tool/mutenancy` | `MOODLE_405_STABLE` → `admin/tool/mulib` |
| 5.0.x | `MOODLE_500_STABLE` | `patch/mutenancy/MOODLE_500_STABLE` | `MOODLE_500_STABLE` → `admin/tool/mutenancy` | `MOODLE_500_STABLE` → `admin/tool/mulib` |
| 5.1.x | `MOODLE_501_STABLE` | `patch/mutenancy/MOODLE_501_STABLE` | `MOODLE_501_STABLE` → `public/admin/tool/mutenancy` | `MOODLE_500_STABLE` → `public/admin/tool/mulib` |

Note that there might be git merge conflicts if you merge the multi-tenancy
patch into unreleased upstream `MOODLE_XXX_STABLE` branches. If that happens
you may try the `patch/mutenancy/MOODLE_XXX_STABLE_NEXT` branch instead.

### Moodle 4.5.x
```bash
git clone -b mutenancy-4.5.10-02 https://github.com/mutms/patches.git moodle
cd moodle
git clone -b v4.5.10.06 https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
git clone -b v4.5.10.06 https://github.com/mutms/moodle-tool_mutenancy.git admin/tool/mutenancy
```

After cloning, continue with the
[standard Moodle 4.5 installation](https://docs.moodle.org/405/en/Installing_Moodle).

### Moodle 5.0.x
```bash
git clone -b mutenancy-5.0.6-02 https://github.com/mutms/patches.git moodle
cd moodle
git clone -b v5.0.6.06 https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
git clone -b v5.0.6.06 https://github.com/mutms/moodle-tool_mutenancy.git admin/tool/mutenancy
```

After cloning, continue with the
[standard Moodle 5.0 installation](https://docs.moodle.org/500/en/Installing_Moodle).

### Moodle 5.1.x
```bash
git clone -b mutenancy-5.1.3-02 https://github.com/mutms/patches.git moodle
cd moodle
git clone -b v5.0.6.06 https://github.com/mutms/moodle-tool_mulib.git public/admin/tool/mulib
git clone -b v5.1.3.06 https://github.com/mutms/moodle-tool_mutenancy.git public/admin/tool/mutenancy
```

After cloning, continue with the
[standard Moodle 5.1 installation](https://docs.moodle.org/501/en/Installing_Moodle).
