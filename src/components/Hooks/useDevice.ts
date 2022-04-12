import { Authentication, Fleet, Device } from "@formant/data-sdk";
import * as React from "react";

const useDevice = () => {
  const [device, setDevice] = React.useState<Device | undefined>();

  React.useEffect(() => {
    getCurrentDevice();
  }, []);

  const getCurrentDevice = async () => {
    try {
      if (await Authentication.waitTilAuthenticated()) {
        const current = await Fleet.getCurrentDevice();
        setDevice(current);
      }
    } catch (err) {
      throw new Error(
        "Authentication failed, please authenticate and try again"
      );
    }
  };

  return device;
};

export default useDevice;
