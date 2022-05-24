import React from 'react'

const Box = (props) => {
  let result;
  if (
    props.title == "Computer" &&
    props.result !== "무승부" &&
    props.result !== "" 
  ) {
    result = props.result === "이김"?"짐":"이김"
  }else {
    result = props.result;
  }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  )
}

export default Box