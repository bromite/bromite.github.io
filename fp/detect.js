var myData = {};

function set_result(id, content) {
	myData[id] = content;
	if (id == 'nt_vc_output') {
		content = window.JSON.stringify(content, undefined, 2);
	}
	document.getElementById(id).innerHTML = content;
}

var fingerprints = 0;
function set_fingerprint(id, content) {
	set_result(id, content);

	if (content) fingerprints++;

	// update the counter
	document.getElementById('counter').innerText = fingerprints.toString();
}

function set_message(msg) {
	document.getElementById('message').innerHTML = msg;
}

// called by the last audio test
function set_final_message() {
	// set generation timestamp
	myData["generatedOn"] = Date.now();
	var dlBtn = document.getElementById('downloadButton');
	// make link visible
	dlBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(myData)));
	dlBtn.setAttribute('download', 'fingerprints.json');
	dlBtn.style.visibility = 'visible';

	set_message('All readings complete');
}

function incProgress() {
	document.getElementById('progress').value += 10;
}

function ACTION() {
	// they finish in about 3 seconds

	// There may be weird interference effects if the
	// prints are run sequentially with no delay, hence
	// the interleaving.
	setTimeout(function() {
		run_pxi_fp();
		incProgress();

		setTimeout(function() {
			run_nt_vc_fp();
			incProgress();

			setTimeout(function() {
				run_cc_fp();
				incProgress();

				setTimeout(function() {
					run_hybrid_fp();
					incProgress();

					set_final_message();
				}, 100);
			}, 200);
		}, 140);
	}, 0);

	set_result('navigatorPlatform', navigator.platform);
	set_result('userAgent', navigator.userAgent);
	incProgress();

	//set_fingerprint('clientRectsFp', getClientRectsFp());
	//incProgress();

	var plugins = [];
	for (plugin of navigator.plugins) {
		plugins.push(plugin.name);
	}
	set_result('plugins', plugins);
	incProgress();

	webGLBaseData();
	incProgress();
	webGLDebugData();
	incProgress();

	var canvasDataURI = getCanvasDataURI();
	incProgress();
	if (canvasDataURI) {
		set_result('canvasDataURI', canvasDataURI);

		if (canvasDataURI != "data:,") {
			var img = document.getElementById('canvasImg');
			img.src = canvasDataURI;
			img.style.border = '2px solid navy';

			var sha1 = CryptoJS.algo.SHA1.create();
			sha1.update(canvasDataURI);
			var hash = sha1.finalize();
			set_fingerprint('canvasFpHash', hash.toString(CryptoJS.enc.Hex));
		}
	}
	incProgress();

	set_message('Audio test results should appear below in about 1 second.');
}

function webGLBaseData() {
    var result = [];
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!ctx) {
		return;
    }

    try {
		set_result('glVersion', ctx.getParameter(ctx.VERSION));
		set_result('glRenderer', ctx.getParameter(ctx.RENDERER));
        set_result('glVendor', ctx.getParameter(ctx.VENDOR));
    } catch (e) {
    }
}

function webGLDebugData() {
    var canvas = document.createElement('canvas');
    var ctx1 = canvas.getContext("webgl"), ctx2 = canvas.getContext("experimental-webgl");

    return setDebugData(ctx1) || setDebugData(ctx2);
}

function setDebugData(ctx) {
    try {
        if (ctx.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0) {
			var ext = ctx.getExtension('WEBGL_debug_renderer_info');
			set_result('glDebugVendor', ctx.getParameter(ext.UNMASKED_VENDOR_WEBGL));
			set_result('glDebugRenderer', ctx.getParameter(ext.UNMASKED_RENDERER_WEBGL));

			return true;
        }
    } catch (e) {
    }
    return false;
}

function getCanvasDataURI() {
	try {
		var canvas = document.createElement('canvas');
		canvas.height = 60;
		canvas.width = 400;
		canvasContext = canvas.getContext("2d");
		canvas.style.display = "inline";
		canvasContext.textBaseline = "alphabetic";
		canvasContext.fillStyle = "#f60";
		canvasContext.fillRect(125, 1, 62, 20);
		canvasContext.fillStyle = "#069";
		canvasContext.font = "11pt no-real-font-123";
		canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
		canvasContext.fillStyle = "rgba(102, 204, 0, 0.7)";
		canvasContext.font = "18pt Arial";
		canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);
		return canvas.toDataURL();
	} catch(e){
		return false;
	}
}
