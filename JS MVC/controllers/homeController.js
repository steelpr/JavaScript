const homeController = function () {

    const getHome = async function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
            try {
                let response = await causesModel.getAllCauses();
                context.causes = await response.json();
            } catch{
                throw new Error('error');
            }
        }

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
        }).then(function () {
            this.partial('../views/home/homePage.hbs')
        })
    };

    return {
        getHome
    }
}();