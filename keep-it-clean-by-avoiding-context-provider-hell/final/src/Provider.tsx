import React from "react";

const nest = (children: React.ReactNode, component: React.ReactElement) =>
  React.cloneElement(component, {}, children);

export type ProviderProps = React.PropsWithChildren<{
  providers: React.ReactElement[];
}>;

const Provider: React.FC<ProviderProps> = ({ providers, children }) => (
  <React.StrictMode>{providers.reduceRight(nest, children)}</React.StrictMode>
);

export default Provider;
