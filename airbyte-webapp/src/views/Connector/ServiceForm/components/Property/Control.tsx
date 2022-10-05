import { FieldArray, useField } from "formik";
import React from "react";

import { DropDown } from "components/ui/DropDown";
import { Input } from "components/ui/Input";
import { Multiselect } from "components/ui/Multiselect";
import { TagInput } from "components/ui/TagInput";
import { TextArea } from "components/ui/TextArea";

import { FormBaseItem } from "core/form/types";
import { isDefined } from "utils/common";

import ConfirmationControl from "./ConfirmationControl";

interface ControlProps {
  property: FormBaseItem;
  name: string;
  unfinishedFlows: Record<string, { startValue: string }>;
  addUnfinishedFlow: (key: string, info?: Record<string, unknown>) => void;
  removeUnfinishedFlow: (key: string) => void;
  disabled?: boolean;
  error?: boolean;
}

export const Control: React.FC<ControlProps> = ({
  property,
  name,
  addUnfinishedFlow,
  removeUnfinishedFlow,
  unfinishedFlows,
  disabled,
  error,
}) => {
  const [field, meta, form] = useField(name);

  if (property.type === "array" && !property.enum) {
    return (
      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <TagInput
            name={name}
            value={(field.value || []).map((value: string, id: number) => ({
              id,
              value,
            }))}
            onEnter={(newItem) => arrayHelpers.push(newItem)}
            onDelete={(item) => arrayHelpers.remove(Number.parseInt(item))}
            addOnBlur
            error={!!meta.error}
            disabled={disabled}
          />
        )}
      />
    );
  }

  if (property.type === "array" && property.enum) {
    const data =
      property.enum?.length && typeof property.enum[0] !== "object"
        ? (property.enum as string[] | number[])
        : undefined;
    return (
      <Multiselect
        name={name}
        data={data}
        onChange={(dataItems) => form.setValue(dataItems)}
        value={field.value}
        disabled={disabled}
      />
    );
  }

  const value = field.value ?? property.default;
  if (property.enum) {
    return (
      <DropDown
        {...field}
        options={property.enum.map((dataItem) => ({
          label: dataItem?.toString() ?? "",
          value: dataItem?.toString() ?? "",
        }))}
        onChange={(selectedItem) => selectedItem && form.setValue(selectedItem.value)}
        value={value}
        isDisabled={disabled}
      />
    );
  } else if (property.multiline && !property.isSecret) {
    return <TextArea {...field} autoComplete="off" value={value ?? ""} rows={3} disabled={disabled} error={error} />;
  } else if (property.isSecret) {
    const unfinishedSecret = unfinishedFlows[name];
    const isEditInProgress = !!unfinishedSecret;
    const isFormInEditMode = isDefined(meta.initialValue);
    return (
      <ConfirmationControl
        component={
          property.multiline && (isEditInProgress || !isFormInEditMode) ? (
            <TextArea {...field} autoComplete="off" value={value ?? ""} rows={3} disabled={disabled} error={error} />
          ) : (
            <Input
              {...field}
              autoComplete="off"
              value={value ?? ""}
              type="password"
              disabled={disabled}
              error={error}
            />
          )
        }
        showButtons={isFormInEditMode}
        isEditInProgress={isEditInProgress}
        onDone={() => removeUnfinishedFlow(name)}
        onStart={() => {
          addUnfinishedFlow(name, { startValue: field.value });
          form.setValue("");
        }}
        onCancel={() => {
          removeUnfinishedFlow(name);
          if (unfinishedSecret && unfinishedSecret.hasOwnProperty("startValue")) {
            form.setValue(unfinishedSecret.startValue);
          }
        }}
        disabled={disabled}
      />
    );
  }
  const inputType = property.type === "integer" ? "number" : "text";

  return <Input {...field} autoComplete="off" type={inputType} value={value ?? ""} disabled={disabled} error={error} />;
};
