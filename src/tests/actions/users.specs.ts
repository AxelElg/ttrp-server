import { assert, expect } from "chai"
import { addUser, getUser, updateUser } from "../../domain/actions/users"

describe("testing users actions", async () => {
  let testUserId: number

  const testUser = {
    name: "John",
    email: "john@email.com",
    password: "drowssap"
  }
  const testUserChanges1 = {
    name: "Jane"
  }
  const testUserChanges2 = {
    name: "bill",
    email: "bill@email.com"
  }
  it("test adding user", async () => {
    const user = await addUser(testUser)

    expect(user).to.be.an("object").and.to.have.keys(["id", "name", "email", "createdAt"])
    assert.equal(user.name, testUser.name)
    assert.equal(user.email, testUser.email)

    testUserId = user.id
  })
  it("test getting user", async () => {
    const user = await getUser(testUserId)
    expect(user).to.be.an("object").and.to.have.keys(["id", "name", "email", "createdAt"])
    assert.equal(user.id, testUserId)
    assert.equal(user.name, testUser.name)
    assert.equal(user.email, testUser.email)
  })

  it("test updating user (on one point)", async () => {
    let user = await updateUser(testUserId, testUserChanges1)
    expect(user).to.be.an("object").and.to.have.keys(["id", "name", "email", "createdAt"])
    assert.equal(user.id, testUserId)
    assert.equal(user.name, testUserChanges1.name)
    assert.equal(user.email, testUser.email)
  })
  it("test updating user (on all point)", async () => {
    let user = await updateUser(testUserId, testUserChanges2)
    assert.equal(user.name, testUserChanges2.name)
    assert.equal(user.email, testUserChanges2.email)
  })
  it("test getting rid of user")
})
