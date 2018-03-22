---
title: Bromite fingerpriting mitigations test
description: Bromite is Chromium plus ad blocking and enhanced privacy; take back your browser. Fingerprint mitigations test page.
keywords: bromite, browser, chromium, adblock, android, privacy, amp, arm, arm64, 8.1, 8.0, 4.4, 5.0, 5.1, 6.0, 7.0, 7.1, kitkat, lollipop, marshmallow, nougat, oreo, aroma, super, stock, full, mini, micro, nano, pico, tvstock, background video
timezone: Europe/Berlin
fptest: true
---

This page helps identifying if common fingerprinting techniques are effective with your browser; no information is stored on any server at the end of the fingerprinting test and you will be offered to download the results as JSON.

<p id="message">If you see this message, something went wrong</p>
<progress id="progress" max="100"></progress>
<a id="downloadButton" href="#" style="visibility: hidden">Download this data as JSON</a>

# General

Navigator platform is: <span class="info" id="navigatorPlatform"></span>

User agent is: <span class="info" id="userAgent"></span>

Plugins are: <span class="info" id="plugins"></span>

# WebGL
<p>glVersion: <span class="info" id="glVersion"></span></p>
<p>glRenderer: <span class="info" id="glRenderer"></span></p>
<p>glVendor: <span class="info" id="glVendor"></span></p>

<p>glDebugRenderer: <span class="info" id="glDebugRenderer"></span></p>
<p>glDebugVendor: <span class="info" id="glDebugVendor"></span></p>

# Canvas
<p>canvas fingerprint: <span class="fingerprint" id="canvasFpHash"></span></p>
<p>canvasDataURI: <textarea readonly="readonly" id="canvasDataURI"></textarea></p>
<img alt="generated canvas image" id="canvasImg" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />

# Audio
<p>cc_output[:30] hash: <span class="fingerprint" id="cc_output"></span></p>
<p>hybrid_output[:30] hash: <span class="fingerprint" id="hybrid_output"></span></p>
<p>pxi_full_buffer_hash: <span class="fingerprint" id="pxi_full_buffer_hash"></span></p>
<p>pxi_checksum: <span class="fingerprint" id="pxi_checksum"></span></p>
<p>nt_vc_output: <pre id="nt_vc_output"></pre></p>
