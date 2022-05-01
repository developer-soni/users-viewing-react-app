import React, { Component } from "react";
// import { withRouter } from "react-router-dom";

export class TogglePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      data: [],
      loaded: false,
    };
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  async componentDidMount() {
    console.log("comp did mount");
    console.log(this.props.idno);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=1`
      );
      const data = await response.json();
      console.log(data);

      this.setState({ data: data, loaded: true });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log("render method called");
    console.log(this.props.idno);
    const { data, loaded } = this.state;

    return (
      <div>
        <div className="d-grid gap-2 mt-0">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.toggle}
          >
            Click Here to Load Posts
          </button>

          {this.state.on && (
            <>
              <div>
                {data.map((item) => {
                  return <h2 key={item.id}>{item.title} </h2>;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default TogglePosts;
