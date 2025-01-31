test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  //teste updateAt
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  //teste database
  const database = responseBody.dependencies.database;

  //teste version
  expect(database.version).toBeDefined();
  expect(database.version).toBe("16.0");

  //teste max connections
  expect(database.max_connections).toBeDefined();
  expect(database.max_connections).toBe(100);

  //teste opened connections
  expect(database.opened_connections).toBeDefined();
  expect(database.opened_connections).toBe(1);
});
