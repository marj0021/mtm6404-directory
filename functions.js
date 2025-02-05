// list() function: Uses map() to generate an HTML list of clients.
const list = (clients) => {
    return clients.map((client, index) => 
        `<li class="list-group-item d-flex justify-content-between" data-index="${index}">
            ${client.name} <strong>$${client.balance}</strong>
        </li>`
    ).join('');
};

// order() function: Uses sort() to sort clients by the specified property.
const order = (clients, property) => {
    return [...clients].sort((a, b) => {
        if (typeof a[property] === "string") {
            return a[property].localeCompare(b[property]); // Sort alphabetically
        }
        return a[property] - b[property]; // Sort numerically
    });
};

// total() function: Uses reduce() to sum up all client balances.
const total = (clients) => {
    return clients.reduce((sum, client) => sum + client.balance, 0);
};

// info() function: Uses find() to get a specific client by index.
const info = (index) => {
    return clients.find((_, i) => i === index) || null;
};

// search() function: Uses filter() to find clients by name (case-insensitive).
const search = (query) => {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
};
