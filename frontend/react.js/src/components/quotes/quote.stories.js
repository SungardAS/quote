import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import Quotes from "./quote.container";
import BootstrapTable from "./quote.table";
import QuoteForm from "./quote.form";

const data = [
  {
    createdAt: 1489405627533,
    id: "c90f83d0-07e2-11e7-90b4-a9f4f9e29b6d",
    firstName: "Matt",
    lastName: "Paz",
    quote: "I'm grateful for the opportunity.",
    updatedAt: 1489405627533
  },
  {
    createdAt: 1489405627533,
    id: "c90f83d0-07e2-11e7-90b4-a9f4f9e29b6d",
    firstName: "John",
    lastName: "Hiatt",
    quote: "Perfectly good guitar.",
    updatedAt: 1489405627533
  }
];

storiesOf("quotes", module)
  .add("container", () => <Quotes />)
  .add("form", () => <QuoteForm />)
  .add("component", () => <BootstrapTable dats={data} />);
