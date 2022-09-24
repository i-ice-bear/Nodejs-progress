import { WebRiskServiceClient, protos } from '@google-cloud/web-risk'

async function GoogleCloudCheckRisk(uri) {
  const client = new WebRiskServiceClient();

  const requests = {
    uri: uri,
    threatTypes: [
      protos.google.cloud.webrisk.v1.ThreatType.MALWARE,
      protos.google.cloud.webrisk.v1.ThreatType.SOCIAL_ENGINEERING,
      protos.google.cloud.webrisk.v1.ThreatType.THREAT_TYPE_UNSPECIFIED,
    ],
  };
  const { threat } = (await client.searchUris(requests))[0];
  if (threat) {
    console.log("There is a threat");
  } else {
    console.log("No threat found");
  }
}

GoogleCloudCheckRisk();
