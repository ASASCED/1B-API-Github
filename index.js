const axios = require('axios');

module.exports = {
    obtenerDatosDeUsuario: function(usuario) {
        const url = `https://api.github.com/users/${usuario}`;
        return axios.get(url).then(
            data => data.data
        ).catch(error => console.log(error));
    },
};