import { BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar";
import { render } from "@testing-library/react";

describe('Test the Navbar', () => {
  test('should have a / url in the href attribute', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>
    );
    expect(getByTestId("navbar-brand")).toHaveAttribute("href", "/");
    
    
  })
  
  
})