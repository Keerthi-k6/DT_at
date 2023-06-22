import React,{ useState}  from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import "./button.css"
import "./AssetCard.css"
import Collapse from 'react-bootstrap/Collapse';
const AssetCards = ({asset}) => {
    const [open, setOpen] = useState(true);
    const { asset_title, asset_description, asset_content, asset_content_type } = asset;
    let media;
    if (asset_content_type === 'video') {
      media = <iframe src={asset_content} title={asset_title} width="520" height="315" frameBorder="0" allowFullScreen></iframe>;
    }
  return (
    <>
    <Card className='main-container' style={{boxShadow: '0px -4px 4px 0px #00000040',
boxShadow: '0px 4px 4px 0px #00000040',borderRadius:'15px 15px 15px 15px'
}}>
      <Card.Header className='bg-dark text-white d-flex  header1'style={{borderRadius:'15px 15px 0 0',justifyContent:'space-evenly',textAlign:'center'}} >{asset_title}
      <FontAwesomeIcon icon={faCircleInfo} onClick={() => setOpen(!open)} style={{height:'22px',position:'absolute',top:'2%',right:'50px'}}
        aria-controls="example-collapse-text"
        aria-expanded={open}/></Card.Header>
        <Container>
      <Card.Body className='d-flex align-content-center flex-wrap flex-column'>
      <Collapse in={open}>
        <Card.Title> <p><b> Description:</b>{asset_description}</p></Card.Title>
        </Collapse>
        <Card.Text >
        {media}
        </Card.Text>
      </Card.Body>
      </Container>
    </Card>
  </>
  )

}

export default AssetCards

