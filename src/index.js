import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import SingleCard from './SingleCard';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
const lists = Children.map(this.props.children, child => (  
/*HoverBodyTextFontSize: 12,
    HoverBodyTextColor: 'white'*/
      <SingleCard HoverBodyTextFontSize={child.props.HoverBodyTextFontSize} HoverBodyTextColor={child.props.HoverBodyTextColor} HoverHeaderTextColor={child.props.HoverHeaderTextColor} HeaderTextColor={child.props.HeaderTextColor} HeaderTextFontSize={child.props.HeaderTextFontSize} Height={child.props.Height} Width={child.props.Width} BodyTextColor={child.props.BodyTextColor} BodyTextFontSize={child.props.BodyTextFontSize} HoverColor={child.props.HoverColor} Target={child.props.Target} Link={child.props.Link} BodyText={child.props.BodyText} HeaderText={child.props.HeaderText} ImageLink={child.props.ImageLink} textSmallSize={child.props.textSmallSize}>{child}</SingleCard>
    ));

    return (
      <div>
        {lists}
      </div>
    )
  }
}
