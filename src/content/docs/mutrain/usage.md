---
title: Credits usage
description: How to configure and use Training credits in MuTMS Programs.
---

Students accumulate training credits by completing courses and programs. The value of each course or program
is assigned via *Training credits* custom fields.

To use training credits in programs you need to: create a Training credits custom field for courses and/or
programs, create a credit framework, associate the credit field with the framework, and finally add the
framework as a program content item.

## Set up credits for course completion

1. Log in as an administrator.
2. Navigate to **Site administration > Courses > Default settings > Course custom fields**.
3. Press **Add a new category** if no custom field category exists yet.
4. In the **Add a new custom field** dropdown, select **Training credit custom field** to create a new field.
5. Navigate to **Site administration > Training credits > Credit frameworks**.
6. Press **Add framework**, specify a framework name, and set the **Required training total**.
7. Click the framework name to open its details page, then press **Add field** and select the course
   training credit field created above.
8. Navigate to **Site administration > Courses > Manage courses and categories** and set the number of
   training credits for each course by editing its custom field value.

## Set up credits for program completion

1. Log in as an administrator.
2. Navigate to **Site administration > Programs > Program custom fields**.
3. Press **Add a new category** if no custom field category exists yet.
4. In the **Add a new custom field** dropdown, select **Training credit custom field** to create a new field.
5. To create a new framework for program completions, follow steps 5–7 above. To add the field to an
   existing framework, open the framework details page and press **Add field**.

## Add a credit framework as a program item

1. Log in as an administrator or site manager.
2. Create one or more credit frameworks as described above.
3. Create a new program or open an existing one via **Site administration > Programs > Program management**.
4. Navigate to the **Content** tab.
5. Click the **Append item** icon in the Actions column and select the framework in the **Training** field.

:::note
Training credits can only be earned in courses where the user is already enrolled. Unlike course items,
credit frameworks do not enrol students in any courses automatically.
:::
