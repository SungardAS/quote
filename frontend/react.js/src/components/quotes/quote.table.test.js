import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import BootstrapTable from "./quote.table";

describe("table", () => {
  let component;
  const data = [
    {
      createdAt: 1489405627533,
      id: "c90f83d0-07e2-11e7-90b4-a9f4f9e29b6d",
      authorFirstName: "Matt",
      authorLastName: "Paz",
      quote: "I'm grateful for the opportunity.",
      updatedAt: 1489405627533
    },
    {
      createdAt: 1489405627533,
      id: "c90f83d0-07e2-11e7-90b4-a9f4f9e29b6d",
      authorFirstName: "John",
      authorLastName: "Hiatt",
      quote: "Perfectly good guitar.",
      updatedAt: 1489405627533
    }
  ];

  beforeEach(() => {
    component = shallow(<BootstrapTable dats={data} />);
  });

  // 1. test for props for incoming data

  it("should have data property", () => {
    expect(component.props().data).to.be.exists;
  });

  // 2. additional tests related to ui function, data points etc.

  it("should show 4 columns", () => {
    const columns = component.find(TableHeaderColumn);
    expect(columns.length).to.equal(4);
  });

});
