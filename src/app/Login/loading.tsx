import { Card, Skeleton, Spinner } from "@nextui-org/react";
import React from "react";

function Loading() {
  return (
    <Spinner color="secondary" aria-label="Loading Spinner" size="lg" />
  );
}

export default Loading;
