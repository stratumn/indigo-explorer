/*
  Copyright 2017 Stratumn SAS. All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

var React = require('react');
var ReactDOM = require('react-dom');
var IndigoExplorer = require('indigo-explorer');
import { Router, Route, browserHistory } from 'react-router';

var App = React.createClass({
	render () {
		return (
      <div>
        <Router history={browserHistory}>
          <Route path='/blockexplorer*' mount='/blockexplorer' component={IndigoExplorer} remote="localhost:46657"/>
        </Router>
        <IndigoExplorer remote="localhost:46657" />
      </div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
