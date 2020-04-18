---
date: 2020-04-17T15:48:32.000Z
layout: post
title: How to add custom domain to a project in netlify?
subtitle: "This session deals with how to add custom domain on netlify project
  deployed manually of by stackbit. "
description: Here are some steps to add custom domain to Netlify project
  deployed either manually or by Stackbit.
image: /assets/img/uploads/netlify_1_postimage.jpg
optimized_image: /assets/img/uploads/netlify_1_postimage.jpg
category: netlify
tags:
  - custom domain
  - netlify
  - stackbit
author: muhammedashfar
paginate: true
---
This tutorial is to **add a custom domain in Netlify project deployed manually or using Stackbit**. For adding custom domain in both manual and Stackbit project steps to be performed is same.

All you need is,

1. **A domain registered from a Domain Provider.**
2. **A [Netlify ](https://www.netlify.com)account.**

Let's see the steps...

\--page-break--

# Adding Domain to Netlify.

* ## First, Sign In to Netlify. In the Netlify dashboard tap "Domains".

  ![adding domain](/assets/img/uploads/adding_domain_1.png "adding domain")

  you will be redirected to **domain adding page.**
* ## In the "Domain" page tap "Add or Register a Domain".

  ![Add/Register Domain](/assets/img/uploads/adding_domain_2.png "Add/Register Domain")

  It will redirect to a window to **add a domain to Netlify DNS**.
* ## Enter your registered domain there and proceed to "Verify".

  After verifying your domain tap on "**Yes, Add Domain**".

  ![Adding Domain](/assets/img/uploads/adding_domain_3.png "Adding Domain")

  After, you will redirect to add DNS Records of your domain. No need of adding any DNS records. Proceed to "Continue".

  ![Continue](/assets/img/uploads/adding_domain_4.png "Continue")
* ## Next, Add the Nameservers provided by Netlify to your domain.

  This is the **important** step for adding domain to Netlify. You can **update the name servers of your domain from your domain registrar**. After updating the nameservers of your domain with Netlify nameservers, wait about **24 hours** for the changes to be effective. (**\*Time may vary**.)

  ![Nameserver update](/assets/img/uploads/adding_domain_5.png "Nameserver update")

  Tap "**Done**".

\--page-break--

# Adding Domain to your Project.

* ## Go to "Netlify Dashboard". From there choose the project that you wanted to add custom domain.

  From the list of Netlify projects, select the project you wanted to add custom domain.

  (**\*here I selected my project which is deployed by Stackbit in Stackbit tutorial section.**)

  ![Choosing project](/assets/img/uploads/adding_domain_6.png "Choosing project")

  After taping on your project, you will be redirect to project details. From there you can find "**Domain Setting**".

  ![Domain Setting](/assets/img/uploads/adding_domain_7.png "Domain Setting")

  In "**Domain Settings**" you can find "**Add Custom Domain**".

  ![Adding Domain](/assets/img/uploads/adding_domain_8.png "Adding Domain")
* ## Now, Add the domain that previously added to Netlify.

  Add the domain that previously connected to Netlify by changing nameservers.

  ![Adding domain](/assets/img/uploads/adding_domain_9.png "Adding domain")

  Proceed to "**Add**".

  ![Adding Domain](/assets/img/uploads/adding_domain_10.png "Adding Domain")

  Proceed to "**Yes, Add Domain**".
* ## Hurrah! Custom domain is added to your Netlify project.

  ![Domain Added](/assets/img/uploads/adding_domain_11.png "Domain Added")

  Netlify is providing free SSL issued by **Let's Encrypt**. After domain is served by Netlify DNS certificate will be issued automatically. In case any error, in the HTTPS section tap "**Forcce HTTPS**".

  ![SSL](/assets/img/uploads/adding_domain_12.png "SSL")
