---
title: Advanced Git installation
description: Installing the MuTMS Multi-tenancy plugin via Git
---

This page covers installing Multi-tenancy via Git. This is intended for
administrators comfortable with the command line, Git, and web server
configuration. For new sites on Moodle 5.1.x and later, the
[Composer seed](../installation/#installation-via-composer) is recommended
instead.

## Installation via Git

### Moodle 4.5.x
```bash
git clone -b patch-4.5.13.01 https://github.com/mutms/patches.git moodle
cd moodle
git clone -b v4.5.13.01 https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
git clone -b v4.5.13.01 https://github.com/mutms/moodle-tool_mutenancy.git admin/tool/mutenancy
```

After cloning, continue with the
[standard Moodle 4.5 installation](https://docs.moodle.org/405/en/Installing_Moodle).

### Moodle 5.0.x
```bash
git clone -b patch-5.0.9.01 https://github.com/mutms/patches.git moodle
cd moodle
git clone -b v5.0.9.01 https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
git clone -b v5.0.9.01 https://github.com/mutms/moodle-tool_mutenancy.git admin/tool/mutenancy
```

After cloning, continue with the
[standard Moodle 5.0 installation](https://docs.moodle.org/500/en/Installing_Moodle).

### Moodle 5.1.x
```bash
git clone -b patch-5.1.6.01 https://github.com/mutms/patches.git moodle
cd moodle
git clone -b v5.0.9.01 https://github.com/mutms/moodle-tool_mulib.git public/admin/tool/mulib
git clone -b v5.1.6.01 https://github.com/mutms/moodle-tool_mutenancy.git public/admin/tool/mutenancy
```

After cloning, continue with the
[standard Moodle 5.1 installation](https://docs.moodle.org/501/en/Installing_Moodle).

### Moodle 5.2.x
```bash
git clone -b patch-5.2.2.01 https://github.com/mutms/patches.git moodle
cd moodle
git clone -b v5.0.9.01 https://github.com/mutms/moodle-tool_mulib.git public/admin/tool/mulib
git clone -b v5.2.2.01 https://github.com/mutms/moodle-tool_mutenancy.git public/admin/tool/mutenancy
```

After cloning, continue with the
[standard Moodle 5.2 installation](https://docs.moodle.org/502/en/Installing_Moodle).
