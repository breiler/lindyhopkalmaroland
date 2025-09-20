import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MatomoTracker = ({ children }: Props) => {
  const instance = createInstance({
    urlBase: "https://matomo.bitpusher.se/",
    siteId: 4,
  });

  return <MatomoProvider value={instance}>{children}</MatomoProvider>;
};

export default MatomoTracker;
