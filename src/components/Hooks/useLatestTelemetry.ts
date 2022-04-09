import { Authentication } from "@formant/data-sdk";
import { useEffect, useState } from "react";
import useDevice from "./useDevice";

const useLatestTelemetry = () => {
  const device = useDevice();
  const [latestTelemetry, setLatestTelemetry] = useState<any>();

  useEffect(() => {
    getLatestTelemetry();
  }, [device]);

  const getLatestTelemetry = async () => {
    if (device === undefined) return;
    let latestTelemetry = null;
    if (await Authentication.waitTilAuthenticated()) {
      latestTelemetry = await device!.getLatestTelemetry();
    }
    setLatestTelemetry(latestTelemetry);
  };
  return latestTelemetry;
};

export default useLatestTelemetry;
