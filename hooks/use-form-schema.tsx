import { z } from "zod";

export const createFormSchema = (inputs: any) => {
  //label,type,placeholder,wide

  const schemaObj: any = {};

  inputs.forEach(
    ({
      label,
      type,
      placeholder,
      required = false,
    }: {
      label: string;
      type: string;
      placeholder: string;
      required: boolean;
    }) => {
      switch (type) {
        case "submit":
          break;

        case "email":
          schemaObj[label] = z.string().email();

          return required
            ? schemaObj[label].min(1, {
                message: `Please ${placeholder.toLowerCase()}`,
              })
            : null;

        default:
          schemaObj[label] = z.string();

          return required
            ? schemaObj[label].min(1, {
                message: `Please ${placeholder.toLowerCase()}`,
              })
            : null;
      }
    }
  );
  return z.object(schemaObj);
};

const createDefaultValues = (inputs: any) => {
  const values: any = {};
  inputs.forEach(
    ({ label, defaultText = "" }: { label: string; defaultText: string }) => {
      return (values[label] = defaultText);
    }
  );
  return values;
};

function useFormSchema(inputs: any) {
  const formSchema = createFormSchema(inputs);
  const defaultValues = createDefaultValues(inputs);

  return { formSchema, defaultValues };
}

export default useFormSchema;
