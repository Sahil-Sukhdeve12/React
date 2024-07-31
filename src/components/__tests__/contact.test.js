import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { execPath } from "process";

describe("Contact Us Page Test Cases",()=>{ //grouping all test cases in one group.

it("Should load contact us component",()=>{
    render(<Contact/>);

    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component",()=>{
    render(<Contact/>);

    const button=screen.getByRole("button");

    expect(button).toBeInTheDocument();
});

test("contains submit text in contact us component",()=>{
    render(<Contact/>);

    const text=screen.getByText("Submit");

    expect(text).toBeInTheDocument();
});

// test("contains submit text in contact us component",()=>{
//     render(<Contact/>);

//     const text=screen.getByText("Random");

//     expect(text).toBeInTheDocument();
// });

// test("contains text in contact us component",()=>{
//     render(<Contact/>);

//     const text=screen.getByTestId("mobile_no");

//     expect(text).toBeInTheDocument();
// });

test("Should load 2 input boxes on the contact component",()=>{
    render(<Contact/>);

    // this command is called querying
    const inputBoxes=screen.getAllByRole("textbox");

    //console.log(inputBoxes); //this is return 2 objects which consists react's virtual dom element. (all of this is input tag)

    console.log(inputBoxes.length);

    // expect(inputBoxes.length).toBe(5);

    expect(inputBoxes.length).not.toBe(1);

    expect(inputBoxes.length).toBeGreaterThan(1);
});

});