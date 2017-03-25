import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import Quotes from "./quote.container";
import BootstrapTable from "./quote.table";
import QuoteForm from "./quote.form";

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

storiesOf("quotes", module)
  .add("container", () => <Quotes />)
  .add("form", () => <QuoteForm />)
  .add("component", () => <BootstrapTable dats={data} />);
