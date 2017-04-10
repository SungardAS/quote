import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Panel } from "react-bootstrap";
import "./table.css";

const QuotesTable = ({ dats }) => {
  return (
      <Panel header="Quotes" bsStyle="primary">
        <BootstrapTable
          data={dats}
          containerClass='my-container-class'
          headerClass='my-header-class'
          bodyclass='my-body-class'
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
