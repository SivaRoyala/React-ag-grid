import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FcDocument } from "react-icons/fc";
export default class CustomDocumentCellRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  refresh(params) {
    if (params.value !== this.state.value) {
      this.setState({
        value: params.value,
      });
    }
    return true;
  }

  render() {
    return (
      <IconContext.Provider
        value={{ style: { fontSize: "22px", color: "rgb(0, 123, 255)" } }}
      >
        <div>
          <FcDocument />
        </div>
      </IconContext.Provider>
    );
  }
}
