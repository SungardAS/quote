import React from "react";
import {expect} from "chai";
import {shallow, mount, render} from "enzyme";
import AsanaTable from "./asanas.table";

describe("<AsanaTable />", () => {
  let wrapper;
  const data = [
    { checked: false,
      createdAt: 1489405627533,
      id: "c90f83d0-07e2-11e7-90b4-a9f4f9e29b6d",
      english: "Uttanasana",
      updatedAt: 1489405627533
    },
    { checked: false,
      createdAt: 1489405627533,
      id: "c90f83d0-07e2-11e7-90b5-a9f4f9e29b6d",
      english: "Flopasana",
      updatedAt: 1489405627533
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<AsanaTable dats={data}/>);
  });

  it("wraps the name prop in an H4", () => {
    expect(wrapper.find("h4").first().text()).to.equal("Asanas");
  });

});
