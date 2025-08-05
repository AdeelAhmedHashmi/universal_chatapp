const disconnectHandler = (wss, ws) => {
    console.log("client Disconnected!: ", ws.id, ws.name);
};

export default disconnectHandler;
