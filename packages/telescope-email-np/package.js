Package.describe({summary: "Telescope Noon Pacific Email Style"});

Package.on_use(function (api) {

  api.use(['telescope-email'], ['server']);

  api.add_files([
    'lib/server/templates/emailWrapper-np.handlebars',
    ], ['server']);

});