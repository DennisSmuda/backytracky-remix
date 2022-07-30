interface InputProps {
  name: string;
  label: string;
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
  type = "text",
}: InputProps) {
  return (
    <label className="form-row" htmlFor={`${name}-input`}>
      <span>{label}</span>
      {/* {JSON.stringify(actionData.fields)} */}
      {name}
      <input
        type={type}
        id={`${name}-input`}
        name={name}
        defaultValue={actionData?.fields?.name}
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
