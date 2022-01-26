const BaseRepository = require("./baseRepository");
const { User } = require("../models");

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async findEmail(email) {
    return await this.model.findOne({
      where: { email: email },
    });
  }
}

module.exports = UserRepository;
