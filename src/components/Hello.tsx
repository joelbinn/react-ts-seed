import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export interface HelloState {
  message: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, HelloState> {

  constructor(props: HelloProps) {
    super(props);
    this.state = {message: 'Kaka'};
  }

  handleSubmit(e: any) {
    console.log('Event:', e);
    alert('Skickade: ' + this.state.message);
    e.preventDefault();
  }

  handleChange(e: any) {
    this.setState({message: e.target.value.toUpperCase()});
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.message} from {this.props.compiler} and {this.props.framework}!</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.message} onChange={e => this.handleChange(e)}/>
          </label>
          <input type="submit" value="Skicka"/>
        </form>
        <div>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }


}