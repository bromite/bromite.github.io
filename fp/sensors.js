function detectSensors() {

if ('DeviceMotionEvent' in window) {
  var onDeviceMotion = function (eventData) {
    tripletHandler('moDeviceMotionAccel', eventData.acceleration);
    tripletHandler('moDeviceMotionAccelGrav', eventData.accelerationIncludingGravity);
    tripletHandler("moDeviceMotionRotation", {x: eventData.rotationRate.alpha, y: eventData.rotationRate.beta, z: eventData.rotationRate.gamma});
    intervalHandler("moDeviceMotionInterval", eventData.interval);
  }

  window.addEventListener('devicemotion', onDeviceMotion, false);
}

if ('LinearAccelerationSensor' in window) {
  let lastReadingTimestamp;
  let accelerometer = new LinearAccelerationSensor();
  accelerometer.addEventListener('reading', e => {
    if (lastReadingTimestamp) {
      intervalHandler("moGenericSensorInterval", Math.round(accelerometer.timestamp - lastReadingTimestamp));
    }
    lastReadingTimestamp = accelerometer.timestamp
    tripletHandler('moAccel', accelerometer);
  });
  accelerometer.start();
}

if ('GravitySensor' in window) {
  let gravity = new GravitySensor();
  gravity.addEventListener('reading', e => tripletHandler('moAccelGrav', e));
  gravity.start();
}

if ('Gyroscope' in window) {
  let gyroscope = new Gyroscope();
  gyroscope.addEventListener('reading', e => {
     // event data does not contain the coordinates
     tripletHandler("moGenericSensorRotation", gyroscope);
  });
  gyroscope.start();
}

if ('Magnetometer' in window) {
  let mm = new Magnetometer();

  mm.addEventListener('reading', e => tripletHandler("moMagneto", e));
  mm.onerror = event => console.log(event.error.name, event.error.message);
  mm.start();
}
}

function tripletHandler(targetId, acceleration) {
  var info, xyz = "[X, Y, Z]";

  info = xyz.replace("X", acceleration.x);
  info = info.replace("Y", acceleration.y);
  info = info.replace("Z", acceleration.z);

  document.getElementById(targetId).innerHTML = info;
}

function intervalHandler(id, interval) {
  document.getElementById(id).innerHTML = interval;
}
