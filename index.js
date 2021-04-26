// Import Module
const Hapi = require('@hapi/hapi');

// const Sequelize = require('sequelize')
// const Op  = Sequelize.Op


const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

// import routes
const routes = require('./routes');
server.route(routes);


const init = async () => {

    await server.start();
    console.log(`Server is running on ${server.info.uri}`);

    // server.route({
    //     method: 'GET',
    //     path:'/home',
    //     handler: (request, h) => {
    
    //       return 'Hello world';
    //     }
    // });
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();