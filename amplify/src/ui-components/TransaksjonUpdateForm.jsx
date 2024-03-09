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
import { getTransaksjon } from "../graphql/queries";
import { updateTransaksjon } from "../graphql/mutations";
const client = generateClient();
export default function TransaksjonUpdateForm(props) {
  const {
    id: idProp,
    transaksjon: transaksjonModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    betalingsmetode: "",
    betalingsstatus: "",
    total: "",
  };
  const [betalingsmetode, setBetalingsmetode] = React.useState(
    initialValues.betalingsmetode
  );
  const [betalingsstatus, setBetalingsstatus] = React.useState(
    initialValues.betalingsstatus
  );
  const [total, setTotal] = React.useState(initialValues.total);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = transaksjonRecord
      ? { ...initialValues, ...transaksjonRecord }
      : initialValues;
    setBetalingsmetode(cleanValues.betalingsmetode);
    setBetalingsstatus(cleanValues.betalingsstatus);
    setTotal(cleanValues.total);
    setErrors({});
  };
  const [transaksjonRecord, setTransaksjonRecord] =
    React.useState(transaksjonModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTransaksjon.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTransaksjon
        : transaksjonModelProp;
      setTransaksjonRecord(record);
    };
    queryData();
  }, [idProp, transaksjonModelProp]);
  React.useEffect(resetStateValues, [transaksjonRecord]);
  const validations = {
    betalingsmetode: [],
    betalingsstatus: [],
    total: [],
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
          betalingsmetode: betalingsmetode ?? null,
          betalingsstatus: betalingsstatus ?? null,
          total: total ?? null,
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
            query: updateTransaksjon.replaceAll("__typename", ""),
            variables: {
              input: {
                id: transaksjonRecord.id,
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
      {...getOverrideProps(overrides, "TransaksjonUpdateForm")}
      {...rest}
    >
      <TextField
        label="Betalingsmetode"
        isRequired={false}
        isReadOnly={false}
        value={betalingsmetode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              betalingsmetode: value,
              betalingsstatus,
              total,
            };
            const result = onChange(modelFields);
            value = result?.betalingsmetode ?? value;
          }
          if (errors.betalingsmetode?.hasError) {
            runValidationTasks("betalingsmetode", value);
          }
          setBetalingsmetode(value);
        }}
        onBlur={() => runValidationTasks("betalingsmetode", betalingsmetode)}
        errorMessage={errors.betalingsmetode?.errorMessage}
        hasError={errors.betalingsmetode?.hasError}
        {...getOverrideProps(overrides, "betalingsmetode")}
      ></TextField>
      <TextField
        label="Betalingsstatus"
        isRequired={false}
        isReadOnly={false}
        value={betalingsstatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              betalingsmetode,
              betalingsstatus: value,
              total,
            };
            const result = onChange(modelFields);
            value = result?.betalingsstatus ?? value;
          }
          if (errors.betalingsstatus?.hasError) {
            runValidationTasks("betalingsstatus", value);
          }
          setBetalingsstatus(value);
        }}
        onBlur={() => runValidationTasks("betalingsstatus", betalingsstatus)}
        errorMessage={errors.betalingsstatus?.errorMessage}
        hasError={errors.betalingsstatus?.hasError}
        {...getOverrideProps(overrides, "betalingsstatus")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              betalingsmetode,
              betalingsstatus,
              total: value,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
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
          isDisabled={!(idProp || transaksjonModelProp)}
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
              !(idProp || transaksjonModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
