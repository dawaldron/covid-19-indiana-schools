// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../core/Error","../geometry/projection","../geometry/support/spatialReferenceUtils","../views/3d/terrain/TilingScheme"],function(c,b,n,e,f){function g(){return!0}function h(){return 0}function k(a,l){const m=a.lods.length-1,d=a.spatialReference,p=n.canProjectToWGS84ComparableLonLat(d)||e.isMars(d)||e.isMoon(d);if(d.isWebMercator){if(!f.makeWebMercatorAuxiliarySphere(m).compatibleWith(a))return new b("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else if(p){if(!f.makeGCSWithTileSize(a.spatialReference,
a.size[0],m).compatibleWith(a))return a.spatialReference.isWGS84?new b("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new b("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}else return new b("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(l&&!a.spatialReference.equals(l))return new b("tilingscheme:spatial-reference-mismatch",
"The tiling scheme does not match the spatial reference of the global scene")}var q=Object.freeze({__proto__:null,isInsideExtent:g,tiltToExtentEdge:h,checkIfTileInfoSupportedForViewSR:k});c.checkIfTileInfoSupportedForViewSR=k;c.isInsideExtent=g;c.terrainUtilsSpherical=q;c.tiltToExtentEdge=h});