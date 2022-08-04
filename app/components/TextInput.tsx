interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  actionData?: {
    fields: { name: string };
    fieldErrors: { name: string };
  };
}

export default function TextInput({
  name,
  label,
  actionData,
  placeholder = "",
  required = false,
  type = "text",
}: InputProps) {
  // console.log("Default Value", actionData?.fields, actionData?.fields);
  return (
    <label className="form-row" htmlFor={`${name}-input`}>
      <span>{label}</span>
      {/* {JSON.stringify(actionData.fields)} */}
      {/* {name} */}
      {/* {JSON.stringify(actionData?.fields)} */}
      <input
        type={type}
        id={`${name}-input`}
        name={name}
        required={required}
        placeholder={placeholder}
        defaultValue={actionData?.fields?.name}
        min={type === "number" ? "30" : undefined}
        max={type === "number" ? "280" : undefined}
        aria-invalid={Boolean(actionData?.fieldErrors?.name)}
        aria-errormessage={
          actionData?.fieldErrors?.name ? `${name}-error` : undefined
        }
      />
      {actionData?.fieldErrors?.name ? (
        <span
          className="form-validation-error"
          role="alert"
          id={`${name}-error`}
        >
          {actionData.fieldErrors.name}
        </span>
      ) : null}
    </label>
  );
}
