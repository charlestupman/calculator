export const operatorLibrary = {
	add: (a, b) => parseFloat(a) + parseFloat(b),
	subtract: (a, b) => parseFloat(a) - parseFloat(b),
	multiply: (a, b) => parseFloat(a) * parseFloat(b),
	divide: (a, b) => parseFloat(a) / parseFloat(b),
	percent: a => parseFloat(a) / 100,
}
