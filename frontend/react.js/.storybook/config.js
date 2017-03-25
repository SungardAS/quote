import { configure } from '@kadira/storybook';
require('bootstrap/dist/css/bootstrap.css');
require('react-bootstrap-table/css/react-bootstrap-table.css');

const req = require.context("../src/components", true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
