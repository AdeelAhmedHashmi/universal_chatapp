let vars = {
    clientInfo: {
        name: "",
        clientId: "",
        chatType: "global",
    },
    methods: {
        joined: "JOINED",
        broadcast: "BROADCAST",
        private: "PRIVATE",
    },
    serverUrls: {
        register: `http://localhost:8080/api/user/register`,
        login: `http://localhost:8080/api/user/login`,
        logout: `http://localhost:8080/api/user/logout`,
        verify: `http://localhost:8080/api/user/verify`,
        numbers: `http://localhost:8080/api/user/usernumbers`,
        updateProfile: `http://localhost:8080/api/user/update`,
    },
};

export default vars;
