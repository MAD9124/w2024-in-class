const assert = require("assert");

const {
  goodResponse,
  notFoundResponse,
  badRequestResponse,
  convertJSON,
  requestFactory,
} = require("./helpers");
const { createPet, getPets, getPetsRaw, createUser } = require("./db");
const { mockPets, MOCK_PET_ID } = require("./mocks/pet");
const { mockUsers, MOCK_OWNER_ID } = require("./mocks/user");

const PET_ID = MOCK_PET_ID.toString();
const OWNER_ID = MOCK_OWNER_ID.toString();
const BAD_ID = "123412341234123412341234";

const EXPECTED_PET = convertJSON({
  ...mockPets[0],
  owner: mockUsers[0],
});
const request = requestFactory("/api/pets");

describe("PET RESOURCE", () => {
  describe("getAll", () => {
    beforeEach(async () => {
      await createUser(mockUsers[0]);
      await Promise.all(mockPets.map(createPet));
    });
    it("happy path", async () => {
      const { data, status } = await request("get", "/");

      goodResponse(data, status);
      assert(Array.isArray(data.data), "Expected data to be an array");

      const dbPets = await getPets();
      assert.deepStrictEqual(
        data.data,
        dbPets,
        "Expected to get the pets from the db",
      );
    });
  });

  describe("getOne", async () => {
    beforeEach(async () => {
      await createUser(mockUsers[0]);
      await createPet(mockPets[0]);
    });
    it("happy path", async () => {
      const { data, status } = await request("get", `/${PET_ID}`);
      const [dbPet] = await getPets();

      goodResponse(data, status);
      assert.deepStrictEqual(dbPet, data.data, "Expected correct response");
    });
    it("should throw 404", async () => {
      const { data, status } = await request("get", `/${BAD_ID}`);

      notFoundResponse(data, status);
    });
  });

  describe("create", () => {
    it("happy path", async () => {
      const newPet = {
        name: "Test",
        type: "test",
        tricks: ["testA", "testB"],
        owner: OWNER_ID,
      };

      const { data, status } = await request("post", "/", newPet);
      assert.strictEqual(status, 201, "Expected status 201");
      assert("data" in data, "Expected key of `data`");

      const [dbPet] = await getPetsRaw();
      assert.deepStrictEqual(dbPet, data.data, "Expected update to be saved");

      delete data.data._id;
      assert.deepStrictEqual(
        newPet,
        data.data,
        "Expect correct data to be returnd",
      );
    });
    it("should throw 400", async () => {
      const { data, status } = await request("post", "/", {});

      badRequestResponse(data, status);
    });
    it("should throw 400 for invalid array types", async () => {
      const { data, status } = await request("post", "/", {
        name: "Test",
        type: "test",
        tricks: [1, {}],
      });

      badRequestResponse(data, status);
    });
  });

  describe("replace", () => {
    beforeEach(async () => {
      await createUser(mockUsers[0]);
      await createPet(mockPets[0]);
    });
    it("happy path", async () => {
      const updatedPet = {
        name: "Update",
        type: "update",
        tricks: ["A", "B"],
        owner: OWNER_ID,
      };

      const { data, status } = await request("put", `/${PET_ID}`, updatedPet);
      goodResponse(data, status);

      const [dbPet] = await getPets();
      assert.deepStrictEqual(dbPet, data.data, "Expected correct response");
      assert.deepStrictEqual(
        { ...updatedPet, owner: EXPECTED_PET.owner, _id: PET_ID },
        data.data,
        "expected correct data to be saved",
      );
    });
    it("should throw 400", async () => {
      const { data, status } = await request("put", `/${PET_ID}`, {});

      badRequestResponse(data, status);
    });
    it("should throw 404", async () => {
      const { data, status } = await request("put", `/${BAD_ID}`, {
        name: "Update",
        type: "update",
        tricks: ["A", "B"],
        owner: OWNER_ID,
      });

      notFoundResponse(data, status);
    });
  });

  describe("update", () => {
    beforeEach(async () => {
      await createUser(mockUsers[0]);
      await createPet(mockPets[0]);
    });
    it("happy path name", async () => {
      const updatedPet = {
        name: "Edit",
      };

      const { data, status } = await request("patch", `/${PET_ID}`, updatedPet);

      goodResponse(data, status);

      const [dbPet] = await getPets();
      assert.deepStrictEqual(dbPet, data.data, "Expected correct response");
      assert.deepStrictEqual(dbPet, { ...EXPECTED_PET, name: "Edit" });
    });
    it("happy path type", async () => {
      const updatedPet = {
        type: "edit",
      };

      const { data, status } = await request("patch", `/${PET_ID}`, updatedPet);

      goodResponse(data, status);

      const [dbPet] = await getPets();
      assert.deepStrictEqual(dbPet, data.data, "Expected correct response");
      assert.deepStrictEqual(dbPet, { ...EXPECTED_PET, type: "edit" });
    });
    it("happy path tricks", async () => {
      const updatedPet = {
        tricks: [],
      };

      const { data, status } = await request("patch", `/${PET_ID}`, updatedPet);

      goodResponse(data, status);

      const [dbPet] = await getPets();
      assert.deepStrictEqual(dbPet, data.data, "Expected correct response");
      assert.deepStrictEqual(dbPet, { ...EXPECTED_PET, tricks: [] });
    });
    it("should not allow random keys", async () => {
      const updatedPet = {
        script: "malware",
      };

      const { data, status } = await request("patch", `/${PET_ID}`, updatedPet);

      goodResponse(data, status);

      assert.deepStrictEqual(
        EXPECTED_PET,
        data.data,
        "Expected correct response",
      );
    });
    it("should throw 404", async () => {
      const { data, status } = await request("patch", `/${BAD_ID}`, {
        name: "test",
      });

      notFoundResponse(data, status);
    });
  });

  describe("delete", () => {
    beforeEach(async () => {
      await createUser(mockUsers[0]);
      await createPet(mockPets[0]);
    });

    it("happy path", async () => {
      const { data, status } = await request("delete", `/${PET_ID}`);

      goodResponse(data, status);

      assert.deepStrictEqual(
        EXPECTED_PET,
        data.data,
        "Expected correct response",
      );
    });
    it("should throw 404", async () => {
      const { data, status } = await request("delete", `/${BAD_ID}`);
      notFoundResponse(data, status);
    });
  });
});
