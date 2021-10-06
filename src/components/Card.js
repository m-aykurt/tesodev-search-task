import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { search } from "../actions/actions";
import {
  Container,
  CardItem,
  Wrapper,
  Top,
  Bottom,
  Line,
  Form,
  Input,
  Button,
  NumberResult,
  ShowMore,
} from "./CardStyle";

const Card = (props) => {
  const [show, setShow] = useState(false);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
    props.search(inputRef.current.value);
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Please enter name or surname"
        />
        <Button type="submit">Search</Button>
      </Form>
      {show && (
        <Container>
          <CardItem>
            {props.filteredData?.map((item) => {
              return (
                <Wrapper key={item.email}>
                  <Top>
                    <span>
                      {item.country} - {item.city}
                    </span>
                    <span>{item.email}</span>
                  </Top>
                  <Bottom>
                    <span>{item.name}</span>
                    <span> - {item.year}</span>
                  </Bottom>
                  <Line></Line>
                </Wrapper>
              );
            })}
          </CardItem>
          <NumberResult>
            Number of results: {props.filteredData.length}
          </NumberResult>
          {props.filteredData?.length > 3 && (
            <Link to="result">
              <ShowMore>Show more...</ShowMore>
            </Link>
          )}
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    filteredData: state.filteredData,
  };
};
export default connect(mapStateToProps, { search })(Card);
