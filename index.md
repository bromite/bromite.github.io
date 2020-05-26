---
title: Bromite
description: Bromite is a Chromium fork with ad blocking and enhanced privacy; take back your browser
timezone: Europe/Berlin
apk_prefix: ''
pkg_name: org.bromite.bromite
dl_components: 'bromite'
---
# Take back your browser

<img title="Bromite - Take back your browser!" src="/bromite.png" width="96" alt="Bromite" />

Bromite is a Chromium fork with ad blocking and privacy enhancements; take back your browser!

The main goal is to provide a no-clutter browsing experience without privacy-invasive features and with the addition of a fast ad-blocking engine.

Minimal UI changes are applied to help curbing the idea of "browser as an advertisement platform".

All patches are published under [GNU/GPL v3](https://github.com/bromite/bromite/blob/master/LICENSE) to enable other open source projects' usage.

Bromite is available for Android v4.4 and above.

{% include toc.html %}
{% include news.html %}

# Main features
* native adblock engine with filters from EasyList, EasyPrivacy, uBlock origin and others
* customizable filters via user-provided URL
* remove click-tracking and AMP from search results
* DNS-over-HTTPS support, you can use any DoH endpoint
* [Proxy configuration](https://github.com/bromite/bromite/wiki/ProxyConfiguration) with PAC and custom proxy lists support
* chrome flags to disable custom intents and clear session on exit
* always-incognito mode
* removed privacy-unfriendly features
* privacy enhancement patches from [&rarr; Iridium](https://iridiumbrowser.de/), [&rarr; Inox patchset](https://github.com/gcarq/inox-patchset), [&rarr; Brave](https://brave.com/) and [&rarr; ungoogled-chromium](https://github.com/Eloston/ungoogled-chromium) projects
* security enhancement patches from [GrapheneOS](https://github.com/GrapheneOS) project
* canvas, audio and other anti-fingerprinting mitigations
* import/export bookmarks
* allow playing videos in background
* all codecs included (proprietary, open H.264 etc.)
* [AV1 codec support](https://github.com/bromite/bromite/wiki/AV1-support)
* built with official speed optimizations

See the complete features list here: [&rarr; README](https://github.com/bromite/bromite/blob/master/README.md#features).

{% include donate.html %}
{% include download.html app_name='Bromite' %}

## Other downloads

* [&rarr; All Bromite releases](https://github.com/bromite/bromite/releases)
* [Bromite SystemWebView](/system_web_view)
* [Chromium releases](/chromium)
