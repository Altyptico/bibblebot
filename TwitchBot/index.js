const tmi = require('tmi.js');

const options = {
    options:{
        debug: true, 
    },
    connection:{
        cluster: 'aws',
        reconnect: true,
    },
    identity:{
        username: 'BibbleBot',
        password: 'oauth:li27kc67m3vu4v6kkk7z8wkgi8pkj8',
    },
    channels: ['nishkabibble']
}

const client = new tmi.client(options);

client.connect();

client.on('connected', (address,port) => {
    client.action('nishkabibble', 'Hello, BibbleBot is now connected');
});

client.on('chat', (channel, user, message, self) => {
    if(message === '!game') {
        client.action('nishkabibble', 'Nishkabibble is playing My Time At Portia');
    }

    client.action('nishkabibble', `Hello ${user['display-name']}`);
})