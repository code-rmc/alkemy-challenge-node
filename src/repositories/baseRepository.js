class BaseRepository {
  constructor(dbModels, model) {
    this.db = dbModels;
    this.model = model;
  }

  async getAll() {
    return await this.db[this.model].findAll();
  }

  async getId(id) {
    return await this.db[this.model].find({ where: { id } });
  }

  async findEmail(email) {
    return await this.db[this.model].findOne({
      where: { email: email },
    });
  }

  async create(date) {
    return await this.db[this.model].create(date);
  }

  async update(id, date) {
    return await this.db[this.model].update(date, {
      where: { id },
    });
  }

  async delete(id) {
    return await this.db[this.model].destroy({
      where: { id },
    });
  }
}

module.exports = BaseRepository;
