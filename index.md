---
title: Bromite home page
description: Bromite is Chromium + ad blocking; take back your browser
keywords: bromite, browser, chromium, adblock, android, daily, arm, arm64, 4.4, 5.0, 5.1, 6.0, 7.0, 7.1, 8.0, kitkat, lollipop, marshmallow, nougat, oreo, aroma, super, stock, full, mini, micro, nano, pico, tvstock
timezone: Europe/Berlin
---

<script type="text/javascript">
function radioClick(obj) {
	if (obj.name == 'arch') {
		if (obj.value == 'arm64') {
			document.getElementById('sdk_16').disabled = true;
			document.getElementById('sdk_21').disabled = true;
			document.getElementById('sdk_24').checked = true;

			document.getElementById('target_monochrome_public_apk').disabled = false;
			document.getElementById('target_chrome_public_apk').disabled = true;
			document.getElementById('target_chrome_modern_public_apk').disabled = true;
			document.getElementById('target_monochrome_public_apk').checked = true;
		} else {
			document.getElementById('sdk_16').disabled = false;
			document.getElementById('sdk_21').disabled = false;
			document.getElementById('target_chrome_public_apk').disabled = false;
			document.getElementById('target_chrome_modern_public_apk').disabled = false;
		}
	} else if (obj.name == 'sdk') {
		switch (obj.value) {
			case '16':
				document.getElementById('target_monochrome_public_apk').disabled = true;
				document.getElementById('target_chrome_modern_public_apk').disabled = true;
				document.getElementById('target_chrome_public_apk').checked = true;
				break;
			case '21':
				document.getElementById('target_monochrome_public_apk').disabled = true;
				document.getElementById('target_chrome_modern_public_apk').disabled = false;
				document.getElementById('target_chrome_modern_public_apk').checked = true;
				break;
			case '24':
				document.getElementById('target_monochrome_public_apk').disabled = false;
				document.getElementById('target_chrome_modern_public_apk').disabled = false;
				document.getElementById('target_monochrome_public_apk').checked = true;
				break;
			
		}
	}
}

function doDownload(){
}
</script>

# Take back your browser

<img src="https://www.bromite.org/android-icon-192x192.png" width="96" alt="Bromite" />

Bromite is Chromium plus ad blocking; take back your browser!

# Download

|Architecture	|Android version|Variant		|
|:---		|---		|:---			|
|<label for="arch_arm"><input onclick="radioClick(this)" value="arm" type="radio" name="arch" id="arch_arm" checked />ARM</label>		|<label for="sdk_16"><input onclick="radioClick(this)"  type="radio" name="sdk" id="sdk_16" value="16" checked />Jelly Bean and above</label>	|<label for="target_chrome_public_apk"><input onclick="radioClick(this)"  type="radio" name="target" id="target_chrome_public_apk" value="chrome_public_apk" checked />chrome_public_apk</label>	|
|<label for="arch_arm64"><input onclick="radioClick(this)" value="arm64" type="radio" name="arch" id="arch_arm64"/>ARM64</label>		|<label for="sdk_21"><input onclick="radioClick(this)"  type="radio" name="sdk" id="sdk_21" value="21" />Lollipop and above</label>	|<label for="target_chrome_modern_public_apk"><input onclick="radioClick(this)"  type="radio" name="target" id="target_chrome_modern_public_apk" value="chrome_modern_public_apk" />chrome_modern_public_apk</label>|
|		|<label for="sdk_24"><input onclick="radioClick(this)"  type="radio" name="sdk" id="sdk_24" value="24" />Nougat and above</label>	|<label for="target_monochrome_public_apk"><input onclick="radioClick(this)"  type="radio" name="target" id="target_monochrome_public_apk" value="monochrome_public_apk" />monochrome_public_apk</label>|

<input type="button" value="Download" onclick="doDownload()" />

[All available downloads](https://github.com/bromite/bromite/releases)

# Donate

Please donate to support development of Bromite and the costs for the build system.

Support development with a donation of 3 EUR: [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JP3XTQPVRNET2)

Support development with a free amount donation: [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LC7Q6A3UAQPY8)

BTC donations address: `3MkC3idL61npQSCxL1gceksmRTkNkiCPcG`

ETH donations address: `0xf47ff39223d828f99fec5ab53bd068c5c0522042`
