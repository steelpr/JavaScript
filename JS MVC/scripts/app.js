const app = Sammy("#rootElement", function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', homeController.getHome);

    this.get('#/register', userController.getRegister);
    this.get(`#/login`, userController.getLogin);

    this.post(`#/register`, userController.postRegister);
    this.post(`#/login`, userController.postLogin);
    this.get(`#/logout`, userController.logout);

    this.post(`#/createCauses`, causesController.postCreateCauses);
    this.get(`#/createCauses`, causesController.getCreateCauses);

    this.get(`#/causes`, causesController.allCauses);
    this.get(`#/causeDetails/:id`, causesController.getCauseDetails);
    this.post(`#/causeDetails/:id`, causesController.editCause);


});

(() => {
    app.run(`#/home`);
})();