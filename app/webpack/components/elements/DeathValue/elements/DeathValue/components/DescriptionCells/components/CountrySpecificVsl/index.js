import React, { useMemo, useState } from "react";

import { Dropdown, Item, Menu, Trigger } from "@app-front-end/UI/Dropdown";

import DescriptionCell from "../../views/DescriptionCell";
import DescriptionText from "../../views/DescriptionText";

import CountryAnchor from "./views/CountryAnchor";

const SELECTED_COUNTRY_LOCAL_STORAGE_KEY =
  "GOVERNING_SIMULATIONS_SELECTED_COUNTRY";

const DEFAULT_COUNTRY_KEY = "Russia"

const CountrySpecificVsl = props => {
  const { vslReport } = props;

  const [selectedCountry, setSelectedCountry] = useState(() => {
    let country = localStorage.getItem(SELECTED_COUNTRY_LOCAL_STORAGE_KEY);

    if (!country) {
      country = DEFAULT_COUNTRY_KEY;
    }

    return country;
 });

  const countrySelectMenuItems = useMemo(() => {
    return (
      <React.Fragment>
        {
          Object.values(vslReport).map(countryData => {
            const country = countryData["country"];

            return (
              <Item key={country} value={country}>
                { country }
              </Item>
            );
          })
        }
      </React.Fragment>
    );
  }, [vslReport]);

  const renderCountrySelect = () => {
    return (
      <Dropdown
        selectedItem={selectedCountry}
        onSelect={
          country => {
            localStorage.setItem(
              SELECTED_COUNTRY_LOCAL_STORAGE_KEY,
              country
            );
            setSelectedCountry(country);
          }
        }
        downshiftProps={
          {
            itemToString: selectedCountry => selectedCountry
          }
        }
      >
        <Trigger>
          <CountryAnchor>
            { selectedCountry }
          </CountryAnchor>
        </Trigger>
        <Menu placement="top">
          { countrySelectMenuItems }
        </Menu>
      </Dropdown>
    );
  };

  const selectedCountryVsl = useMemo(() => {
    const vsl = Math.round(vslReport[selectedCountry]["vsl"] * 1000000);

    const vslAsDollarAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(vsl).replace(/\.\d\d/, "");

    return vslAsDollarAmount;
  }, [selectedCountry]);

  return (
    <DescriptionCell>
      <DescriptionText>
        The same model would value your death in { renderCountrySelect() } at
        {" "}{ selectedCountryVsl }.
      </DescriptionText>
    </DescriptionCell>
  );
};

export default CountrySpecificVsl;
