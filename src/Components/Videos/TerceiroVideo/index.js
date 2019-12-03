import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

export default class ResponsivePlayer extends Component {
  render() {
    return (
      <>
        <MediaQuery maxDeviceWidth={700}>
          <div style={{ padding: "45% 0 0 ", position: "relative" }}>
            <div style={{ height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/ecc49jdnhj?videoFoam=true"
                title="Agradecimento real Video"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                class="wistia_embed"
                name="wistia_embed"
                allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen
                width="100%"
                height="100%">
              </iframe>
            </div>
          </div>
          <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
        </MediaQuery>

        <MediaQuery minDeviceWidth={900}>
          <div class="wistia_responsive_padding" style={{ padding: '46.25% 0 0 0', position: 'relative' }}>
            <div class="wistia_responsive_wrapper" style={{ height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }}>
              <iframe
                src="https://fast.wistia.net/embed/iframe/ecc49jdnhj?videoFoam=true"
                title="Agradecimento real Video"
                allowtransparency="true"
                frameborder="0"
                scrolling="no"
                class="wistia_embed"
                name="wistia_embed"
                allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen
                width="100%"
                height="100%">
              </iframe>
            </div>
          </div>
          <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
        </MediaQuery>
      </>
    )
  }
}