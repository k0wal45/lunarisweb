import React from "react";
import { Container, Typography } from "./ui";

const Stats = () => {
  return (
    <Container
      as="section"
      className="border-y border-y-edge my-7 py-8 flex justify-start sm:justify-around flex-wrap gap-8"
    >
      <div className="flex items-end gap-4">
        <Typography as="p" variant="stat">
          5.0
        </Typography>
        <Typography as="p" variant="body" tone="muted">
          średnia ocena w Google
        </Typography>
      </div>
      <div className="flex items-end gap-4">
        <Typography as="p" variant="stat">
          od 2500zł
        </Typography>
        <Typography as="p" variant="body" tone="muted">
          strona już od
        </Typography>
      </div>
      <div className="flex items-end gap-4">
        <Typography as="p" variant="stat">
          24h
        </Typography>
        <Typography as="p" variant="body" tone="muted">
          więcej nie będziesz czekał na odpowiedź
        </Typography>
      </div>
    </Container>
  );
};

export default Stats;
