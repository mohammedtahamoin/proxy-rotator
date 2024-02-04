const proxyList = [
    "ipAddress:port:userName:password",
    "ipAddress:port:userName:password",
];


const getProxies = () => {
    const transformedProxies = {}
    proxyList.forEach((proxy, index) => {
        const splitProxy = proxy.split(':');
        transformedProxies[`session_${index + 1}`] = `http://${splitProxy[2]}:${splitProxy[3]}@${splitProxy[0]}:${splitProxy[1]}`
    });
    console.log('transformedProxies', transformedProxies);
    return transformedProxies
};


module.exports = { getProxies };