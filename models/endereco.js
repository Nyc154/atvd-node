const {Sequelize, DataTypes} = require('sequelize');
const { NOT } = require('sequelize/types/deferrable');
const sequelize = new Sequelize('sqlite::memory');

const user = sequelize.define(
    'Endereço',
{

    id: {
        type: DataTypes.BIGINT,
        primaryKay: true,
        autoIncrement: true
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Logadouro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Numero: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    Complemento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize, 
    modelname: 'Endereco',
    tablename:'endereco',
    timestamps: true
    
})
    