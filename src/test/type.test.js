const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

const server = "http://localhost:3000/";

let token;
let idNewType;

const testType = {
  type: "nuevo",
};

describe("Test Type", () => {
  /**
   * Test the GET
   */
  describe("GET api/type", () => {
    it("It should GET all the types", (done) => {
      chai
        .request(server)
        .get("api/type")
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.should.have.lengthOf.below(3);
          done();
        });
    });
    // Test Error
    it("It should not GET all the type", (done) => {
      chai
        .request(server)
        .get("api/types")
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(404);
          done();
        });
    });
  });

  /**
   * Test the GET by Id
   */
  describe("GET type/:id", () => {
    it("It should get a type by id", (done) => {
      chai
        .request(server)
        .get("api/type/1")
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id");
          res.body.should.have.property("type");
          res.body.id.should.be.eq(1);
          done();
        });
    });
    // Test Error
    it("It should fail to fetch a type by id.", (done) => {
      chai
        .request(server)
        .get("api/type/180")
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(400);
          res.text.should.to.contain("The Id does not not exist in DB");
          done();
        });
    });
  });

  /**
   * Test the POST
   */
  describe("POST type/", () => {
    before((done) => {
      chai
        .request(server)
        .post("api/auth/login")
        .send({ email: "prueba@prueba.com", password: "123456" })
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          res.should.have.status(200);
          res.body.should.property("token");
          done();
        });
    });
    it("It should add a type", (done) => {
      chai
        .request(server)
        .post("api/type")
        .auth(token, { type: "bearer" })
        .send(testType)
        .end((err, res) => {
          if (err) done(err);
          idNewType = res.text.split(",")[0].split(":")[1];
          res.should.have.status(201);
          done();
        });
    });
    it("It should authentication fail when adding a type", (done) => {
      chai
        .request(server)
        .post(`api/type`)
        .send(testType)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(401);
          res.text.should.to.contain("Authentication failed! Token required");
          done();
        });
    });
    it("It should fail the add a type", (done) => {
      delete testType.type;
      chai
        .request(server)
        .post("api/type")
        .auth(token, { type: "bearer" })
        .send(testType)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(400);
          done();
        });
    });
  });

  /**
   * Test the PUT
   */
  describe("PUT type/:id", () => {
    it("It should modifield type.", (done) => {
      chai
        .request(server)
        .put(`api/type/${idNewType}`)
        .auth(token, { type: "bearer" })
        .send({ type: "Test" })
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.text.should.to.contain("1");
          done();
        });
    });
  });

  /**
   * Test the DELETE
   */
  describe("DELETE type/:id", () => {
    it("It should remove a type", (done) => {
      chai
        .request(server)
        .delete(`api/type/${idNewType}`)
        .auth(token, { type: "bearer" })
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(204);
          done();
        });
    });
    it("It should fail remove a type", (done) => {
      chai
        .request(server)
        .delete(`api/type/${idNewType}`)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(401);
          done();
        });
    });
  });
});
