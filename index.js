/**
 * An array containing a catalogue of items
 */
const catalogue = []

/**
 * Creates a new shopping item
 * 
 * @param {String} sku Unique identifier for shopping item
 * @param {String} name The name of the shopping item
 * @param {Number} price The price of the current item
 * @param {Boolean} availability The availability of the current item
 * 
 * @returns {Object} A new item to be added to the catalogue
 */
function createNewItem(sku, name, price, availability) {}

/**
 * Toggles the availability of an item
 * 
 * @param {Object} item An item in the catalogue
 * 
 * @returns null
 */
function setAvailability(item) {}

/**
 * Maps over all the items in the catalogue and stores them in a div
 * 
 * @returns {HTMLDivElement} Catalogue
 */
function App() {}

// Your code goes here, all the best ;)

const rootElement = document.getElementById('app')
rootElement.appendChild(App())