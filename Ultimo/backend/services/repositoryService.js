import { Op } from "sequelize"; // Para operadores de Sequelize
import validator from "validator"; // Para validar la URL
import Repository from "../models/repository.js";

// Función para obtener los primeros 15 repositorios ordenados por fecha de actualización
export const getRepositories = async () => {
    try {
        const repositories = await Repository.findAll({
            limit: 15,
            order: [["lastUpdate", "DESC"]],
        });
        return repositories;
    }
    catch (error) {
        return { error: error.message };
    }
};

// Función para obtener un repositorio por ID
export const getRepositoryById = async (id) => {
    try {
        const repository = await Repository.findByPk(id);
        if (!repository) {
            return { error: "Repository not found" };
        }
        return repository;
    }
    catch (error) {
        return { error: error.message };
    }
};

// Función para obtener repositorios por filtro en userName, repositoryName o tags
export const getRepositoriesByFilter = async (filter) => {
    try {
        const repositories = await Repository.findAll({
            where: {
                [Op.or]: [
                    { userName: { [Op.like]: `%${filter}%` } },
                    { repositoryName: { [Op.like]: `%${filter}%` } },
                    { tags: { [Op.like]: `%${filter}%` } },
                ],
            },
            order: [["lastUpdate", "DESC"]],
        });
        return repositories;
    }
    catch (error) {
        return { error: error.message };
    }
};

// Función para crear un nuevo repositorio
export const createRepository = async (data) => {
    try {
        const { userName, repositoryName, description, language, stars, tags, url } = data;

        // Validación de la URL
        if (!validator.isURL(url)) {
            return { error: "Invalid URL" };
        }

        // Verificación de unicidad del repositoryName
        const existingRepository = await Repository.findOne({
            where: { repositoryName }
        });
        if (existingRepository) {
            return { error: "Repository name already exists" };
        }

        const newRepository = await Repository.create({
            userName,
            repositoryName,
            description,
            lastUpdate: new Date(), // Establecemos la fecha de actualización al instante actual
            language,
            stars,
            tags,
            url,
        });
        return newRepository;
    }
    catch (error) {
        return { error: error.message };
    }
};

// Función para actualizar un repositorio por ID
export const updateRepository = async (id, data) => {
    try {
        const { description, stars, tags } = data;
        const repository = await Repository.findByPk(id);
        if (!repository) {
            return { error: "Repository not found" };
        }

        // Actualizamos solo los campos permitidos
        repository.description = description;
        repository.stars = stars;
        repository.tags = tags;
        repository.lastUpdate = new Date();

        await repository.save();
        return repository;
    }
    catch (error) {
        return { error: error.message };
    }
};
