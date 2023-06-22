import React from 'react'
import Data from "./Data.json"
import AssetCards from './AssetCards'
import Container from 'react-bootstrap/esm/Container';
import "./Assetlist.css";

const Assetlist = () => {
  return (
    <>
    <div className="asset-card-list">
      {Data.map((item, index) => (
        <Container key={index} className='asset-grid'>
          {item.assets.map((asset, index) => (
            <AssetCards key={index} asset={asset} />
          ))}
        </Container>
      ))}
    </div>
    </>
  )
}

export default Assetlist
