import { TestBed } from "@angular/core/testing";

import { ByteArrayParsingService } from "./byte-array-parsing.service";

describe("ByteArrayParsingService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ByteArrayParsingService = TestBed.get(
      ByteArrayParsingService
    );
    expect(service).toBeTruthy();
  });
});
