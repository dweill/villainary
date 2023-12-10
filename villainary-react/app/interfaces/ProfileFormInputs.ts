import { IntakeFormInputs } from "./IntakeFormInputs";

export type ProfileFormInputs = {
  laughOnAction: boolean,
  evilLaughUrl: string,
} & Pick<IntakeFormInputs, 'villainName'>