// Definición del modelo
import { DataTypes } from "sequelize";
import sequelize from "../data/db.js";

const Repository = sequelize.define(
    "Repository",
    {
        repositoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "REPOSITORY_ID",
        },
        userName: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "USER_NAME",
        },
        repositoryName: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "REPOSITORY_NAME",
        },
        description: {
            type: DataTypes.TEXT,
            field: "DESCRIPTION",
        },
        lastUpdate: {
            type: DataTypes.DATE,
            field: "LAST_UPDATE",
        },
        language: {
            type: DataTypes.TEXT,
            field: "LANGUAGE",
        },
        stars: {
            type: DataTypes.REAL,
            field: "STARS",
        },
        tags: {
            type: DataTypes.TEXT,
            field: "TAGS",
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "URL",
        },
    },
    {
        tableName: "REPOSITORIES",
        timestamps: false,
    }
);

export default Repository;
