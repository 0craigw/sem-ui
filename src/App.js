import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, List, Segment } from 'semantic-ui-react'


class App extends Component {
	render() {
		return (
			<div className="App">
				<Header as='h1'>
					Semantic UI examples
        		</Header>
				<Segment>
					<div>
						Here's a list
          			</div>
					<List items={['Apples', 'Bananas', 'Oranges']} />
				</Segment>
				<div>
					<Button size='small' color='green'>
						Button
          			</Button>
				</div>
			</div>
		);
	}
}

export default App;
