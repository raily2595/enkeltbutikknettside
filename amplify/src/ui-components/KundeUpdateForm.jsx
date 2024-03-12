/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getKunde } from "../graphql/queries";
import { updateKunde } from "../graphql/mutations";
const client = generateClient();
export default function KundeUpdateForm(props) {
  const {
    id: idProp,
    kunde: kundeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    navn: "",
    epost: "",
    adresse: "",
    postnr: "",
    poststed: "",
    telefon: "",
  };
  const [navn, setNavn] = React.useState(initialValues.navn);
  const [epost, setEpost] = React.useState(initialValues.epost);
  const [adresse, setAdresse] = React.useState(initialValues.adresse);
  const [postnr, setPostnr] = React.useState(initialValues.postnr);
  const [poststed, setPoststed] = React.useState(initialValues.poststed);
  const [telefon, setTelefon] = React.useState(initialValues.telefon);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = kundeRecord
      ? { ...initialValues, ...kundeRecord }
      : initialValues;
    setNavn(cleanValues.navn);
    setEpost(cleanValues.epost);
    setAdresse(cleanValues.adresse);
    setPostnr(cleanValues.postnr);
    setPoststed(cleanValues.poststed);
    setTelefon(cleanValues.telefon);
    setErrors({});
  };
  const [kundeRecord, setKundeRecord] = React.useState(kundeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getKunde.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getKunde
        : kundeModelProp;
      setKundeRecord(record);
    };
    queryData();
  }, [idProp, kundeModelProp]);
  React.useEffect(resetStateValues, [kundeRecord]);
  const validations = {
    navn: [],
    epost: [{ type: "Email" }],
    adresse: [],
    postnr: [],
    poststed: [],
    telefon: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          navn: navn ?? null,
          epost: epost ?? null,
          adresse: adresse ?? null,
          postnr: postnr ?? null,
          poststed: poststed ?? null,
          telefon: telefon ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateKunde.replaceAll("__typename", ""),
            variables: {
              input: {
                id: kundeRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "KundeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Navn"
        isRequired={false}
        isReadOnly={false}
        value={navn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn: value,
              epost,
              adresse,
              postnr,
              poststed,
              telefon,
            };
            const result = onChange(modelFields);
            value = result?.navn ?? value;
          }
          if (errors.navn?.hasError) {
            runValidationTasks("navn", value);
          }
          setNavn(value);
        }}
        onBlur={() => runValidationTasks("navn", navn)}
        errorMessage={errors.navn?.errorMessage}
        hasError={errors.navn?.hasError}
        {...getOverrideProps(overrides, "navn")}
      ></TextField>
      <TextField
        label="Epost"
        isRequired={false}
        isReadOnly={false}
        value={epost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              epost: value,
              adresse,
              postnr,
              poststed,
              telefon,
            };
            const result = onChange(modelFields);
            value = result?.epost ?? value;
          }
          if (errors.epost?.hasError) {
            runValidationTasks("epost", value);
          }
          setEpost(value);
        }}
        onBlur={() => runValidationTasks("epost", epost)}
        errorMessage={errors.epost?.errorMessage}
        hasError={errors.epost?.hasError}
        {...getOverrideProps(overrides, "epost")}
      ></TextField>
      <TextField
        label="Adresse"
        isRequired={false}
        isReadOnly={false}
        value={adresse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              epost,
              adresse: value,
              postnr,
              poststed,
              telefon,
            };
            const result = onChange(modelFields);
            value = result?.adresse ?? value;
          }
          if (errors.adresse?.hasError) {
            runValidationTasks("adresse", value);
          }
          setAdresse(value);
        }}
        onBlur={() => runValidationTasks("adresse", adresse)}
        errorMessage={errors.adresse?.errorMessage}
        hasError={errors.adresse?.hasError}
        {...getOverrideProps(overrides, "adresse")}
      ></TextField>
      <TextField
        label="Postnr"
        isRequired={false}
        isReadOnly={false}
        value={postnr}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              epost,
              adresse,
              postnr: value,
              poststed,
              telefon,
            };
            const result = onChange(modelFields);
            value = result?.postnr ?? value;
          }
          if (errors.postnr?.hasError) {
            runValidationTasks("postnr", value);
          }
          setPostnr(value);
        }}
        onBlur={() => runValidationTasks("postnr", postnr)}
        errorMessage={errors.postnr?.errorMessage}
        hasError={errors.postnr?.hasError}
        {...getOverrideProps(overrides, "postnr")}
      ></TextField>
      <TextField
        label="Poststed"
        isRequired={false}
        isReadOnly={false}
        value={poststed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              epost,
              adresse,
              postnr,
              poststed: value,
              telefon,
            };
            const result = onChange(modelFields);
            value = result?.poststed ?? value;
          }
          if (errors.poststed?.hasError) {
            runValidationTasks("poststed", value);
          }
          setPoststed(value);
        }}
        onBlur={() => runValidationTasks("poststed", poststed)}
        errorMessage={errors.poststed?.errorMessage}
        hasError={errors.poststed?.hasError}
        {...getOverrideProps(overrides, "poststed")}
      ></TextField>
      <TextField
        label="Telefon"
        isRequired={false}
        isReadOnly={false}
        value={telefon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              epost,
              adresse,
              postnr,
              poststed,
              telefon: value,
            };
            const result = onChange(modelFields);
            value = result?.telefon ?? value;
          }
          if (errors.telefon?.hasError) {
            runValidationTasks("telefon", value);
          }
          setTelefon(value);
        }}
        onBlur={() => runValidationTasks("telefon", telefon)}
        errorMessage={errors.telefon?.errorMessage}
        hasError={errors.telefon?.hasError}
        {...getOverrideProps(overrides, "telefon")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || kundeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || kundeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
