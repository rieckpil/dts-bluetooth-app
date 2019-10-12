import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalculationService {
  constructor() {}
  // Type 0
  /* Speed - 11 bits - Unit is in m/s with a resolution of 1/256 s (we normalize it to cm/s)
    Cadence - 8 bits - Unit is in 1/minute (or RPM) with a resolutions of 1 1/min (or 1 RPM)
    StrideLength - 11 bits - Unit is in meter with a resolution of 1/100 m (or centimeter) */
  speedParsing(data) {
    let stepSpeed = (data[26] & 0x3f) | (data[25] >>> 3);
    stepSpeed *= 400;
    stepSpeed /= 1024;

    console.log("speed: ", stepSpeed);
    return stepSpeed;
  }

  cadence(data) {
    let cadance = (data[25] & 0x07) | (data[24] >>> 3);
    console.log("cadance: ", cadance);
    return cadance;
  }

  strideLen(data) {
    let strideLen = (data[24] & 0x07) | (data[25] | data[24] | data[23]);
    console.log("strideLen: ", strideLen);
    return strideLen;
  }

  //Type 1
  /* TotalDistance - 30 bits - Unit is in meter with a resolution of 1/10 m (or decimeter) */
  distance(data) {
    let distanceOutput = (data[24] & 0x3f) | (data[25] | data[24] | data[23]);
    console.log("distance: ", distanceOutput);
    return distanceOutput;
  }

  //Type 2
  /* Pronation - 10 bits - Unit is in degree with a resolution of 1/10 °
    FootStrike - 10 bits - Unit is in degree with a resolution of 1/10 °
    RangeOfMotion - 10 bits - Unit is in degree with a resolution of 1/10 ° */
  pronation(data) {
    let pronation = (data[26] & 0x3f) | (data[25] >>> 4);
    console.log("pronation: ", pronation);
    return pronation;
  }

  footStrike(data) {
    let footStrike = (data[25] & 0x0f) | (data[24] >>> 2);
    console.log("footStrike: ", footStrike);
    return footStrike;
  }

  rangeOfMotion(data) {
    let rangeOfMotionOutput = (data[24] & 0x03) | data[23];
    console.log("rangeOfMotionOutput: ", rangeOfMotionOutput);
    return rangeOfMotionOutput;
  }

  // Type 3
  /* BatteryVoltage - 8 bits - The offset is in 10 milli volt steps from 1500,
    unit is in milli volt.
    Hence it is value*10+1500 = milli volt.
    StepCount - 21 bits - Unit is in steps */
  batteryParsing(data) {
    let battery = data[23];
    battery *= 10;
    battery += 1500;

    console.log("battery: ", battery);
    return battery;
  }

  stepCountParsing(data) {
    let stepCount = (data[26] & 0x1f) | data[25] | data[24];
    console.log("stepcounter: ", stepCount);
    return stepCount;
  }
}
