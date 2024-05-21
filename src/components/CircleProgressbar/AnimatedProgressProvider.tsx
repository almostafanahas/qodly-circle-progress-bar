import React, { Component } from "react";
import { Animate } from "react-move";

interface AnimatedProgressProviderProps {
  valueStart?: number;
  valueEnd: number;
  duration: number;
  easingFunction: (t: number) => number;
  repeat?: boolean;
  children: (value: number) => React.ReactNode;
}

interface AnimatedProgressProviderState {
  isAnimated: boolean;
}

class AnimatedProgressProvider extends Component<
  AnimatedProgressProviderProps,
  AnimatedProgressProviderState
> {
  interval: ReturnType<typeof setInterval> | undefined;

  static defaultProps: Partial<AnimatedProgressProviderProps> = {
    valueStart: 0,
  };

  state: AnimatedProgressProviderState = {
    isAnimated: false,
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          isAnimated: !prevState.isAnimated,
        }));
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <Animate<{ value: number }>
        start={() => ({
          value: this.props.valueStart!,
        })}
        update={() => ({
          value: [this.state.isAnimated ? this.props.valueEnd : this.props.valueStart!],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction,
          },
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

export default AnimatedProgressProvider;

