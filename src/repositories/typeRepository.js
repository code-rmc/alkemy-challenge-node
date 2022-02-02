const BaseRepository = require("./baseRepository");
const { Type } = require("../loader/database/associations");

class TypeRepository extends BaseRepository {
  constructor() {
    super(Type);
  }
}

module.exports = TypeRepository;
