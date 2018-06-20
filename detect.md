---
title: Bromite fingerprinting mitigations test
description: Bromite is Chromium plus ad blocking and enhanced privacy; take back your browser.
keywords: bromite, browser, chromium, adblock, android, privacy, amp, arm, arm64, 8.1, 8.0, oreo, 4.4, 5.0, 5.1, 6.0, 7.0, 7.1, kitkat, lollipop, marshmallow, nougat, aroma, super, stock, full, mini, micro, nano, pico, tvstock, background video playback, fingerprinting
timezone: Europe/Berlin
fptest: true
---

* [Bromite home page](/)

This page helps identifying if common fingerprinting techniques are effective with your browser; no information is stored on any server at the end of the fingerprinting test and you will be offered to download the results as JSON.

<p id="message">If you see this message, something went wrong</p>
<p>Fingerprints found: <span id="counter" style="text-weight:bold">0</span>/8</p>
<progress id="progress" max="100"></progress>
<a id="downloadButton" href="#" style="visibility: hidden">Download this data as JSON</a>

# General

Navigator platform is: <span class="info" id="navigatorPlatform"></span>

User agent is: <span class="info" id="userAgent"></span>

Plugins are: <span class="info" id="plugins"></span>

Your combined unique fingerprint and identicon:

<p><span id="cumulativeFp" class="fingerprint"></span></p>
<img id="identicon" />

# ClientRects
<p>getClientRects fingerprints</p>
<p>String 1: <span class="fingerprint" id="clientRectsFp1"></span></p>
<p>String 2: <span class="fingerprint" id="clientRectsFp2"></span></p>
<p>String 3: <span class="fingerprint" id="clientRectsFp3"></span></p>

<iframe style="width: 100%; height: 230px; border: 2px solid navy" id="rects-iframe" sandbox="allow-same-origin" src="/fp/rects_iframe.html" onload="getRects()" scrolling="no">iFrame Disabled</iframe>

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
