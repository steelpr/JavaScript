const causesModel = function () {
    const postCreateCauses = function (params) {
        let data = {
            ...params,
            collectedFunds: 0,
            donors: JSON.parse(storage.getData('userInfo')).username
        }

        let url = `/appdata/${storage.appKey}/causes`;

        let header = {
            body: JSON.stringify(data),
            headers: {}
        }

        return requester.post(url, header);
    };

    const getAllCauses = function () {
        let url = `/appdata/${storage.appKey}/causes`;
        let header = {
            headers: {}
        }

        return requester.get(url, header);
    }

    const getCause = function (id) {
        let url = `/appdata/${storage.appKey}/causes/${id}`
        let header = {
            headers: {}
        }

        return requester.get(url, header)
    }

    const editCause = function (id, params) {
        let data = {
            collectedFunds: params
        }

        let url = `/appdata/${storage.appKey}/causes/${id}`;

        let header = {
            body: JSON.stringify(data),
            headers: {}
        }

        return requester.post(url, header);
    };


    return {
        postCreateCauses,
        getAllCauses,
        getCause,
        editCause
    }
}();