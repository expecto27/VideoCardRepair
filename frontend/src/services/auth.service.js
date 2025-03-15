import http from "../http-common";

// отправка данных на сторону сервера для того, чтобы пользователь мог авторизоваться в системе
function login(user) {
    var data = {
        name: user.name,
        password: user.password
    };
    return http
        .post("/login", data)
        .then(response => {
            if (response.data.accessToken) {
                // записываем данные пользователя в локальное хранилище
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
}

// обработка выхода пользователя
function logout() {
    // при нажатии кнопки "Выйти" удаляем данные пользователя из локального хранилища
    localStorage.removeItem('user');
}

// обработка регистрации пользователя
function register(user) {
    var data = {
        name: user.name,
        password: user.password,
        email: user.email,
        phone: user.phone,
    };
    return http.post("/register", data);
}

// обработка подтверждения кода
function verifyCode(data) {
    return http
        .post("/verifyCode", data)
        .then(response => {
            if (response.data.success) {
                localStorage.setItem("verificationStatus", "verified");
            }
            return response.data;
        })
        .catch(error => {
            throw error;
        });
}

// обновление токена
function refreshToken(user) {
    var data = {
        name: user.name
    };
    return http
        .post("/refreshToken", data)
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data)); // записываем данные пользователя в локальное хранилище
            }
            return response.data;
        });
}

// декодируем токен jwt
function jwtDecrypt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map((c) => {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
    return JSON.parse(jsonPayload);
}

// проверяем срока действия токена
function tokenAlive(exp) {
    if (Date.now() >= exp * 1000) {
        return false;
    }
    return true;
}

export default {
    register,
    verifyCode,
    login,
    logout,
    refreshToken,
    jwtDecrypt,
    tokenAlive
};
