import { Component, OnInit, NgZone } from "@angular/core";
import { BLE } from "@ionic-native/ble/ngx";
import { ByteArrayParsingService } from "../service/byte-array-parsing.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  advertisecounter = 0;
  deviceId = null;
  deviceBattery = null;
  deviceStepCounter = null;
  footStrike = null;
  rangeOfMotion = null;
  distance = null;
  strideLen = null;
  pronation = null;
  speed = null;
  cadence = null;

  constructor(
    private ble: BLE,
    private bap: ByteArrayParsingService,
    private _ngZone: NgZone
  ) {
    this.ble
      .startScanWithOptions([], { reportDuplicates: true })
      .subscribe(data => {
        this.deviceId = data.id;

        if (this.deviceId.startsWith("00:21:2E:03:D4:")) {
          let advCount = this.advertisecounter + 1;

          const output = this.bap.parseAdvertisment(data.advertising);

          this._ngZone.run(() => {
            this.deviceBattery = output.batteryLevel;
            this.advertisecounter = advCount;
            this.footStrike = output.footStrike;
            this.rangeOfMotion = output.rangeOfMotion;
            this.distance = output.distance;
            this.strideLen = output.strideLen;
            this.pronation = output.pronation;
            this.speed = output.speed;
            this.cadence = output.cadence;
          });

          console.log("deviceId: ", this.deviceId);
          console.log(data.advertising);
          console.log("data: ", this.bap.parseAdvertisment(data.advertising));
        }
      });
  }
}
