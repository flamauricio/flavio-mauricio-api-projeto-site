	'use strict';

	/* 
	lista e explicação dos Datatypes:
	https://codewithhugo.com/sequelize-data-types-a-practical-guide/
	*/

	module.exports = (sequelize, DataTypes) => {
	    let Usuario = sequelize.define('Usuario', {
	        idEmpresa: {
	            field: 'idEmpresa',
	            type: DataTypes.INTEGER,
	            primaryKey: true,
	            autoIncrement: true
	        },
	        nome: {
	            field: 'nome',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        email: {
	            field: 'email',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        senha: {
	            field: 'senha',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        cnpj: {
	            field: 'cnpj',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        telefone: {
	            field: 'telefone',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        endereco: {
	            field: 'endereco',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        estado: {
	            field: 'estado',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        cidade: {
	            field: 'cidade',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	    }, {
	        tableName: 'empresa',
	        freezeTableName: true,
	        underscored: true,
	        timestamps: false,
	    });

	    return Usuario;
	};