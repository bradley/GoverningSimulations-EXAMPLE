import React, { useEffect, useState } from "react";
import Axios from "axios";
import ls from "local-storage";

import { VslReports as VslReportsAgent } from "@app-front-end/Agent";
import {
  getLocalStorageWithExpiry,
  setLocalStorageWithExpiry
} from "@app-front-end/Utils/LocalStorage";

const VSL_REPORT_LOCAL_STORAGE_KEY = "GOVERNING_SIMULATIONS_VSL_REPORT";
const TEN_MINUTES = 1000 * 60 * 10;

const useFetchVslReport = (fetchImmediately=true) => {

  const locallyStoredVslReport =
    getLocalStorageWithExpiry(VSL_REPORT_LOCAL_STORAGE_KEY);
  const needsFetch = fetchImmediately && !(locallyStoredVslReport);

  const [fetchTrigger, setFetchTrigger] =
    useState(needsFetch ? (+new Date()) : null);
  const [loading, setLoading] = useState(needsFetch);
  const [vslReport, setVslReport] = useState(locallyStoredVslReport);

  useEffect(() => {
    if (!fetchTrigger) { return; }

    const cancelSource = Axios.CancelToken.source();

    const fetchVslReport = () => {
      setLoading(true);

      const locallyStoredVslReport =
        getLocalStorageWithExpiry(VSL_REPORT_LOCAL_STORAGE_KEY);

      // First check if we have a locally stored version of the VSL report that
      // has not yet expired. If we do, just use it. If not, fetch an updated
      // version and store it locally before returning.
      if (locallyStoredVslReport) {
        console.log(
          `Using version of VSL report stored in local storage. This data ` +
          `will persist for up to thirty minutes before being re-fetched. To ` +
          `clear this data now, run \`localStorage.clear();\` in your ` +
          `console and refresh.`
        );

        setVslReport(locallyStoredVslReport);
        setLoading(false);
      } else {
        console.log("Fetching fresh VSL report from remote server.");

        const options = {
          cancelToken: cancelSource.cancelToken
        };

        VslReportsAgent.get(options)
          .then(({ data: remoteVslReport }) => {
            setLocalStorageWithExpiry(
              VSL_REPORT_LOCAL_STORAGE_KEY,
              remoteVslReport,
              TEN_MINUTES
            );

            setVslReport(remoteVslReport);
            setLoading(false);
          })
          .catch(error => {
            console.error(
              "Something went wrong fetching VSL report:",
              error.message
            );
          });
      }
    };

    fetchVslReport();

    return () => {
      cancelSource.cancel();
    };
  }, [fetchTrigger]);

  const fetchVslReport = (clearLocallyStoredVslReport=true) => {
    if (clearLocallyStoredVslReport) {
      localStorage.removeItem(VSL_REPORT_LOCAL_STORAGE_KEY);
    }

    setFetchTrigger(+new Date());
  };

  return [
    {
      loading,
      vslReport
    },
    fetchVslReport
  ];
};

export default useFetchVslReport;
