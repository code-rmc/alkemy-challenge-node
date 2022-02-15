const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

const server = "http://localhost:3000/";

let token;
let idNewCharacter;

const testCharacter = {
  name: "Zazú",
  age: "adulto",
  weight: 2,
  picture:
    "https://www.cinemascomics.com/wp-content/uploads/2017/07/zazu-el-rey-leon-remake.jpg",
  history:
    "Es el mayordomo real del Rey Mufasa. Él se encarga de vigilar el reino desde las alturas y de estar pendiente de Simba y Nala, siendo la víctima de muchas bromas de éstos. ",
  movies: [1],
};

describe("Test Character", () => {
  /**
   * Test the GET
   */
  describe("GET api/character", () => {
    it.skip("It should GET all the characters", (done) => {
      chai
        .request(server)
        .get("api/character")
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.should.have.lengthOf(8);
          done();
        });
    });
    // Test Error
    it("It should not GET all the character", (done) => {
      chai
        .request(server)
        .get("api/characters")
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
  describe("GET character/:id", () => {
    it("It should get a character by id", (done) => {
      chai
        .request(server)
        .get("api/character/1")
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id");
          res.body.should.have.property("name");
          res.body.should.have.property("picture");
          res.body.should.have.property("age");
          res.body.should.have.property("Movies");
          res.body.id.should.be.eq(1);
          done();
        });
    });
    // Test Error
    it("It should fail to fetch a character by id.", (done) => {
      chai
        .request(server)
        .get("api/character/180")
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
  describe("POST character/", () => {
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
    it("It should add a character", (done) => {
      chai
        .request(server)
        .post("api/character")
        .auth(token, { type: "bearer" })
        .send(testCharacter)
        .end((err, res) => {
          if (err) done(err);
          idNewCharacter = res.text.split(",")[1].split(":")[1];
          res.should.have.status(201);
          done();
        });
    });
    it("It should authentication fail when adding a character", (done) => {
      chai
        .request(server)
        .post(`api/character`)
        .send(testCharacter)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(401);
          res.text.should.to.contain("Authentication failed! Token required");
          done();
        });
    });
    it("It should fail the add a character", (done) => {
      delete testCharacter.picture;
      chai
        .request(server)
        .post("api/character")
        .auth(token, { type: "bearer" })
        .send(testCharacter)
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
  describe("PUT character/:id", () => {
    it.skip("It should modifield character.", (done) => {
      chai
        .request(server)
        .put(`api/character/${idNewCharacter}`)
        .auth(token, { type: "bearer" })
        .send({ name: "Test", age: "1" })
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
  describe("DELETE character/:id", () => {
    it.skip("It should remove a character", (done) => {
      chai
        .request(server)
        .delete(`api/character/${idNewCharacter}`)
        .auth(token, { type: "bearer" })
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(204);
          done();
        });
    });
    it("It should fail remove a character", (done) => {
      chai
        .request(server)
        .delete(`api/character/${idNewCharacter}`)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(401);
          done();
        });
    });
  });
});
