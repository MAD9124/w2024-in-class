const assert = require("assert");

const {
  goodResponse,
  notFoundResponse,
  badRequestResponse,
  convertJSON,
  requestFactory,
} = require("./helpers");
const { getUsers, createUser } = require("./db");
const { mockUsers, MOCK_OWNER_ID } = require("./mocks/user");

const USER_ID = MOCK_OWNER_ID.toString();
const BAD_ID = "123412341234123412341234";

const EXPECTED_USER = convertJSON(mockUsers[0]);
const request = requestFactory("/api/users");

describe("USER RESOURCE", () => {
  describe("getAll", () => {
    beforeEach(async () => {
      await Promise.all(mockUsers.map(createUser));
    });
    it("happy path", async () => {
      const { data, status } = await request("get", "/");

      goodResponse(data, status);
      assert(Array.isArray(data.data), "Expected data to be an array");

      const dbUsers = await getUsers();
      assert.deepStrictEqual(
        data.data,
        dbUsers,
        "Expected to get the users from the db",
      );
    });
  });

  describe("getOne", async () => {
    beforeEach(async () => {
      await createUser(mockUsers[0]);
    });
    it("happy path", async () => {
      const { data, status } = await request("get", `/${USER_ID}`);
      const [dbUser] = await getUsers();

      goodResponse(data, status);
      assert.deepStrictEqual(dbUser, data.data, "Expected correct response");
    });
    it("should throw 404", async () => {
      const { data, status } = await request("get", `/${BAD_ID}`);

      notFoundResponse(data, status);
    });
  });

  describe("create", () => {
    it("happy path", async () => {
      const newUser = {
        firstName: "Test",
        lastName: "Tester",
        email: "test@test.ca",
      };

      const { data, status } = await request("post", "/", newUser);
      assert.strictEqual(status, 201, "Expected status 201");
      assert("data" in data, "Expected key of `data`");

      const [dbUser] = await getUsers();
      assert.deepStrictEqual(dbUser, data.data, "Expected update to be saved");

      delete data.data._id;
      assert.deepStrictEqual(
        newUser,
        data.data,
        "Expect correct data to be returnd",
      );
    });
  });

  describe("replace", () => {
    beforeEach(async () => {
      await createUser(mockUsers[0]);
    });
    it("happy path", async () => {
      const updatedUser = {
        firstName: "Test",
        lastName: "Tester",
        email: "test@test.ca",
      };

      const { data, status } = await request("put", `/${USER_ID}`, updatedUser);
      goodResponse(data, status);

      const [dbUser] = await getUsers();
      assert.deepStrictEqual(dbUser, data.data, "Expected correct response");
      assert.deepStrictEqual(
        { ...updatedUser, _id: USER_ID },
        data.data,
        "expected correct data to be saved",
      );
    });
    it("should throw 400", async () => {
      const { data, status } = await request("put", `/${USER_ID}`, {});

      badRequestResponse(data, status);
    });
    it("should throw 404", async () => {
      const { data, status } = await request("put", `/${BAD_ID}`, {
        firstName: "Test",
        lastName: "Tester",
        email: "test@test.ca",
      });

      notFoundResponse(data, status);
    });
  });

  describe("update", () => {
    beforeEach(async () => {
      await createUser(mockUsers[0]);
    });
    it("happy path firstName", async () => {
      const updatedUser = {
        firstName: "Edit",
      };

      const { data, status } = await request(
        "patch",
        `/${USER_ID}`,
        updatedUser,
      );

      goodResponse(data, status);

      const [dbUser] = await getUsers();
      assert.deepStrictEqual(dbUser, data.data, "Expected correct response");
      assert.deepStrictEqual(dbUser, { ...EXPECTED_USER, ...updatedUser });
    });
    it("happy path lastName", async () => {
      const updatedUser = {
        lastName: "edit",
      };

      const { data, status } = await request(
        "patch",
        `/${USER_ID}`,
        updatedUser,
      );

      goodResponse(data, status);

      const [dbUser] = await getUsers();
      assert.deepStrictEqual(dbUser, data.data, "Expected correct response");
      assert.deepStrictEqual(dbUser, { ...EXPECTED_USER, ...updatedUser });
    });
    it("happy path email", async () => {
      const updatedUser = {
        email: "email@email.com",
      };

      const { data, status } = await request(
        "patch",
        `/${USER_ID}`,
        updatedUser,
      );

      goodResponse(data, status);

      const [dbUser] = await getUsers();
      assert.deepStrictEqual(dbUser, data.data, "Expected correct response");
      assert.deepStrictEqual(dbUser, { ...EXPECTED_USER, ...updatedUser });
    });
    it("should not allow random keys", async () => {
      const updatedUser = {
        script: "malware",
      };

      const { data, status } = await request(
        "patch",
        `/${USER_ID}`,
        updatedUser,
      );

      goodResponse(data, status);

      assert.deepStrictEqual(
        EXPECTED_USER,
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
    });

    it("happy path", async () => {
      const { data, status } = await request("delete", `/${USER_ID}`);

      goodResponse(data, status);

      assert.deepStrictEqual(
        EXPECTED_USER,
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
