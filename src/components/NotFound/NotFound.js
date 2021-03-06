import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="page-404">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
            <div class="row">
              <div class="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                <h1 class="m-0">404</h1>
                <h6>Page not found</h6>
                <p>Go back to the home page to get latest team update.</p>
                <LinkContainer to="/">
                  <Button variant="dark">Home</Button>
                </LinkContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
