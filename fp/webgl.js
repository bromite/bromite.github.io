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

// adapted from https://browserleaks.com/js/webgl.js
function createWebGLImageAndReturnData() {
            var container = document.getElementById('webGLImage');
            var a;
            try {
                var b = document.createElement("canvas");
		b.style.cssText = "border: 2px solid navy";
                b.width = 256,
                b.height = 128,
                a = b.getContext("webgl2", {
                    preserveDrawingBuffer: !0
                }) || b.getContext("experimental-webgl2", {
                    preserveDrawingBuffer: !0
                }) || b.getContext("webgl", {
                    preserveDrawingBuffer: !0
                }) || b.getContext("experimental-webgl", {
                    preserveDrawingBuffer: !0
                }) || b.getContext("moz-webgl", {
                    preserveDrawingBuffer: !0
                })
            } catch (e) {
                console.warn("WebGL Image Hash", e);
            }
            if (null == a)
                return a;
            try {
                var d = a.createBuffer();
                a.bindBuffer(a.ARRAY_BUFFER, d);
                var e = new Float32Array([-.3, .03, 0, .7, -.5, 0, .37, 0.8, 0]);
                a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW),
                d.itemSize = 3,
                d.numItems = 3;
                var f = a.createProgram()
                  , g = a.createShader(a.VERTEX_SHADER);
                a.shaderSource(g, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),
                a.compileShader(g);
                var h = a.createShader(a.FRAGMENT_SHADER);
                a.shaderSource(h, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),
                a.compileShader(h),
                a.attachShader(f, g),
                a.attachShader(f, h),
                a.linkProgram(f),
                a.useProgram(f),
                f.vertexPosAttrib = a.getAttribLocation(f, "attrVertex"),
                f.offsetUniform = a.getUniformLocation(f, "uniformOffset"),
                a.enableVertexAttribArray(f.vertexPosArray),
                a.vertexAttribPointer(f.vertexPosAttrib, d.itemSize, a.FLOAT, !1, 0, 0),
                a.uniform2f(f.offsetUniform, 1, 1),
                a.drawArrays(a.TRIANGLE_STRIP, 0, d.numItems),
                container.prepend(b);
            } catch (e) {
                console.warn("Draw WebGL Image", e);
            }
            var info;
            try {
                var j = new Uint8Array(131072);
                if (a.readPixels(0, 0, 256, 128, a.RGBA, a.UNSIGNED_BYTE, j),
                info = JSON.stringify(j).replace(/,?"[0-9]+":/g, ""),
                "" == info.replace(/^{[0]+}$/g, ""))
                    throw err = "JSON.stringify only ZEROes";
                return j;
            } catch (e) {
                console.warn("WebGL Image readPixels Hash", e);
            }

            return null;
}
