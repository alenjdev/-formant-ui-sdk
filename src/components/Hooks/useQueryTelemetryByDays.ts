import { Authentication, Fleet } from "@formant/data-sdk";
import { useEffect, useState } from "react";
import useDevice from "./useDevice";

type AggregateLevel =
  | "year"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second";

type DataType =
  | "bitset"
  | "localization"
  | "point cloud"
  | "location"
  | "file"
  | "health"
  | "transform tree"
  | "battery"
  | "video"
  | "numeric set"
  | "json"
  | "image"
  | "numeric"
  | "text";

const useQueryTelemetryByDays = (
  types: DataType[],
  days: number | string | undefined,
  aggregate?: AggregateLevel
) => {
  const device = useDevice();
  const [queryTelemetry, setQueryTelemetry] = useState<any[]>();

  useEffect(() => {
    getQueryTelemetry();
  }, [device]);

  const getQueryTelemetry = async () => {
    if (device === undefined) return;
    let telemetry: any[] = [];
    if (await Authentication.waitTilAuthenticated()) {
      telemetry = await Fleet.queryTelemetry({
        start: getStartISODate(days),
        end: new Date().toISOString(),
        aggregate,
        types: types,
        deviceIds: [device.id],
      });
    }
    setQueryTelemetry(telemetry);
  };
  return queryTelemetry;
};

const getStartISODate = (range: number | string | undefined) => {
  if (typeof range === "string") range = parseInt(range);
  if (range === undefined) range = 1;
  let daysInMilli = 86400000;
  daysInMilli = daysInMilli * range;
  let startDate = Date.now();
  startDate = startDate - daysInMilli;
  return new Date(startDate).toISOString();
};

export default useQueryTelemetryByDays;
