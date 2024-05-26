import { faImages, faPlusCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {  Row, Col, Card } from 'react-bootstrap';
import Loader from '../components/Loader';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import Pagination from '../components/Pagination';

const ListImage: React.FC = () => {
  const [imageData, setImageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(()=>{
    setIsMobile(window.innerWidth <= 560);
  },[])

  useEffect(() => {
    const getAllImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://simple-pexels-proxy.onrender.com/search?query=car&per_page=${perPage}&page=${currentPage}`);
        const data = await response.json();
        const { photos, total_results } = data;
        setImageData(photos);
        setTotalRows(total_results);
      } catch (error) {
        console.log("Error in image fetch api", error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllImages();
  }, [perPage, currentPage]);
  
  const totalPages = Math.ceil(totalRows / perPage)

  // const PrevBtn = ()=>{
  //   return(
  //     <Pagination.Prev
  //       disabled={currentPage === 1}
  //       onClick={() =>
  //         setCurrentPage(prevPage =>prevPage === 0 ? 0 : prevPage - 1
  //         )}>
  //       «
  //     </Pagination.Prev>
  //   )
  // }

  // const NextBtn = ()=>{
  //   return(
  //     <Pagination.Next
  //       disabled={currentPage === totalPages}
  //       onClick={() =>
  //       setCurrentPage(prevPage => prevPage === totalRows ? totalRows : prevPage + 1)}>
  //       »
  //     </Pagination.Next>
  //   )
  // }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
          {imageData.map((image: any, index: number) => (
            <Col key={index}>
                <div className="image-card">
                    <div className="image-wrapper">
                        <div className="image-details-container">
                          <p>{truncateText(image.alt, 50)}</p>
                        </div>
                        <Card.Img variant="top" className="image" src={isMobile ? image.src.small : image.src.large} title={image.alt} />
                        <div className="photographer-details-container">
                          <p>{image.photographer}</p>
                        </div>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faShoppingCart} className="heart-icon" />
                            <FontAwesomeIcon icon={faDownload} className="cart-icon" />
                            <FontAwesomeIcon icon={faPlusCircle} className="plus-icon" />
                            <FontAwesomeIcon icon={faImages} className="image-icon" />
                        </div>
                    </div>
                </div>
            </Col>
          ))}
        </Row>
      {/* <Pagination className='justify-content-center'>
        <PrevBtn/>
        {Array.from({length:totalPages}).map(
          (_, index) => (
            <Pagination.Item
              key={index}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
        <NextBtn/>
      </Pagination> */}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        totalImages={totalRows}
        setCurrentPage={setCurrentPage}/>
      {isLoading && <Loader />}
    </>
  );
};

export default ListImage;