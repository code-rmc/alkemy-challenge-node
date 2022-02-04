const BaseRepository = require("./baseRepository");
const { User } = require("../loader/database/associations");

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findEmail(email) {
    return await this.model.findOne({
      where: { email },
    });
  }
}

module.exports = UserRepository;
