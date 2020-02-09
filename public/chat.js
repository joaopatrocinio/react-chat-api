const socket = io()

class Message extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<label>Anon: </label>
				<span>{ this.props.message }</span>
			</div>
		)
	}
}

class MessageList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const messages = this.props.messages.map(msg => {
			return <Message message={msg} />
		})
		
		return (
			<div>
				{messages}
			</div>
		)
	}
}

class EnterMessage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messageEnter: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.sendMessage = this.sendMessage.bind(this)
	}

	// Bind text input to component state
	handleChange(event) {
		this.setState({ messageEnter: event.target.value })
	}

	sendMessage() {
		// Doesn't let send empty messages
		if (!this.state.messageEnter);
		else {
			socket.emit("chat message", this.state.messageEnter)
			this.setState({messageEnter: ''})
		}
	}

	render() {
		return (
			<div>
				<input value={ this.state.messageEnter } onChange={this.handleChange} placeholder="Enter a message..."></input>
				<button onClick={ this.sendMessage }>Send</button>
			</div>
		)
	}
}

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			messages: []
		}
	}

	componentDidMount() {
		socket.on("chat message", msg => {
			console.log("message received")
			const messages = this.state.messages
			messages.push(msg)
			this.setState({
				messages: messages
			})
		})
	}

	render() {
		return (
			<div>
				<header>
					<h1>Real-time React Chat</h1>
					<EnterMessage />
				</header>
				<MessageList messages={this.state.messages}/>
			</div>
		)
	}
}

const domContainer = document.querySelector('#chat')
ReactDOM.render(<App />, domContainer)