// @flow

type returnTypes = string | number | Function;
type Props = { [prop: string]: any };

export type StyleFunction = (
  props: Props,
) => $ReadOnlyArray<returnTypes> | void;
