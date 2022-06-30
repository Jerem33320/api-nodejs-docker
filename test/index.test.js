const request = require('supertest');
const app = require('../index.js');

describe('Enterprise EndPoint', () => {
    describe('GET /enterprise' , () => {
        it('should have a query parameter', (done) => {
            // const enterpriseInfos = {
            //     siren: '513641357',
            //     nom_raison_sociale: 'LA TESTA',
            //     nom_complet: 'la testa',
            //     date_creation: '2009-08-01',
            //     categorie_entreprise: 'PME',
            //     etat_administratif: 'A',
            //     nature_juridique: '5499',
            //     commune: '2A362',
            //     libelle_commune: 'ZONZA'
            // }
            
            request(app)
            .get(`/enterprise`)
            .query({ q: 'Test1' })
            .expect('Content-Type', /json/)
            .expect(200, function (err, res) {
                expect(res.body.siren).toEqual('513641357');
                done();
            });
        })
    })
})