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

Support development with a donation of 3 EUR: 
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="display:inline; background-color: inherit">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input title="Donate 3 EUR for Bromite development" type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="donate via PayPal">
</form>

Support development with a free amount donation:
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="display:inline; background-color: inherit">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input title="Donate an amount for Bromite development" type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="donate via PayPal">
</form>

BTC donations address: `3MkC3idL61npQSCxL1gceksmRTkNkiCPcG`

ETH donations address: `0xf47ff39223d828f99fec5ab53bd068c5c0522042`
