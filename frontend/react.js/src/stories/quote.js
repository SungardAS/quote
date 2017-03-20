import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import Quotes from "../components/quotes/quote.container";

storiesOf("quotes", module).add("bootstrap table", () => <Quotes />);
