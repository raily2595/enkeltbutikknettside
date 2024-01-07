/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProdukt = /* GraphQL */ `
  query GetProdukt($id: ID!) {
    getProdukt(id: $id) {
      id
      produktnavn
      farge
      farge2
      lengde
      bredde
      detaljefarger
      klips
      vinyltekst
      fontfarge
      font
      pris
      kommentar
      valgtLeke
      bestillingID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProdukts = /* GraphQL */ `
  query ListProdukts(
    $filter: ModelProduktFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProdukts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        produktnavn
        farge
        farge2
        lengde
        bredde
        detaljefarger
        klips
        vinyltekst
        fontfarge
        font
        pris
        kommentar
        valgtLeke
        bestillingID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const produktsByBestillingID = /* GraphQL */ `
  query ProduktsByBestillingID(
    $bestillingID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProduktFilterInput
    $limit: Int
    $nextToken: String
  ) {
    produktsByBestillingID(
      bestillingID: $bestillingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        produktnavn
        farge
        farge2
        lengde
        bredde
        detaljefarger
        klips
        vinyltekst
        fontfarge
        font
        pris
        kommentar
        valgtLeke
        bestillingID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTransaksjon = /* GraphQL */ `
  query GetTransaksjon($id: ID!) {
    getTransaksjon(id: $id) {
      id
      betalingsmetode
      betalingsstatus
      total
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTransaksjons = /* GraphQL */ `
  query ListTransaksjons(
    $filter: ModelTransaksjonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransaksjons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        betalingsmetode
        betalingsstatus
        total
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getKunde = /* GraphQL */ `
  query GetKunde($id: ID!) {
    getKunde(id: $id) {
      id
      navn
      epost
      adresse
      postnr
      poststed
      telefon
      Bestillinger {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listKundes = /* GraphQL */ `
  query ListKundes(
    $filter: ModelKundeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKundes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        navn
        epost
        adresse
        postnr
        poststed
        telefon
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBestilling = /* GraphQL */ `
  query GetBestilling($id: ID!) {
    getBestilling(id: $id) {
      id
      ordreDato
      bestillingsstatus
      kundeID
      Kunde {
        id
        navn
        epost
        adresse
        postnr
        poststed
        telefon
        createdAt
        updatedAt
        __typename
      }
      Produkter {
        nextToken
        __typename
      }
      Transaksjon {
        id
        betalingsmetode
        betalingsstatus
        total
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      bestillingTransaksjonId
      __typename
    }
  }
`;
export const listBestillings = /* GraphQL */ `
  query ListBestillings(
    $filter: ModelBestillingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBestillings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ordreDato
        bestillingsstatus
        kundeID
        createdAt
        updatedAt
        bestillingTransaksjonId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bestillingsByKundeID = /* GraphQL */ `
  query BestillingsByKundeID(
    $kundeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBestillingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bestillingsByKundeID(
      kundeID: $kundeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ordreDato
        bestillingsstatus
        kundeID
        createdAt
        updatedAt
        bestillingTransaksjonId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
