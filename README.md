<h1 align="center">react-bkoi-gl | <a href="https://visgl.github.io/react-bkoi-gl">Docs</a></h1>

## Description

`react-bkoi-gl` is a suite of [React](http://facebook.github.io/react/) components designed to provide a API for [Barikoi Maps](https://docs.barikoi.com/docs/maps-api). More information in the online documentation.

## Installation

Using `react-bkoi-gl` requires `react >= 16.3`.

To install the package via npm, run the following command:
```bash
npm install react-bkoi-gl mapbox-gl
```
Or via yarn:
```bash
yarn add react-bkoi-gl mapbox-gl
```

### Example

```js
// Import Components
import { useRef } from 'react';
import { Map } from 'react-bkoi-gl';

// Import Styles
import "mapbox-gl/dist/mapbox-gl.css"

const App = () => {
  const BARIKOI_API_KEY = 'YOUR_API_KEY';
  const mapRef = useRef(null);
  const mapStyles = {
    title: 'OSM Liberty',
    uri: `https://map.barikoi.com/styles/osm-liberty/style.json?key=${BARIKOI_API_KEY}`,
  }
  const initialViewState = {
    longitude: 90.36402,
    latitude: 23.823731,
    minZoom: 4,
    maxZoom: 30,
    zoom: 13,
    bearing: 0,
    pitch: 0,
    antialias: true
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <Map
        ref={mapRef}
        mapStyle={mapStyles.uri}
        style={{ width: "100%", height: "100%" }}
        initialViewState={initialViewState}
        doubleClickZoom={false}
        dragRotate={false}
        attributionControl={false}
      />
    </div>
  )
}

export default App
```

## Get Barikoi API key

To access Barikoi's API services, you need to:
1. Register on [Barikoi Developer Dashboard](https://developer.barikoi.com/register).
2. Verify with your phone number.
3. Claim your API key.

Once registered, you'll be able to access the full suite of Barikoi API services. If you exceed the free usage limits, you'll need to subscribe to a paid plan.

## Learning Resources
* [Barikoi API Documentation](https://docs.barikoi.com/docs/maps-api)

## License
This library is licensed under the MIT License. See the [LICENSE](https://www.npmjs.com/package/LICENSE) file for details.

## Support
For any issues or questions, please contact [support@barikoi.com](mailto:support@barikoi.com).

<img src="https://docs.barikoi.com/img/barikoi-logo-black.svg" height="30" />
