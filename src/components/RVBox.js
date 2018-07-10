import React from 'react'
import { css } from 'emotion'
import { Box } from 'styles'

export default class RVBox extends React.Component {
  render() {
    const {
      className: classNameProp,
      boxRef,
      style: customStyle,
      tag: Component,
      ...props
    } = this.props

    const restProps = {}
    const style = []

    style.push(classNameProp)

    Object.keys(props).map(key => {
      if (props[key] === true && Box[key]) {
        style.push(Box[key])
      } else {
        restProps[key] = props[key]
      }
    })

    style.push(customStyle)

    // TODO: Don't create new class every re-render
    const className = css(style)

    return <Component {...restProps} className={className} ref={boxRef} />
  }
}

RVBox.defaultProps = {
  tag: 'div',
}
