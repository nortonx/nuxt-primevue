import { assert, describe, expect, test } from "vitest";

describe("Nuxt Test Suite", () => {
  test("JSON conversion", () => {
    const input = { a: 1, b: 2 };

    const output = JSON.stringify(input);
    expect(input).toEqual({ a: 1, b: 2 });
    expect(output).toEqual('{"a":1,"b":2}');
    assert.deepEqual(JSON.parse(output), input, "matches original");
  });
});
