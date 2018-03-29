
// Performs fingerprint as found in https://client.a.pxi.pub/PXmssU3ZQ0/main.min.js
function run_pxi_fp() {
	var pxi_full_buffer;
	var pxi_output = 0, pxi_full_buffer_hash = "";
	try {
     var context;
     if (context = new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100), !context) {
        set_fingerprint('pxi_checksum', 0);
        return;
     }

	  // Create oscillator
	  var pxi_oscillator = context.createOscillator();
	  pxi_oscillator.type = "triangle";
	  pxi_oscillator.frequency.value = 1e4;

	  // Create and configure compressor
	  var pxi_compressor = context.createDynamicsCompressor();
	  pxi_compressor.threshold && (pxi_compressor.threshold.value = -50);
	  pxi_compressor.knee && (pxi_compressor.knee.value = 40);
	  pxi_compressor.ratio && (pxi_compressor.ratio.value = 12);
	  pxi_compressor.reduction && (pxi_compressor.reduction.value = -20);
	  pxi_compressor.attack && (pxi_compressor.attack.value = 0);
	  pxi_compressor.release && (pxi_compressor.release.value = .25);

	  // Connect nodes
	  pxi_oscillator.connect(pxi_compressor);
	  pxi_compressor.connect(context.destination);

	  // Start audio processing
	  pxi_oscillator.start(0);
	  context.startRendering();
	  context.oncomplete = function(event) {
		pxi_output = 0;
		var sha1 = CryptoJS.algo.SHA1.create();
		for (var i = 0; i < event.renderedBuffer.length; i++) {
			sha1.update(event.renderedBuffer.getChannelData(0)[i].toString());
		}
		var hash = sha1.finalize();
		pxi_full_buffer_hash = hash.toString(CryptoJS.enc.Hex);
		set_fingerprint('pxi_full_buffer_hash', pxi_full_buffer_hash);
		
		for (var i = 4500; 5e3 > i; i++) {
		  pxi_output += Math.abs(event.renderedBuffer.getChannelData(0)[i]);
		}

		set_fingerprint('pxi_checksum', pxi_output.toString());
		pxi_compressor.disconnect();
	  }
	} catch (e) {
		console.log('run_pxi_fp', e);
		set_fingerprint('pxi_checksum', 0);
		return;
	}
}
// End PXI fingerprint

// Performs fingerprint as found in some versions of http://metrics.nt.vc/metrics.js
function a(a, b, c) {
    for (var d in b) "dopplerFactor" === d || "speedOfSound" === d || "currentTime" ===
        d || "number" !== typeof b[d] && "string" !== typeof b[d] || (a[(c ? c : "") + d] = b[d]);
    return a
}

function run_nt_vc_fp() {
	var nt_vc_output = 0;
	try {
		var nt_vc_context = window.AudioContext || window.webkitAudioContext;
		if ("function" !== typeof nt_vc_context)
			set_result('nt_vc_output', false);
		else {
			var f = new nt_vc_context,
				d = f.createAnalyser();
			nt_vc_output = a({}, f, "ac-");
			nt_vc_output = a(nt_vc_output, f.destination, "ac-");
			nt_vc_output = a(nt_vc_output, f.listener, "ac-");
			nt_vc_output = a(nt_vc_output, d, "an-");
		}
	} catch (g) {
	}
  set_result('nt_vc_output', nt_vc_output);
}

// Performs fingerprint as found in https://www.cdn-net.com/cc.js
function run_cc_fp() {
	var cc_output = [];

	var audioCtx = new(window.AudioContext || window.webkitAudioContext),
		oscillator = audioCtx.createOscillator(),
		analyser = audioCtx.createAnalyser(),
		gain = audioCtx.createGain(),
		scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1);

	gain.gain.value = 0; // Disable volume
	oscillator.type = "triangle"; // Set oscillator to output triangle wave
	oscillator.connect(analyser); // Connect oscillator output to analyser input
	analyser.connect(scriptProcessor); // Connect analyser output to scriptProcessor input
	scriptProcessor.connect(gain); // Connect scriptProcessor output to gain input
	gain.connect(audioCtx.destination); // Connect gain output to audiocontext destination

	scriptProcessor.onaudioprocess = function (bins) {
		bins = new Float32Array(analyser.frequencyBinCount);
		analyser.getFloatFrequencyData(bins);
		for (var i = 0; i < bins.length; i = i + 1) {
			cc_output.push(bins[i]);
		}

		analyser.disconnect();
		scriptProcessor.disconnect();
		gain.disconnect();
		
		// pick only first 30 elements
		cc_output = cc_output.slice(0, 30)
		var sha1 = CryptoJS.algo.SHA1.create();
		for (var i = 0; i < cc_output.length; i++) {
			sha1.update(cc_output[i].toString());
		}
		var hash = sha1.finalize();
		set_fingerprint('cc_output', hash.toString(CryptoJS.enc.Hex));
	};

	oscillator.start(0);
}

// Performs a hybrid of cc/pxi methods found above
function run_hybrid_fp() {
	var hybrid_output = [];
	var audioCtx = new(window.AudioContext || window.webkitAudioContext),
		oscillator = audioCtx.createOscillator(),
		analyser = audioCtx.createAnalyser(),
		gain = audioCtx.createGain(),
		scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1);

	// Create and configure compressor
	compressor = audioCtx.createDynamicsCompressor();
	compressor.threshold && (compressor.threshold.value = -50);
	compressor.knee && (compressor.knee.value = 40);
	compressor.ratio && (compressor.ratio.value = 12);
	compressor.reduction && (compressor.reduction.value = -20);
	compressor.attack && (compressor.attack.value = 0);
	compressor.release && (compressor.release.value = .25);

	gain.gain.value = 0; // Disable volume
	oscillator.type = "triangle"; // Set oscillator to output triangle wave
	oscillator.connect(compressor); // Connect oscillator output to dynamic compressor
	compressor.connect(analyser); // Connect compressor to analyser
	analyser.connect(scriptProcessor); // Connect analyser output to scriptProcessor input
	scriptProcessor.connect(gain); // Connect scriptProcessor output to gain input
	gain.connect(audioCtx.destination); // Connect gain output to audiocontext destination

	scriptProcessor.onaudioprocess = function (bins) {
		bins = new Float32Array(analyser.frequencyBinCount);
		analyser.getFloatFrequencyData(bins);
		for (var i = 0; i < bins.length; i = i + 1) {
			hybrid_output.push(bins[i]);
		}
		analyser.disconnect();
		scriptProcessor.disconnect();
		gain.disconnect();

		// pick only first 30 elements
		hybrid_output = hybrid_output.slice(0, 30)
		var sha1 = CryptoJS.algo.SHA1.create();
		for (var i = 0; i < hybrid_output.length; i++) {
			sha1.update(hybrid_output[i].toString());
		}
		var hash = sha1.finalize();
		set_fingerprint('hybrid_output', hash.toString(CryptoJS.enc.Hex));
	};

	oscillator.start(0);
}
