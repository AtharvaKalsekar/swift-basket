import React, { useState } from "react";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Row>
        <Col md={8}>
          <FormControl
            type="text"
            name="q"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search"
            className="mr-sm-2 ml-sm-5"
          ></FormControl>
        </Col>
        <Col md={4}>
          <Button type="submit" variant="online-success" className="p-2">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
