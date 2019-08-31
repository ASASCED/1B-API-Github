const obtenerUsuario = require('./../index.js').obtenerDatosDeUsuario;

const expect = require('chai').expect;

var nock = require('nock');

const mugan86 = require('./respuestas/mugan86');

describe('Test de datos de diferentes usuarios de GitHub', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .log(console.log)
            .get('/users/mugan86')
            .reply(200, mugan86);
    });
    it('Obtener datos de usuario mugan86', () => {
        return obtenerUsuario('mugan86').then(
            respuesta => {
                // Probar el tipo de variable que obtenemos de respuesta. Tiene que ser un objeto.commen
                expect(typeof respuesta).to.equal('object');

                // Comprobar que el usuario de la API es mugan86
                expect(respuesta.login).to.equal('mugan86');

                // Comprobar que el ID del usuario es numerico
                expect(typeof respuesta.id).to.equal('number');

                // Comprobar que los seguidores y seguidos sean numericos
                expect(typeof respuesta.followers).to.equal('number');
                expect(typeof respuesta.following).to.equal('number');

                // Location = null
                expect(respuesta.location).to.equal(null || 'Soraluze (Basque Country) (EU)');
            }
        );
    });
});