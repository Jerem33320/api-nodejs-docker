//Return Json of data we need for the enterprise
const formatEnterpriseData = (data) => {
    const {siren, nom_raison_sociale, nom_complet, date_creation, categorie_entreprise, etat_administratif, nature_juridique} = data.results[0]
    const {commune, libelle_commune} = data.results[0].siege;
    return {
        siren, nom_raison_sociale, nom_complet, date_creation, categorie_entreprise, etat_administratif, nature_juridique, commune, libelle_commune
    };
}

module.exports = {
    formatEnterpriseData
};