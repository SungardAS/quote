import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Panel} from 'react-bootstrap';

//function nameFormatter(cell, row) {
//  return `<a href="/cmdb/company/${row.company_id}">${row.company_name}</a>`;
//}

const AsanasBootstrapTable = ({dats}) => {
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
AsanasBootstrapTable.propTypes = {
  dats: React.PropTypes.array.isRequired,
};

export default AsanasBootstrapTable;
