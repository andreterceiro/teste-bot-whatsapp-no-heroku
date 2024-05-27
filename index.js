const { Client } = require('whatsapp-web.js');

// Create a new client instance
const client = new Client();
const wwebVersion = '2.2407.3';
this.client = new Client({
    puppeteer: {
        args: ['--no-sandbox'],
    },
    webVersionCache: {
        type: 'remote',
        remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
    },
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

// Start your client
client.initialize();

client.on('message', async function(message) {
    //console.log(message);
    console.log(parseInt(message.body) + 1)
    message.reply("oi");
});