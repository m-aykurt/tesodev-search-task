import { useRef } from "react";
import { Container, Form, Input, Button, Logo } from "./ResultStyle";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";


const Result = (props) => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    props.search(inputRef.current.value);
  };

  return (
    // 3 den fazla olan verileri göstermek için showMore a tetiklenince acılan pencere
    <Container>
      <Form onSubmit={submitHandler}>
        <Link to="/">
          <Logo src="https://raw.githubusercontent.com/tesodev/jqueryLite/master/docs/img/tesodevVector.png" />
        </Link>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Please enter name or surname"
        />
        <Button type="submit">Search</Button>
      </Form>
      {/* show more a basınca 3 ten fazla card ın döneceği comp pagination */}
      <Pagination />
    </Container>
  );
};
export default Result