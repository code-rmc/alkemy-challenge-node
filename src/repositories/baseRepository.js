class BaseRepository {
  constructor(dbModels) {
    this.model = dbModels;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async create(date) {
    return await this.model.create(date);
  }

  async update(id, date) {
    return await this.model.update(date, {
      where: { id },
    });
  }

  async delete(id) {
    return await this.model.destroy({
      where: { id },
    });
  }
}

module.exports = BaseRepository;
