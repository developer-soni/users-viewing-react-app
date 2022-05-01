import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { BsFillFilePersonFill } from "react-icons/bs";

class FetchUser extends Component {
  state = {
    data: [],
    loaded: false,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);

      setTimeout(() => {
        this.setState({ data: data, loaded: true });
      }, 0);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log("render method called");
    const { data, loaded } = this.state;

    return (
      <div className="user-cont">
        {!loaded ? (
          <div>Loading...</div>
        ) : (
          <ul className="list-group">
            {data.map((item) => {
              return (
                <ul key={item.id}>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip>
                        Username: {item.username} <br></br> Email: {item.email}
                      </Tooltip>
                    }
                  >
                    <Link
                      to={`/users/${item.id}`}
                      className="list-group-item list-group-item-action user-box mt-2"
                      key={item.id}
                    >
                      {<BsFillFilePersonFill />} {item.name}
                    </Link>
                  </OverlayTrigger>
                </ul>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default FetchUser;
