import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerProdukt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Produkt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly produktnavn?: string | null;
  readonly farge?: string | null;
  readonly farge2?: string | null;
  readonly lengde?: number | null;
  readonly bredde?: number | null;
  readonly detaljefarger?: string | null;
  readonly klips?: string | null;
  readonly vinyltekst?: string | null;
  readonly fontfarge?: string | null;
  readonly font?: string | null;
  readonly pris?: number | null;
  readonly kommentar?: string | null;
  readonly valgtLeke?: string | null;
  readonly bestillingID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProdukt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Produkt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly produktnavn?: string | null;
  readonly farge?: string | null;
  readonly farge2?: string | null;
  readonly lengde?: number | null;
  readonly bredde?: number | null;
  readonly detaljefarger?: string | null;
  readonly klips?: string | null;
  readonly vinyltekst?: string | null;
  readonly fontfarge?: string | null;
  readonly font?: string | null;
  readonly pris?: number | null;
  readonly kommentar?: string | null;
  readonly valgtLeke?: string | null;
  readonly bestillingID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Produkt = LazyLoading extends LazyLoadingDisabled ? EagerProdukt : LazyProdukt

export declare const Produkt: (new (init: ModelInit<Produkt>) => Produkt) & {
  copyOf(source: Produkt, mutator: (draft: MutableModel<Produkt>) => MutableModel<Produkt> | void): Produkt;
}

type EagerTransaksjon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaksjon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly betalingsmetode?: string | null;
  readonly betalingsstatus?: string | null;
  readonly total?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTransaksjon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaksjon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly betalingsmetode?: string | null;
  readonly betalingsstatus?: string | null;
  readonly total?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Transaksjon = LazyLoading extends LazyLoadingDisabled ? EagerTransaksjon : LazyTransaksjon

export declare const Transaksjon: (new (init: ModelInit<Transaksjon>) => Transaksjon) & {
  copyOf(source: Transaksjon, mutator: (draft: MutableModel<Transaksjon>) => MutableModel<Transaksjon> | void): Transaksjon;
}

type EagerKunde = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Kunde, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn?: string | null;
  readonly epost?: string | null;
  readonly adresse?: string | null;
  readonly postnr?: string | null;
  readonly poststed?: string | null;
  readonly telefon?: string | null;
  readonly Bestillinger?: (Bestilling | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKunde = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Kunde, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn?: string | null;
  readonly epost?: string | null;
  readonly adresse?: string | null;
  readonly postnr?: string | null;
  readonly poststed?: string | null;
  readonly telefon?: string | null;
  readonly Bestillinger: AsyncCollection<Bestilling>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Kunde = LazyLoading extends LazyLoadingDisabled ? EagerKunde : LazyKunde

export declare const Kunde: (new (init: ModelInit<Kunde>) => Kunde) & {
  copyOf(source: Kunde, mutator: (draft: MutableModel<Kunde>) => MutableModel<Kunde> | void): Kunde;
}

type EagerBestilling = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bestilling, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ordreDato?: string | null;
  readonly bestillingsstatus?: string | null;
  readonly kundeID: string;
  readonly Kunde?: Kunde | null;
  readonly Produkter?: (Produkt | null)[] | null;
  readonly Transaksjon?: Transaksjon | null;
  readonly adresse?: string | null;
  readonly postnr?: string | null;
  readonly poststed?: string | null;
  readonly hentes?: boolean | null;
  readonly kommentar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bestillingTransaksjonId?: string | null;
}

type LazyBestilling = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bestilling, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ordreDato?: string | null;
  readonly bestillingsstatus?: string | null;
  readonly kundeID: string;
  readonly Kunde: AsyncItem<Kunde | undefined>;
  readonly Produkter: AsyncCollection<Produkt>;
  readonly Transaksjon: AsyncItem<Transaksjon | undefined>;
  readonly adresse?: string | null;
  readonly postnr?: string | null;
  readonly poststed?: string | null;
  readonly hentes?: boolean | null;
  readonly kommentar?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bestillingTransaksjonId?: string | null;
}

export declare type Bestilling = LazyLoading extends LazyLoadingDisabled ? EagerBestilling : LazyBestilling

export declare const Bestilling: (new (init: ModelInit<Bestilling>) => Bestilling) & {
  copyOf(source: Bestilling, mutator: (draft: MutableModel<Bestilling>) => MutableModel<Bestilling> | void): Bestilling;
}