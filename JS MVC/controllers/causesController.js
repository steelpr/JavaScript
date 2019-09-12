const causesController = function () {
    debugger;
    const getCreateCauses = function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
        }).then(function () {
            this.partial('../views/causes/createView.hbs')
        })
    };

    const postCreateCauses = function (context) {

        causesModel.postCreateCauses(context.params)
            .then(helper.handler)
            .then(() => {
                homeController.getHome(context);
            })
    };


    const allCauses = async function (context) {

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
            this.partial('../views/causes/dashboard.hbs')
        })
    };

    const getCauseDetails = async function (context) {
        debugger;
        let response = await causesModel.getCause(context.params.id)

        let cause = await response.json()

        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
            Object.keys(cause).forEach((key) => {
                context[key] = cause[key]
            })
        }

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function () {
            this.partial('../views/causes/detailsView.hbs')
        })

    }

    const editCause = function(context){
        causesModel.editCause(context.params.id, context.params.currentDonation)
        .then(helper.handler)
        .then(() => {
            homeController.getHome(context);
        })
    }




    return {
        getCreateCauses,
        postCreateCauses,
        allCauses,
        getCauseDetails,
        editCause
    }
}();