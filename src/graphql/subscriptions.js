/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProdukt = /* GraphQL */ `
  subscription OnCreateProdukt($filter: ModelSubscriptionProduktFilterInput) {
    onCreateProdukt(filter: $filter) {
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
export const onUpdateProdukt = /* GraphQL */ `
  subscription OnUpdateProdukt($filter: ModelSubscriptionProduktFilterInput) {
    onUpdateProdukt(filter: $filter) {
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
export const onDeleteProdukt = /* GraphQL */ `
  subscription OnDeleteProdukt($filter: ModelSubscriptionProduktFilterInput) {
    onDeleteProdukt(filter: $filter) {
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
export const onCreateTransaksjon = /* GraphQL */ `
  subscription OnCreateTransaksjon(
    $filter: ModelSubscriptionTransaksjonFilterInput
  ) {
    onCreateTransaksjon(filter: $filter) {
      id
      betalingsmetode
      betalingsstatus
      total
      bestillingID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTransaksjon = /* GraphQL */ `
  subscription OnUpdateTransaksjon(
    $filter: ModelSubscriptionTransaksjonFilterInput
  ) {
    onUpdateTransaksjon(filter: $filter) {
      id
      betalingsmetode
      betalingsstatus
      total
      bestillingID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTransaksjon = /* GraphQL */ `
  subscription OnDeleteTransaksjon(
    $filter: ModelSubscriptionTransaksjonFilterInput
  ) {
    onDeleteTransaksjon(filter: $filter) {
      id
      betalingsmetode
      betalingsstatus
      total
      bestillingID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateKunde = /* GraphQL */ `
  subscription OnCreateKunde($filter: ModelSubscriptionKundeFilterInput) {
    onCreateKunde(filter: $filter) {
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
export const onUpdateKunde = /* GraphQL */ `
  subscription OnUpdateKunde($filter: ModelSubscriptionKundeFilterInput) {
    onUpdateKunde(filter: $filter) {
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
export const onDeleteKunde = /* GraphQL */ `
  subscription OnDeleteKunde($filter: ModelSubscriptionKundeFilterInput) {
    onDeleteKunde(filter: $filter) {
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
export const onCreateBestilling = /* GraphQL */ `
  subscription OnCreateBestilling(
    $filter: ModelSubscriptionBestillingFilterInput
  ) {
    onCreateBestilling(filter: $filter) {
      id
      ordreDato
      bestillingsstatus
      kundeID
      Produkter {
        nextToken
        __typename
      }
      adresse
      postnr
      poststed
      leveringsmetode
      kommentar
      Transaksjon {
        nextToken
        __typename
      }
      adresse
      postnr
      poststed
      hentes
      kommentar
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBestilling = /* GraphQL */ `
  subscription OnUpdateBestilling(
    $filter: ModelSubscriptionBestillingFilterInput
  ) {
    onUpdateBestilling(filter: $filter) {
      id
      ordreDato
      bestillingsstatus
      kundeID
      Produkter {
        nextToken
        __typename
      }
      adresse
      postnr
      poststed
      leveringsmetode
      kommentar
      Transaksjon {
        nextToken
        __typename
      }
      adresse
      postnr
      poststed
      hentes
      kommentar
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBestilling = /* GraphQL */ `
  subscription OnDeleteBestilling(
    $filter: ModelSubscriptionBestillingFilterInput
  ) {
    onDeleteBestilling(filter: $filter) {
      id
      ordreDato
      bestillingsstatus
      kundeID
      Produkter {
        nextToken
        __typename
      }
      adresse
      postnr
      poststed
      leveringsmetode
      kommentar
      Transaksjon {
        nextToken
        __typename
      }
      adresse
      postnr
      poststed
      hentes
      kommentar
      createdAt
      updatedAt
      __typename
    }
  }
`;
