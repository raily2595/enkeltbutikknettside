/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProdukt = /* GraphQL */ `
  mutation CreateProdukt(
    $input: CreateProduktInput!
    $condition: ModelProduktConditionInput
  ) {
    createProdukt(input: $input, condition: $condition) {
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
export const updateProdukt = /* GraphQL */ `
  mutation UpdateProdukt(
    $input: UpdateProduktInput!
    $condition: ModelProduktConditionInput
  ) {
    updateProdukt(input: $input, condition: $condition) {
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
export const deleteProdukt = /* GraphQL */ `
  mutation DeleteProdukt(
    $input: DeleteProduktInput!
    $condition: ModelProduktConditionInput
  ) {
    deleteProdukt(input: $input, condition: $condition) {
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
export const createTransaksjon = /* GraphQL */ `
  mutation CreateTransaksjon(
    $input: CreateTransaksjonInput!
    $condition: ModelTransaksjonConditionInput
  ) {
    createTransaksjon(input: $input, condition: $condition) {
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
export const updateTransaksjon = /* GraphQL */ `
  mutation UpdateTransaksjon(
    $input: UpdateTransaksjonInput!
    $condition: ModelTransaksjonConditionInput
  ) {
    updateTransaksjon(input: $input, condition: $condition) {
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
export const deleteTransaksjon = /* GraphQL */ `
  mutation DeleteTransaksjon(
    $input: DeleteTransaksjonInput!
    $condition: ModelTransaksjonConditionInput
  ) {
    deleteTransaksjon(input: $input, condition: $condition) {
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
export const createKunde = /* GraphQL */ `
  mutation CreateKunde(
    $input: CreateKundeInput!
    $condition: ModelKundeConditionInput
  ) {
    createKunde(input: $input, condition: $condition) {
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
export const updateKunde = /* GraphQL */ `
  mutation UpdateKunde(
    $input: UpdateKundeInput!
    $condition: ModelKundeConditionInput
  ) {
    updateKunde(input: $input, condition: $condition) {
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
export const deleteKunde = /* GraphQL */ `
  mutation DeleteKunde(
    $input: DeleteKundeInput!
    $condition: ModelKundeConditionInput
  ) {
    deleteKunde(input: $input, condition: $condition) {
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
export const createBestilling = /* GraphQL */ `
  mutation CreateBestilling(
    $input: CreateBestillingInput!
    $condition: ModelBestillingConditionInput
  ) {
    createBestilling(input: $input, condition: $condition) {
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
      adresse
      postnr
      poststed
      hentes
      kommentar
      createdAt
      updatedAt
      bestillingTransaksjonId
      __typename
    }
  }
`;
export const updateBestilling = /* GraphQL */ `
  mutation UpdateBestilling(
    $input: UpdateBestillingInput!
    $condition: ModelBestillingConditionInput
  ) {
    updateBestilling(input: $input, condition: $condition) {
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
      adresse
      postnr
      poststed
      hentes
      kommentar
      createdAt
      updatedAt
      bestillingTransaksjonId
      __typename
    }
  }
`;
export const deleteBestilling = /* GraphQL */ `
  mutation DeleteBestilling(
    $input: DeleteBestillingInput!
    $condition: ModelBestillingConditionInput
  ) {
    deleteBestilling(input: $input, condition: $condition) {
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
      adresse
      postnr
      poststed
      hentes
      kommentar
      createdAt
      updatedAt
      bestillingTransaksjonId
      __typename
    }
  }
`;
export const upsertKunde = /* GraphQL */ `
  mutation UpsertKunde($input: UpsertKundeInput!) {
    upsertKunde(input: $input) {
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
