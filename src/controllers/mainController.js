const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const insale = products.filter(product => product.category == 'in-sale');
		const visited = products.filter(product => product.category == 'visited');
		res.render('index', { insale, visited })
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
