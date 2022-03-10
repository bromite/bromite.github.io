
var addrRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/;
var rtcConn, rtcConstr = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.msRTCPeerConnection;
if (!rtcConstr) {
     console.log("switching to iFrame approach");
     var d = document.getElementById("sub_rtc").contentWindow;
     rtcConstr = d.RTCPeerConnection || d.webkitRTCPeerConnection || d.mozRTCPeerConnection || d.msRTCPeerConnection;
}

function webRTCData() {

try {
     rtcConn = new rtcConstr({
         iceServers: [{
         urls: ["stun:stun.l.google.com:19302?transport=udp"]
         }]
     }, {
       optional: [{
            RtpDataChannels: !0
       }]
     })
} catch (e) {
	console.error("failed to init WebRTC:", e);
        return;
}

	rtcConn.onicecandidate = function(e) {
            console.log('offer:', e.target.localDescription.sdp);
            if (!e.candidate) {
                console.error('got no candidate');
                return;
            }
            parseCandidate(e.candidate.candidate)
	};

	rtcConn.createDataChannel("bl");

        try {
            rtcConn.createOffer().then(function(e) {
                rtcConn.setLocalDescription(e)
            })
        } catch (e) {
            console.log("falling back to old constructor", e);
            rtcConn.createOffer(function(e) {
                rtcConn.setLocalDescription(e, function() {}, function() {})
            }, function() { console.error('failed'); })
        }
        setTimeout(function() {
            if (rtcConn.localDescription.sdp) {
              rtcConn.localDescription.sdp.split("\n").forEach(function(e) {
                0 === e.indexOf("a=candidate:") && parseCandidate(e)
              })
            }
        }, 1e3)
}

function parseCandidate(e) {
	console.log("got candidate:", e);
        try {
                var i = addrRegex.exec(e)[1];
                void 0 === a[i] && function(e) {
                    var t = document.getElementById("webrtc_data");
                    t.innerHTML += "<p>Found:" + i + "</p>";
                }(i),
                a[i] = !0
         } catch (e) {
               console.error("failed parsing:", e);
         }
}
