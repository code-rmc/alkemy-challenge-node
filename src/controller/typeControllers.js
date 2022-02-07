const express = require("express");
const {
  getAll,
  getByid,
  create,
  update,
  remove,
} = require("../services/typeService");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getAllTypes = async (req, res, next) => {
  try {
    const types = await getAll();
    res.json(types);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const findByType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const type = await getByid(id);
    res.json(type);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const saveType = async (req, res, next) => {
  try {
    const type = req.body;
    const typeSave = await create(type);
    res.status(201).json(typeSave);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const updateType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const type = req.body;
    const typeUpdate = await update(id, type);
    res.json(typeUpdate);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const type = await remove(id);
    res.status(204).json(type);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTypes,
  findByType,
  saveType,
  updateType,
  deleteType,
};
