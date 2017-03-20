import React, { Component } from "react";
import Api from "../../utils/api";
import DataList from "./quote.table";

let resource = "/quotes";

class QuotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dat: [],
      loading: true,
      error: null
    };
  }

  getData() {
    const self = this;
    Api.getData(resource, function(response) {
      if (response && !response.error) {
        console.log(response);
        const dat = response;
        self.setState({
          dat,
          loading: false,
          error: null
        });
      } else {
        self.setState({
          loading: false,
          error: response.error
        });
      }
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return <DataList dats={this.state.dat} />;
  }
}

export default QuotesContainer;
