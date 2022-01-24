const BaseRepository = require("./baseRepository");
const db = require("../models").sequelize.models;

class UserRepository extends BaseRepository {
  constructor() {
    super(db, "User");
  }
}

module.exports = UserRepository;
