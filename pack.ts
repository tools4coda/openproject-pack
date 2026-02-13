import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

pack.setUserAuthentication({
  type: coda.AuthenticationType.WebBasic,
});

// TODO: Implement pack functionality based on SPEC.md
// Service: OpenProject API V3 (Stable)
// Version: 3
