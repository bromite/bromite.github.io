---
title: Bromite DNS-over-HTTPS
description: Information about the DNS-over-HTTPS (DoH) feature of Bromite
timezone: Europe/Berlin
logo: /bromite.png
image: /bromite.png
---
# DNS-over-HTTPS

Since [release 67.0.3396.88](https://github.com/bromite/bromite/releases/tag/67.0.3396.88) it is possible to enable [DNS-over-HTTPS](https://en.wikipedia.org/wiki/DNS_over_HTTPS).

This feature is disabled by default.

Enable DoH from Settings -> Privacy -> Secure DNS and then enter one or more space-separated DoH template URLs.

If the URL contains `{dns}` then GET requests will be issued (otherwise the default are POST requests).

List of some public resolvers (in no specific order and with no endorsement):

* AdGuard: `https://dns.adguard.com/dns-query`
* Quad9: `https://9.9.9.9/dns-query`
* Google: `https://dns.google/dns-query`
* Cloudflare: `https://cloudflare-dns.com/dns-query`

See also: [extensive list maintained by the DNS Privacy Project](https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Public+Resolvers).

# Verify

You can verify your current active DNS resolver with:

[https://www.dnsleaktest.com](https://www.dnsleaktest.com)

{% include donate.html %}

# Features

The `User-Agent`, `Accept-Language` and brotli compression are not advertised via HTTP headers to avoid user information leak.

# Limitations

* DNS-over-HTTPS does not work when using a custom [proxy configuration](./ProxyConfiguration)
* DNS-over-HTTPS will automatically fallback to regular DNS queries in case of failures; this is disabled starting from version `73.0.3683.79`

# History
* the feature was available as a flag until version `78.0.3904.114`
