const helper = function () {
    const handler = function (response) {
        if (response.status >= 400) {
            throw new Error(`Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }

        return response;
    };

    const checkInputFields = function (params) {
        return params.username !== '' && params.password !== '';
    }

    const passwordCheck = function (params) {
        return params.password === params.rePassword;
    };

    return {
        handler,
        passwordCheck,
        checkInputFields
    };
}();
