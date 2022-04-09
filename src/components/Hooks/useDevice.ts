import { Authentication, Fleet, Device } from "@formant/data-sdk";
import { useEffect, useState } from "react";

const useDevice = () => {
  const [device, setDevice] = useState<Device | undefined>();

  useEffect(() => {
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
