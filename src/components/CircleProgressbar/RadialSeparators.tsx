import React from "react";
import _ from "lodash";

interface SeparatorProps {
  turns: number;
  style: React.CSSProperties;
}

function Separator(props: SeparatorProps) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

interface RadialSeparatorsProps {
  count: number;
  style: React.CSSProperties;
}

function RadialSeparators(props: RadialSeparatorsProps) {
  const turns = 1 / props.count;
  return _.range(props.count).map(index => (
    <Separator turns={index * turns} style={props.style} key={index} />
  ));
}

export default RadialSeparators;
