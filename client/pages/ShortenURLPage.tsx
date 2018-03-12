import * as React from "react";
import BaseLayout from "./BaseLayout";
import ShortenURLForm from "../components/ShortenURLForm";

const baseStylesMixin: React.CSSProperties = {
  textAlign: "center",
  marginTop: "15%",
};

export default () => {
  return (
    <BaseLayout mixinStyles={baseStylesMixin}>
      <h1>Mochi - a simple URL shortner</h1>
      <ShortenURLForm />
    </BaseLayout>
  );
};
