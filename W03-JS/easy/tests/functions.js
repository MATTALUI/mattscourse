const expect = require('chai').expect;
const {
  getString,
  getNumber,
  getNull,
  getBoolean,
  getArray,
} = require("../functions");

describe("getString", () => {
  it("returns a string, any string", () => {
    expect(typeof getString()).to.equal("string");
  });
});

describe("getNumber", () => {
  it("returns a number, any number", () => {
    expect(typeof getNumber()).to.equal("number");
  });
});

describe("getNull", () => {
  it("returns null", () => {
    expect(getNull()).to.equal(null);
  });
});

describe("getBoolean", () => {
  it("returns a boolean, any boolean", () => {
    expect(typeof getBoolean()).to.equal("boolean");
  });
});

describe("getArray", () => {
  it("returns an array, any array", () => {
    expect(Array.isArray(getArray())).to.equal(true);
  });
});