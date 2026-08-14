---
title: Installing Certifications
description: How to install the MuTMS Certifications plugin for Moodle LMS.
---

:::tip
If you are setting up a new site or evaluating MuTMS, the
[MuTMS distribution](../../mutms/installation/#mutms-distribution) is the easiest option — it
includes Moodle and all MuTMS plugins pre-configured.
:::

## Installing from ZIP packages

MuTMS plugins are not listed in the Moodle Marketplace, so they cannot be found from
within your Moodle site. Download the release package for each plugin from its tags
page on GitHub and install it under *Site administration ▸ Plugins ▸ Install plugins*.

Dependencies are not resolved automatically — install the plugins in the order listed.

1. Required plugins:
   - [MuTMS library](https://github.com/mutms/moodle-tool_mulib/tags)
   - [Program enrolment](https://github.com/mutms/moodle-enrol_muprog/tags)
   - [My programs block](https://github.com/mutms/moodle-block_muprog_my/tags)
   - [My programs overview page](https://github.com/mutms/moodle-block_muprogmyoverview/tags)
   - [Programs](https://github.com/mutms/moodle-tool_muprog/tags)
   - [My certifications block](https://github.com/mutms/moodle-block_mucertify_my/tags)
   - [Certifications](https://github.com/mutms/moodle-tool_mucertify/tags)
2. Optionally install the following recommended plugins:
   - [Workplace certificate manager](https://moodle.org/plugins/tool_certificate)
   - [Certifications certificate element](https://github.com/mutms/moodle-certificateelement_mucertify/tags)
   - [Programs certificate element](https://github.com/mutms/moodle-certificateelement_muprog/tags)
   - [Training credits custom field](https://github.com/mutms/moodle-customfield_mutrain/tags)
   - [Training credits](https://github.com/mutms/moodle-tool_mutrain/tags)

## Installation via Git

For Moodle 5.1.x, clone plugins into `public/admin/tool/...`, `public/enrol/...`, and
`public/blocks/...` instead of the paths shown below. All MuTMS plugins use `MOODLE_500_STABLE`
for Moodle 5.1.x.

1. Clone the latest supported Moodle release:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/moodle/moodle.git
   cd moodle
```

2. Clone the required plugin repositories:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mulib.git admin/tool/mulib
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-enrol_muprog.git enrol/muprog
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-block_muprog_my.git blocks/muprog_my
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-block_muprogmyoverview.git blocks/muprogmyoverview
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_muprog.git admin/tool/muprog
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-block_mucertify_my.git blocks/mucertify_my
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mucertify.git admin/tool/mucertify
```

3. Clone the optional plugin repositories:
```bash
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-tool_mutrain.git admin/tool/mutrain
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-customfield_mutrain.git customfield/field/mutrain
   git clone -b MOODLE_400_STABLE https://github.com/moodleworkplace/moodle-tool_certificate.git admin/tool/tool_certificate
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-certificateelement_muprog.git admin/tool/certificate/element/muprog
   git clone -b MOODLE_405_STABLE https://github.com/mutms/moodle-certificateelement_mucertify.git admin/tool/certificate/element/mucertify
```

4. Continue with the <a href="https://docs.moodle.org/405/en/Installing_Moodle" target="_blank" rel="noopener">standard Moodle installation</a>.
