import { Row, Col, Image, ListGroup, Form} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from "react";

const CartItemComponent = ({ item,style,removeFromCartHandler = false,orderCreated = false, ChangeCount = false} ) => {

  const [selectedCount, setSelectedCount] = useState(item.quantity);
   const [existingCount, setExistingCount] = useState(2);

  // useEffect(() => {
  //   if (existingCartItems && Array.isArray(existingCartItems)) {
  //     const matchedCartItem = existingCartItems.find(
  //       (cartItem) => cartItem.productId === item._id
  //     );
  //     if (matchedCartItem) {
  //       setExistingCount(matchedCartItem.quantity);
  //     } else {
  //       setExistingCount(null);
  //     }
  //   }
  // }, [existingCartItems, item._id]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart && cart.cartItems) {
      const matchedCartItem = cart.cartItems.find((cartItem) => cartItem.productId === item._id);
      if (matchedCartItem) {
        setExistingCount(matchedCartItem.quantity);
      } else {
        setExistingCount(null);
      }
    }
  }, [item._id]);
  


  const handleCountChange = (e) => {
 
    const newCount = parseInt(e.target.value) || 1;

      
    setSelectedCount(newCount); 
    ChangeCount(item._id,newCount);
  };



  


  return (
    <>
      <ListGroup.Item style={style}> 
        <Row>
          <Col md={2}>
            <Image
              crossOrigin="anonymous"
              src={item.images[0] ? item.images[0].path : null}
              fluid
            />
          </Col>
          <Col md={2} className="text-center mt-4">{item.medi_name}</Col>
          <Col md={2} className="text-center mt-4">
          <b style={{ color: 'blue', fontWeight: 'bold' }}>Rs.{item.price}</b>
          </Col>
          <Col md={3} className="text-center mt-4">
            <Form.Select disabled={orderCreated} value={selectedCount} onChange={handleCountChange}>
            {[...Array(item.qty).keys()].map((x) => (
              <option key={x + 1} value={x + 1} selected={existingCount === x + 1 }>
                {x + 1}
              </option>
              ))}
            </Form.Select>
          </Col> 
          <Col md={3} className="text-center mt-4">
              <i className="bi bi-trash3-fill"></i> 
          </Col>
        </Row>
      </ListGroup.Item>
      <br />
    </>
  );
};

export default CartItemComponent;