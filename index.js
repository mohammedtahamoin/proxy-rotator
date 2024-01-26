const ProxyChain = require('proxy-chain');
const { getProxies } = require('./proxies')

function getRandomFloat(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const proxies= getProxies();

const server = new ProxyChain.Server({
    port: 8080,
    verbose: true,
    prepareRequestFunction: ({ request }) => {
        console.log('request', request.headers)
        const randomSession = getRandomFloat(1, 100);
        // At this point of code we should decide what proxy
        // to use from the proxies list.
        const sessionId = `session_${randomSession}`;
        console.log('Proxy server url ---------------------- ', proxies[sessionId])
        const proxy = proxies[sessionId];
        return { upstreamProxyUrl: proxy };
    }
});

server.listen(() => console.log('Rotating proxy server started.'));