import React from "react";
import { StyledWrapper } from "./homePage.style";
import { Container, Row, Col } from "../../components/grid/Grid";
import Form from "./Form";
import Header from "./Header";

const HomePage = () => {
  return (
    <StyledWrapper>
      <Container>
        <Row>
          <Header />
          <Col sm={6} xs={12} style={{ marginBottom: "1rem" }}>
            Halvah lollipop cookie. Chupa chups cake apple pie icing biscuit
            lemon drops. Halvah marzipan wafer gingerbread danish bonbon tootsie
            roll chocolate bar jujubes. Tiramisu gummi bears candy. Jujubes
            sweet wafer marshmallow. Chocolate pastry wafer lemon drops jelly
            macaroon macaroon chupa chups. Marzipan chocolate chupa chups
            caramels. Candy canes wafer candy canes marshmallow bonbon
            fruitcake.
          </Col>
          <Col sm={6} xs={12} style={{ marginBottom: "1rem" }}>
            Dessert powder tiramisu jelly beans muffin lemon drops apple pie.
            Jelly-o croissant topping tart danish fruitcake. Tootsie roll
            jelly-o muffin oat cake apple pie. Tootsie roll cake caramels.
            Brownie macaroon tart jelly. Apple pie dessert marshmallow caramels
            dragée oat cake croissant chocolate. Tart marshmallow sweet halvah
            fruitcake marzipan lemon drops.
          </Col>
          <Form />
        </Row>
      </Container>
    </StyledWrapper>
  );
};

export default HomePage;
