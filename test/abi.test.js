"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const kit = require("../src");

test("isAddress", () => {
  assert.equal(kit.isAddress("0x0000000000000000000000000000000000000001"), true);
  assert.equal(kit.isZeroAddress("0x0000000000000000000000000000000000000000"), true);
});
