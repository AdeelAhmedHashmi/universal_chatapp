import vars from "../constants/variables.js";

async function verifyUser() {
    try {
        const res = await fetch(vars.serverUrls.verify, {
            method: "GET",
            credentials: "include",
        });
        const response = await res.json();
        if (res.status === 200) {
            return {
                status: "Success",
                response: response,
                error: null,
            };
        } else if (res.status === 401) {
            return {
                status: "Unauthorized",
                response: response,
                error: "User not login!",
            };
        } else if (res.status === 500) {
            return {
                status: "Error",
                response: response,
                error: "Internal Server Error!",
            };
        } else {
            return {
                status: "Access Error",
                response: response,
                error: "User Access Denied!",
            };
        }
    } catch (err) {
        return {
            status: "Unsuccess",
            error: err,
        };
    }
}

export default verifyUser;
