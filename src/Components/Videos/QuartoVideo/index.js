import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

export default class ResponsivePlayer extends Component {
  render() {
    return (
      <>
        <MediaQuery maxDeviceWidth={800}>
          <div style={{ padding: "45.9% 28vh 0px", position: "relative" }}>
            <div style={{ height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/6ehd2gab41?seo=false&videoFoam=true"
                title="Montagem pioneirismo 1920x890 Video"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                class="wistia_embed"
                name="wistia_embed"
                allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen
                width="100%" height="100%">
              </iframe>
            </div>
          </div>
          <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
        </MediaQuery>
        <MediaQuery minDeviceWidth={900}>
          <div style={{ padding: "45.9% 53vh 0px", position: "relative" }}>
            <div style={{ height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/6ehd2gab41?seo=false&videoFoam=true"
                title="Montagem pioneirismo 1920x890 Video"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                class="wistia_embed"
                name="wistia_embed"
                allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen
                width="100%" height="100%">
              </iframe>
            </div>
          </div>
          <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
        </MediaQuery>
      </>
    )
  }
}