// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Produkt, Transaksjon, Kunde, Bestilling } = initSchema(schema);

export {
  Produkt,
  Transaksjon,
  Kunde,
  Bestilling
};