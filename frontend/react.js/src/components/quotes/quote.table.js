import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Panel } from "react-bootstrap";

const QuotesTable = ({ dats }) => {
  return (
    <Panel header="Quotes" bsStyle="primary">
      <BootstrapTable
        data={dats}
        tableStyle={{ border: "#0000FF 2.5px solid" }}
        containerStyle={{ border: "#FFBB73 2.5px solid" }}
        headerStyle={{ border: "red 1px solid" }}
        bodyStyle={{ border: "green 1px solid" }}
      >
        <TableHeaderColumn dataField="id" isKey={true}>ID</TableHeaderColumn>
        <TableHeaderColumn
          dataField="firstName"
          dataSort={true}
          filter={{ type: "TextFilter", delay: 1000 }}
        >
          First Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="lastName"
          dataSort={true}
          filter={{ type: "TextFilter", delay: 1000 }}
        >
          Last Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="quote">Quote</TableHeaderColumn>
      </BootstrapTable>
    </Panel>
  );
};

/**
 * propTypes
 * @property {string} dats data
 */
QuotesTable.propTypes = {
  dats: React.PropTypes.array.isRequired
};

export default QuotesTable;
