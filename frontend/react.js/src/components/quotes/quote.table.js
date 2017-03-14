import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Panel} from 'react-bootstrap';

//function nameFormatter(cell, row) {
//  return `<a href="/quotes/${row.id}">${row.quote}</a>`;
//}

const QuotesTable = ({dats}) => {
  return (
    <Panel header="Quotes" bsStyle="primary">
      <BootstrapTable data={dats} striped={true} hover={true}>
        <TableHeaderColumn dataField='authorFirstName'>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='authorLastName'>Last Name</TableHeaderColumn>
        <TableHeaderColumn dataField='quote'>Quote</TableHeaderColumn>
        <TableHeaderColumn dataField='createdAt'>Created At</TableHeaderColumn>
        <TableHeaderColumn dataField='updatedAt'>Updated At</TableHeaderColumn>
        <TableHeaderColumn dataField='id' isKey>Id</TableHeaderColumn>
      </BootstrapTable>
    </Panel>
  );
};

/**
 * propTypes
 * @property {string} dats data
 */
QuotesTable.propTypes = {
  dats: React.PropTypes.array.isRequired,
};

export default QuotesTable;
