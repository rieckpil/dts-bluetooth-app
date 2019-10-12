import { Injectable } from "@angular/core";
import { CalculationService } from "./calculation.service";
import { DataValues } from "../interface/data-values";

@Injectable({
  providedIn: "root"
})
export class ByteArrayParsingService {
  constructor(private clac: CalculationService) {}

  parseAdvertisment(advertising) {
    const uint8View = new Uint8Array(advertising);
    const typeOfData = (uint8View[26] >>> 6) & 0xff;

    const ObjValue: DataValues = {
      batteryLevel: null,
      stepCount: null,
      footStrike: null,
      rangeOfMotion: null,
      distance: null,
      speed: null,
      cadence: null,
      strideLen: null
    };

    switch (typeOfData) {
      case 3:
        ObjValue.batteryLevel = this.clac.batteryParsing(uint8View);
        ObjValue.stepCount = this.clac.stepCountParsing(uint8View);
        break;
      case 2:
        ObjValue.pronation = this.clac.pronation(uint8View);
        ObjValue.footStrike = this.clac.footStrike(uint8View);
        ObjValue.rangeOfMotion = this.clac.rangeOfMotion(uint8View);
        break;
      case 1:
        ObjValue.distance = this.clac.distance(uint8View);
        break;
      case 0:
        ObjValue.speed = this.clac.speedParsing(uint8View);
        ObjValue.cadence = this.clac.cadence(uint8View);
        ObjValue.strideLen = this.clac.strideLen(uint8View);
        break;
      default:
        console.log("nothing");
    }

    return ObjValue;
  }
}
