import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'


export default class SingleCard extends Component {
  static propTypes = {
    ImageLink: PropTypes.string,
    ImageHeight: PropTypes.number,
    HeaderText: PropTypes.string,
    BodyText: PropTypes.string,
    BodyColor: PropTypes.string,
    Link: PropTypes.string,
    ImageOpacity: PropTypes.number,
    Height: PropTypes.number,
    Width: PropTypes.string,
    alternateText: PropTypes.string,
    HoverColor: PropTypes.string,
    Target: PropTypes.string,
    BodyTextFontSize: PropTypes.number,
    BodyTextColor: PropTypes.string,
    HeaderTextFontSize: PropTypes.number,
    HeaderTextColor: PropTypes.string,
    HoverBodyTextFontSize: PropTypes.number,
    HoverBodyTextColor: PropTypes.string,
    HoverHeaderTextFontSize: PropTypes.number,
    HoverHeaderTextColor: PropTypes.string,
    HoverBodyTextFontSize: PropTypes.number,
    HoverBodyTextColor: PropTypes.string
  };
  static defaultProps = {
    ReadMoreText: 'Read more',
    ReadMoreColor: 'blue',
    BodyColor: 'white',   
    ImageOpacity: 0.5,
    Height: 300,
    Link: "https://github.com/onipetheoderic",
    Width: "22%",
    ImageHeight: 200,
    HoverColor: '#008CBA',
    BodyText: "welcome to theoderic packages",
    Target: "_blank",
    BodyTextColor: "#1b2631",
    BodyTextFontSize: 12,
    HeaderTextFontSize: 20,
    HeaderTextColor: "#1b2631",
    HoverBodyTextFontSize: 12,
    HoverBodyTextColor: "#1b2631",
    HoverHeaderTextFontSize: 20,
    HoverHeaderTextColor: 'white',
    HoverBodyTextFontSize: 12,
    HoverBodyTextColor: 'white'
  }
  
  text_truncate = (str, length, ending) => {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };

  calculateName = () => {
    return this.text_truncate(this.props.BodyText, 100, "....");
  }

  render() {
    const myName = this.calculateName();
   
    return (
<div className={styles.container} style={{height: this.props.Height, width: this.props.Width}}>
<a href={this.props.Link} target={this.props.Target} style={{textDecoration: 'none'}}>
  <img src={this.props.ImageLink} alt={this.props.alternateText} className={styles.image} height={this.props.ImageHeight} width="100%"/>

  <div style={{color: this.props.HeaderTextColor, fontSize: this.props.HeaderTextFontSize}} className={styles.header}>{this.props.HeaderText}</div>
  <div className={styles.bodytext} style={{color: this.props.BodyTextColor, fontSize: this.props.BodyTextFontSize}}>{myName}</div>
  <div className={styles.overlay} style={{backgroundColor: this.props.HoverColor}} > 
    <div className={styles.text} style={{color: this.props.HoverHeaderTextColor, fontSize: this.props.HoverHeaderTextFontSize}}>{this.props.HeaderText}</div>
    <br/>
    <div className={styles.text2} style={{color: this.props.HoverBodyTextColor, fontSize: this.props.HoverBodyTextFontSize}}>{this.props.BodyText}</div>
  </div>
  </a>
</div>
    )
  }
}
/*  color: white;
  font-size: 12px;*/
