---
title: Installing Training credits
description: How to install the MuTMS Training credits plugin for Moodle LMS.
---

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

## Using the Moodle plugins database

1. Install the following plugin:
    - [Training credits](https://moodle.org/plugins/tool_mutrain)
2. The following required dependencies will be installed automatically:
    - [MuTMS library](https://moodle.org/plugins/tool_mulib)
    - [Training credits custom field](https://moodle.org/plugins/customfield_mutrain)

## Installation via Git

1. Clone the latest supported Moodle release:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
   cd moodle
```

2. Clone the required plugin repositories:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mutrain.git admin/tool/mutrain
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-customfield_mutrain.git customfield/field/mutrain
```

3. Continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
