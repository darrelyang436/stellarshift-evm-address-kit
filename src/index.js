"use strict";

function isAddress(addr) {
  return /^0x[0-9a-fA-F]{40}$/.test(String(addr || ""));
}

function toChecksum(addr) {
  const h = String(addr || "").replace(/^0x/i, "").toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(h)) throw new Error("bad address");
  return "0x" + h;
}

function isZeroAddress(addr) {
  return toChecksum(addr) === "0x" + "0".repeat(40);
}

module.exports = { isAddress, toChecksum, isZeroAddress };
