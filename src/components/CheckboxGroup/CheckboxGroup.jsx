import React, { Component } from "react";
import Checkbox from "../Checkbox/Checkbox";

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [],
    };
  }

  languagesHandler = ({ target: { value } }) => {
    const { languages } = this.state;
    const newLanguage = [...languages];
    const index = newLanguage.indexOf(value);
    if (index === -1) {
      newLanguage.push(value);
    } else {
      newLanguage = newLanguage.filter((_item, i) => {
        return index !== i;
      });
    }

    this.setState({
      languages: newLanguage,
    });
  };

  render() {
    const { languages } = this.state;

    return (
      <div>
        {languages.length}
        <Checkbox
          value="JS"
          name="languages"
          label="JS"
          checked={languages.includes("JS")}
          onChange={this.languagesHandler}
        />
        <Checkbox
          value="Java"
          name="languages"
          label="Java"
          checked={languages.includes("Java")}
          onChange={this.languagesHandler}
        />
        <Checkbox
          value="C++"
          name="languages"
          label="C++"
          checked={languages.includes("C++")}
          onChange={this.languagesHandler}
        />
      </div>
    );
  }
}

export default CheckboxGroup;
