import { setActivePinia, createPinia } from "pinia";
import { useFormStore } from "../../stores/form.store";
import { test, expect, describe, beforeEach } from "vitest";
import type { FormData } from "../../types/formData.type";

describe("Form store", () => {
  let record: FormData;
  beforeEach(() => {
    setActivePinia(createPinia());

    record = {
      firstName: "John",
      lastName: "Doe",
      email: "jondoe@domain.com",
      password: "password",
      phone: "1234567890",
      country: { code: "US", name: "United States" },
    };
  });
  test("Form store is initialized with empty form", () => {
    const formStore = useFormStore();
    expect(formStore.records).toEqual([]);
  });

  test("Form store can add a record", () => {
    const formStore = useFormStore();
    formStore.add(record);
    expect(formStore.records).toEqual([record]);
  });

  test("Form store can remove a record", () => {
    const formStore = useFormStore();
    formStore.add(record);
    formStore.remove(0);
    expect(formStore.records).toEqual([]);
  });

  test("Form store can clear records", () => {
    const formStore = useFormStore();
    formStore.add(record);
    formStore.clear();
    expect(formStore.records).toEqual([]);
  });
});
