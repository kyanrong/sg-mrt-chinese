import React from 'react';

import reduce from 'lodash.reduce';
import sortBy from 'lodash.sortby';
import { SimpleSelect } from 'react-selectize';

const Searchbox = ({ onSelectStation, options }) => {
  if (!options || !options.length) {
    return null;
  }

  const customFilter = (options, search) => {
    const searchResults = options.filter(x => x.label.toLowerCase().indexOf(search.toLowerCase()) > -1);
    if (searchResults && searchResults.length > 1) {
      let stations = sortBy(searchResults, ['label']);
      stations = reduce(stations, (result, nextVal) => {
        let stn = nextVal;
        const index = result.findIndex(x => x.label === nextVal.label);
        if (index > -1) {
          stn = result[index];
          stn = {
            ...stn,
            value: [stn.value, nextVal.value].join('-'),
          };
          result[index] = stn;
          return result;
        }
        return result.concat([stn]);
      },[]);
      return stations;
    }
    return searchResults;
  };

  return (
    <SimpleSelect
    theme="bootstrap3"
    options={options}
    filterOptions={(options, search) => customFilter(options, search)}
    onValueChange={item => onSelectStation(item)}
    placeholder="Type to search for a station..." />
  )
};

export default Searchbox;
