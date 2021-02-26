import React from 'react';
import { useLocation } from "@reach/router"
import { defaultFacets, normalizeItems, sortOptions } from '../../config/search';
import { Search, SearchSidebar, SearchContent } from "@civicactions/data-catalog-components";
import Layout from "../../components/Layout";

const SearchTemplate = ({path}) => {
  const location = useLocation();
  return (
    <Layout title="Search">
    <div className="dc-page grid-container">
        <h1>Datasets</h1>
        <Search
          searchEndpoint={`${process.env.REACT_APP_ROOT_URL}/search`}
          defaultFacets={defaultFacets}
          sortOptions={sortOptions}
          setSearchUrl={true}
          path={path}
          location={location}
          normalize={normalizeItems}
        >
          <div className="grid-row">
            <div className="tablet:grid-col-8"><SearchContent /></div>
            <div className="tablet:grid-col-4"><SearchSidebar /></div>
          </div>
        </Search>
      </div>
      </Layout>
  );
}

export default SearchTemplate;
