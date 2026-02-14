import * as coda from "@codahq/packs-sdk";

export function setAuthentication(pack: coda.PackDefinitionBuilder) {
  // Bearer token authentication
  // OpenProject uses API key via Basic Auth with username "apikey"
  pack.setUserAuthentication({
    type: coda.AuthenticationType.HeaderBearerToken,
    instructionsUrl: "https://www.openproject.org/docs/api/authentication/",
  });

  // Network domain for the pack
  pack.addNetworkDomain("openproject.com");
}
