import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

const MatomoTracker = () => {
  const instance = createInstance({
    urlBase: "https://matomo.bitpusher.se/",
    siteId: 4,
  });

  return <MatomoProvider value={instance} />;
};

export default MatomoTracker;
