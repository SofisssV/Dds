import express from "express";
import * as svcRepositories from "../services/repositoryService.js";

const router = express.Router();

// Endpoint para obtener repositorios
router.get("/", async (req, res) => {
    try {
        if (Object.keys(req.query).length !== 0) {
            const repositories = await svcRepositories.getRepositoriesByFilter(req.query.filter);
            res.json(repositories);
        }
        else {
            const repositories = await svcRepositories.getRepositories();
            res.json(repositories);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para obtener un repositorio por ID
router.get("/:id", async (req, res) => {
    try {
        const repository = await svcRepositories.getRepositoryById(req.params.id);
        if (repository.error) {
            res.status(404).json(repository);
        }
        else {
            res.json(repository);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para crear un nuevo repositorio
router.post("/", async (req, res) => {
    try {
        const newRepository = await svcRepositories.createRepository(req.body);
        if (newRepository.error) {
            res.status(400).json(newRepository);
        }
        else {
            res.status(201).json(newRepository);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint para actualizar un repositorio por ID
router.patch("/:id", async (req, res) => {
    try {
        const updatedRepository = await svcRepositories.updateRepository(req.params.id, req.body);
        if (updatedRepository.error) {
            res.status(404).json(updatedRepository);
        }
        else {
            res.json(updatedRepository);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
