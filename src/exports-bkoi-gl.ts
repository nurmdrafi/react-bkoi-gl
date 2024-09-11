import * as React from 'react';
import {
  Map as BkoiMap,
  MapOptions,
  Marker as BkoiMarker,
  MarkerOptions,
  Popup as BkoiPopup,
  PopupOptions,
  AttributionControl as BkoiAttributionControl,
  FullscreenControl as BkoiFullscreenControl,
  GeolocateControl as BkoiGeolocateControl,
  NavigationControl as BkoiNavigationControl,
  ScaleControl as BkoiScaleControl
  // @ts-ignore
// eslint-disable-next-line import/no-unresolved
} from 'bkoi-gl';
import { MapStyle, AnyLayer, AnySource } from './types/style-spec-bkoi-gl';

import { default as _Map, MapProps as _MapProps } from './components/map';
import { default as _Marker, MarkerProps as _MarkerProps } from './components/marker';
import { default as _Popup, PopupProps as _PopupProps } from './components/popup';
import {
  default as _AttributionControl,
  AttributionControlProps as _AttributionControlProps
} from './components/attribution-control';
import {
  default as _FullscreenControl,
  FullscreenControlProps as _FullscreenControlProps
} from './components/fullscreen-control';
import {
  default as _GeolocateControl,
  GeolocateControlProps as _GeolocateControlProps
} from './components/geolocate-control';
import {
  default as _NavigationControl,
  NavigationControlProps as _NavigationControlProps
} from './components/navigation-control';
import {
  default as _ScaleControl,
  ScaleControlProps as _ScaleControlProps
} from './components/scale-control';
import { default as _Layer, LayerProps as _LayerProps } from './components/layer';
import { default as _Source, SourceProps as _SourceProps } from './components/source';
import { useMap as _useMap } from './components/use-map';
import type { MapRef as _MapRef } from './mapbox/create-ref';
import type * as events from './types/events';
import type { MapCallbacks } from './types/events-bkoi-gl';

export function useMap() {
  return _useMap<BkoiMap>();
}

export type MapProps = _MapProps<MapOptions, MapStyle, MapCallbacks, BkoiMap>;
export type MapRef = _MapRef<BkoiMap>;
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const mapLib = import('bkoi-gl');
export const Map = (() => {
  return React.forwardRef(function Map(props: MapProps, ref: React.Ref<MapRef>) {
    return _Map<MapOptions, MapStyle, MapCallbacks, BkoiMap>(props, ref, mapLib);
  });
})();

export type MarkerProps = _MarkerProps<MarkerOptions, BkoiMarker>;
export const Marker = _Marker as (
  props: MarkerProps & React.RefAttributes<BkoiMarker>
) => React.ReactElement | null;

export type PopupProps = _PopupProps<PopupOptions, BkoiPopup>;
export const Popup = _Popup as (
  props: PopupProps & React.RefAttributes<BkoiPopup>
) => React.ReactElement | null;

type AttributionControlOptions = ConstructorParameters<typeof BkoiAttributionControl>[0];
export type AttributionControlProps = _AttributionControlProps<AttributionControlOptions>;
export const AttributionControl = _AttributionControl as (
  props: AttributionControlProps
) => React.ReactElement | null;

type FullscreenControlOptions = ConstructorParameters<typeof BkoiFullscreenControl>[0];
export type FullscreenControlProps = _FullscreenControlProps<FullscreenControlOptions>;
export const FullscreenControl = _FullscreenControl as (
  props: FullscreenControlProps
) => React.ReactElement | null;

type NavigationControlOptions = ConstructorParameters<typeof BkoiNavigationControl>[0];
export type NavigationControlProps = _NavigationControlProps<NavigationControlOptions>;
export const NavigationControl = _NavigationControl as (
  props: NavigationControlProps
) => React.ReactElement | null;

type GeolocateControlOptions = ConstructorParameters<typeof BkoiGeolocateControl>[0];
export type GeolocateControlProps = _GeolocateControlProps<
  GeolocateControlOptions,
  BkoiGeolocateControl
>;
export const GeolocateControl = _GeolocateControl as (
  props: GeolocateControlProps & React.RefAttributes<BkoiGeolocateControl>
) => React.ReactElement | null;

type ScaleControlOptions = ConstructorParameters<typeof BkoiScaleControl>[0];
export type ScaleControlProps = _ScaleControlProps<ScaleControlOptions>;
export const ScaleControl = _ScaleControl as (
  props: ScaleControlProps
) => React.ReactElement | null;

export type LayerProps = _LayerProps<AnyLayer>;
export const Layer = _Layer as (props: LayerProps) => React.ReactElement | null;

export type SourceProps = _SourceProps<AnySource>;
export const Source = _Source as (props: SourceProps) => React.ReactElement | null;

export { default as useControl } from './components/use-control';
export { MapProvider } from './components/use-map';

export default Map;

// Types
export * from './types/public';
export type { default as Point } from '@mapbox/point-geometry';
// export type {
//   PointLike,
//   LngLat,
//   LngLatLike,
//   LngLatBounds,
//   LngLatBoundsLike,
//   PaddingOptions,
//   MapGeoJSONFeature,
//   GeoJSONSource,
//   VideoSource,
//   ImageSource,
//   CanvasSource,
//   VectorTileSource
// } from 'maplibre-gl';
export * from './types/style-spec-bkoi-gl';

// Events
export type {
  MapEvent,
  MapMouseEvent,
  MapLayerMouseEvent,
  MapTouchEvent,
  MapLayerTouchEvent,
  MapStyleDataEvent,
  MapSourceDataEvent,
  MapWheelEvent,
  MapBoxZoomEvent,
  ErrorEvent,
  ViewStateChangeEvent
} from './types/events-bkoi-gl';
export type PopupEvent = events.PopupEvent<BkoiPopup>;
export type MarkerEvent = events.MarkerEvent<BkoiMarker>;
export type MarkerDragEvent = events.MarkerDragEvent<BkoiMarker>;
export type GeolocateEvent = events.GeolocateEvent<BkoiGeolocateControl>;
export type GeolocateResultEvent = events.GeolocateResultEvent<BkoiGeolocateControl>;
export type GeolocateErrorEvent = events.GeolocateErrorEvent<BkoiGeolocateControl>;
