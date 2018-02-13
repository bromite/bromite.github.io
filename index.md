---
title: Bromite
description: Bromite is Chromium + ad blocking and privacy; take back your browser
keywords: bromite, browser, chromium, adblock, android, privacy, amp, arm, arm64, 4.4, 5.0, 5.1, 6.0, 7.0, 7.1, 8.0, kitkat, lollipop, marshmallow, nougat, oreo, aroma, super, stock, full, mini, micro, nano, pico, tvstock
timezone: Europe/Berlin
---

<script type="text/javascript">
function radioClick(obj) {
	if (obj.name == 'arch') {
		if (obj.value == 'arm64') {
			document.getElementById('sdk_21').checked = true;
		}
	}
}

function doDownload() {
	var arch, target;

	var objs = document.getElementsByName('arch');
	for (var i = 0; i < objs.length; i++) {
		if (objs[i].checked) {
			arch = objs[i].value;
			break;
		}
	}
	objs = document.getElementsByName('sdk');
	for (var i = 0; i < objs.length; i++) {
		if (objs[i].checked) {
			switch (objs[i].value) {
				case '16':
					target = 'ChromePublic';
				break;
				case '21': case '24':
					target = 'ChromeModernPublic';
				break;
			}
			break;
		}
	}
	if (arch == '' || target == '')
		return;

	window.location.href = 'https://github.com/bromite/bromite/releases/download/{{ site.latest_release }}/' + arch + '_' + target + '.apk';
}

</script>

# Take back your browser

<img title="Bromite - Take back your browser!" src="https://www.bromite.org/android-icon-192x192.png" width="96" alt="Bromite" />

Bromite is Chromium plus ad blocking and privacy enhancements; take back your browser!

Main features:
* baked-in adblock engine with filters from EasyList, EasyPrivacy and others
* remove click-tracking and AMP from Google search results
* StartPage search engine
* DuckDuckGo search engine
* some privacy enhancement patches from Inox patchset, ungoogled-chromium and Iridium projects
* all codecs included (proprietary, open H.264 etc.)

See the full features list here: [README](https://github.com/bromite/bromite/blob/master/README.md#features).

# Other resources

* [Wiki](https://github.com/bromite/bromite/wiki)
* [Official Thread on XDA Developers forums](https://forum.xda-developers.com/android/apps-games/app-bromite-chromium-plus-adblocking-t3687258)

# Download

Android v4.1 and above are supported.

Current stable version: <strong>{{ site.latest_release }}</strong>

|Architecture	|Android version	|
|:---		|---		|
|<label for="arch_arm"><input onclick="radioClick(this)" value="arm" type="radio" name="arch" id="arch_arm" checked />ARM</label>		|<label for="sdk_16"><input onclick="radioClick(this)"  type="radio" name="sdk" id="sdk_16" value="16" />Jelly Bean and above (SDK16)</label>	|
|<label for="arch_arm64"><input onclick="radioClick(this)" value="arm64" type="radio" name="arch" id="arch_arm64"/>ARM64</label>		|<label for="sdk_21"><input onclick="radioClick(this)"  type="radio" name="sdk" id="sdk_21" value="21" checked />Lollipop and above (SDK21)</label>	|
|<label for="arch_x86"><input onclick="radioClick(this)" value="x86" type="radio" name="arch" id="arch_x86"/>X86</label>		|<label for="sdk_24"><input onclick="radioClick(this)"  type="radio" name="sdk" id="sdk_24" value="24" />Nougat and above (SDK24)</label>	| |

<input id="download_button" type="button" value="Download v{{ site.latest_release }}" onclick="doDownload()" style="font-size: 1em" />

[All available releases](https://github.com/bromite/bromite/releases)

# Donate

Please donate to support development of Bromite and the costs for the build system.

Support development with a donation of 3 EUR: [![paypal](./btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JP3XTQPVRNET2)

Support development with a free amount donation: [![paypal](./btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LC7Q6A3UAQPY8)

<a href="bitcoin:3MkC3idL61npQSCxL1gceksmRTkNkiCPcG">BTC donations address</a>: `3MkC3idL61npQSCxL1gceksmRTkNkiCPcG`

ETH donations address: `0xf47ff39223d828f99fec5ab53bd068c5c0522042`
