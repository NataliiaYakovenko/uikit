import React, { Component } from "react";
import Radio from "../Radio/Radio";

class RadioGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sex: "m",
    };
  }

  sexHandler = ({ target: { value } }) => {
    this.setState({
      sex: value,
    });
  };

  render() {
    const { sex } = this.state;

    return (
      <div>
        {sex}
        <Radio
          value="m"
          name="sex"
          label="M"
          checked={sex === "m"}
          onChange={this.sexHandler}
        />
        <Radio
          value="f"
          name="sex"
          label="F"
          checked={sex === "f"}
          onChange={this.sexHandler}
        />
      </div>
    );
  }
}

export default RadioGroup;
