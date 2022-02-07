const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

const server = "http://localhost:3000/";

let token;
let idNewMovie;

const testMovie = {
  title: "La Bella y la Bestia",
  picture:
    "https://static.wikia.nocookie.net/disney/images/7/7c/Beautybeastposter.jpg/revision/latest?cb=20190217043649&path-prefix=es",
  creation_date: "1991/11/13",
  score: 4.4,
  idType: 1,
  genres: [1],
};

// const expect = chai.expect;

//   chai
//     .request(server)
//     .get("api/movie")
//     .end((err, res) => {
//       if (err) done(err);
//       expect(res).to.have.status(200);
//       expect(res.body).to.be.a("array");
//       expect(res.body).to.have.lengthOf(4);
//       done();
//     });

describe("Test Movie", () => {
  /**
   * Test the GET
   */
  describe("GET api/movie ", () => {
    it.skip("It should GET all the movies", (done) => {
      chai
        .request(server)
        .get("api/movie")
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.should.have.lengthOf(9);
          done();
        });
    });
    // Test Error
    it("It should not GET all the movies", (done) => {
      chai
        .request(server)
        .get("api/movies")
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
  describe("GET movie/:id", () => {
    it("It should get a movie by id", (done) => {
      chai
        .request(server)
        .get("api/movie/1")
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id");
          res.body.should.have.property("title");
          res.body.should.have.property("Type");
          res.body.should.have.property("Genres");
          res.body.should.have.property("Characters");
          res.body.id.should.be.eq(1);
          done();
        });
    });
    // Test Error
    it("It should fail to fetch a movie by id.", (done) => {
      chai
        .request(server)
        .get("api/movie/180")
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
  // describe("POST api/auth/login", () => {
  //   it("It test auth with login", (done) => {
  //     chai
  //       .request(server)
  //       .post("api/auth/login")
  //       .send({ email: "prueba@prueba.com", password: "123456" })
  //       .end((err, res) => {
  //         if (err) done(err);
  //         token = res.body.token;
  //         res.should.have.status(200);
  //         res.body.should.property("token");
  //         done();
  //       });
  //   });
  // });

  describe("POST movie/", () => {
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
    it("It should add a movie", (done) => {
      chai
        .request(server)
        .post("api/movie")
        .auth(token, { type: "bearer" })
        .send(testMovie)
        .end((err, res) => {
          if (err) done(err);
          idNewMovie = res.text.split(",")[1].split(":")[1];
          res.should.have.status(201);
          done();
        });
    });
    it("It should authentication fail when adding a movie", (done) => {
      chai
        .request(server)
        .post(`api/movie`)
        .send(testMovie)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(401);
          res.text.should.to.contain("Authentication failed! Token required");
          done();
        });
    });
    it("It should fail the add a movie", (done) => {
      delete testMovie.idType;
      chai
        .request(server)
        .post("api/movie")
        .auth(token, { type: "bearer" })
        .send(testMovie)
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
  describe("PUT movie/:id", () => {
    it("It should modifield movie.", (done) => {
      chai
        .request(server)
        .put(`api/movie/${idNewMovie}`)
        .auth(token, { type: "bearer" })
        .send({ title: "Test", score: "1" })
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
  describe("DELETE movie/:id", () => {
    it("It should remove a movie", (done) => {
      chai
        .request(server)
        .delete(`api/movie/${idNewMovie}`)
        .auth(token, { type: "bearer" })
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(204);
          done();
        });
    });
    it("It should fail remove a movie", (done) => {
      chai
        .request(server)
        .delete(`api/movie/${idNewMovie}`)
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(401);
          done();
        });
    });
  });
});
