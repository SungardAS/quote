import { configure } from '@kadira/storybook';
require('bootstrap/dist/css/bootstrap.css');
require('react-bootstrap-table/css/react-bootstrap-table.css');

function loadStories() {
  require('../src/stories/quote');
}

configure(loadStories, module);
