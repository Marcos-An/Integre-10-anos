import React, { Component } from 'react'
export default class ResponsivePlayer extends Component {
  render() {
    return (
      <>
        <div style={{ padding: "100.0% 29vh 0 ", position: "relative" }}>
          <div style={{ height: '100%', left: '0', position: 'absolute', top: '0', width: '100%' }}>
            <iframe
              src="https://fast.wistia.net/embed/iframe/qsj2i8nsau?seo=false&videoFoam=true"
              title="Celebrar na web Marcela Sperotto.mp4 Video"
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
      </>
    )
  }
}