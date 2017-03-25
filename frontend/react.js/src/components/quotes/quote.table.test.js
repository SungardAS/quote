import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import BootstrapTable from "./quote.table";

describe("table", () => {
  let wrapper;
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
    wrapper = shallow(<BootstrapTable dats={data} />);
  });

  it("wraps the name prop in an H4", () => {
    expect(wrapper.find("h4").first().text()).to.equal("Quotes");
  });
});
