J'ai commencé par cherché une API qui trouve les informations d'une entreprise en fonction de son nom.
https://api.gouv.fr/documentation/api-recherche-entreprises

Dans le dossier "config" j'appelle l'url pour que l'utilisateur mette le "query param" du nom de l'entreprise qu'il cherche:
`https://recherche-entreprises.api.gouv.fr/search?q=${name}`

Dans notre navigateur, on peut donc tester la route ci-desssous avec le nom d'entreprise "experdeco"
http://localhost:3000/enterprise?q=experdeco
