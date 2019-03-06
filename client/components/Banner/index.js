import React from "react";
import { PoseGroup } from "react-pose";

import { Container, FirstLine, SecondLine } from "./Banner.style";

const taglines = [
  {
    first: "Pulse Networks",
    second: "Bridging the Gap"
  },
  {
    first: "Tomorrows Technology",
    second: "for Today’s Solutions"
  },
  {
    first: "Many Fibres",
    second: "Make Light Work"
  },
  {
    first: "High Speed Doesn't",
    second: "Have to be Dangerous"
  }
];

class Banner extends React.Component {
  state = {
    showTag: 0
  };
  nextTag = () => {
    if (this.state.showTag < 3) {
      this.setState({ showTag: this.state.showTag + 1 });
    } else this.setState({ showTag: 0 });
  };
  componentDidMount() {
    this.changeTag = setInterval(() => this.nextTag(), 7500);
  }
  componentWillUnmount() {
    clearInterval(this.changeTag);
  }
  render() {
    const firstTag = taglines[this.state.showTag].first;
    const secondTag = taglines[this.state.showTag].second;
    return (
      <Container>
        <PoseGroup animateOnMount preEnterPose="preEnter">
          <FirstLine key={firstTag}>{firstTag}</FirstLine>
          <SecondLine key={secondTag}>{secondTag}</SecondLine>
        </PoseGroup>
        <object type="image/svg+xml" data="PulseBanner_1_0.svg" />
      </Container>
    );
  }
}

export default Banner;
