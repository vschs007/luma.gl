function getDocUrl(filename) {
  return `docs/${filename}`;
}

function generatePath(tree) {
  if (Array.isArray(tree)) {
    tree.forEach(branch => generatePath(branch));
  }
  if (tree.children) {
    generatePath(tree.children);
  }
  if (tree.name) {
    tree.path = tree.name.match(/(([A-Z]|^)[a-z]+|\d+)/g).join('-').toLowerCase();
  }
  return tree;
}

export const examplePages = generatePath([
  {
    name: 'Overview',
    content: 'code-markdown/examples.md'
  },
  {
    name: 'Cubemap',
    content: {
      demo: 'CubemapDemo',
      code: 'code-markdown/scatterplot.md'
    }
  },
  {
    name: 'Instancing',
    content: {
      demo: 'InstancingDemo',
      code: 'code-markdown/scatterplot.md'
    }
  }
]);

export const docPages = generatePath([
  {
    name: 'Overview',
    children: [
      {
        name: 'Introduction',
        content: getDocUrl('README.md')
      },
      {
        name: 'What\'s New',
        content: getDocUrl('whats-new.md')
      },
      {
        name: 'Getting Started',
        content: getDocUrl('getting-started.md')
      },
      {
        name: 'Using With React',
        content: getDocUrl('using-with-react.md')
      },
      {
        name: 'Using With Mapbox GL',
        content: getDocUrl('using-with-mapbox-gl.md')
      },
      {
        name: 'Upgrade Guide',
        content: getDocUrl('upgrade-guide.md')
      }
    ]
  },
  {
    name: 'About Layers',
    children: [
      {
        name: 'Overview',
        content: getDocUrl('layers/README.md')
      },
      {
        name: 'Using Layers',
        content: getDocUrl('using-layers.md')
      },
      {
        name: '64 bit Layers',
        content: getDocUrl('64-bits.md')
      },
      {
        name: 'Coordinate Systems',
        content: getDocUrl('coordinate-systems.md')
      },
      {
        name: 'Viewports',
        content: getDocUrl('viewports.md')
      }
    ]
  },
  {
    name: 'Core Layers',
    children: [
      {
        name: 'Layer Base Class',
        content: getDocUrl('layers/base-layer.md')
      },
      {
        name: 'ScatterplotLayer',
        content: getDocUrl('layers/scatterplot-layer.md'),
        embedded: 'ScatterplotLayerDemo'
      },
      {
        name: 'ArcLayer',
        content: getDocUrl('layers/arc-layer.md'),
        embedded: 'ArcLayerDemo'
      },
      {
        name: 'LineLayer',
        content: getDocUrl('layers/line-layer.md'),
        embedded: 'LineLayerDemo'
      },
      {
        name: 'GeoJSONLayer',
        content: getDocUrl('layers/geojson-layer.md'),
        embedded: 'GeoJsonLayerDemo'
      },
      {
        name: 'PathLayer',
        content: getDocUrl('layers/path-layer.md'),
        embedded: 'PathLayerDemo'
      },
      {
        name: 'PolygonLayer',
        content: getDocUrl('layers/polygon-layer.md'),
        embedded: 'PolygonLayerDemo'
      },
      {
        name: 'IconLayer',
        content: getDocUrl('layers/icon-layer.md'),
        embedded: 'IconLayerDemo'
      },
      {
        name: 'PointCloudLayer',
        content: getDocUrl('layers/point-cloud-layer.md'),
        embedded: 'PointCloudLayerDemo'
      },
      {
        name: 'GridLayer',
        content: getDocUrl('layers/grid-layer.md'),
        embedded: 'GridLayerDemo'
      },
      {
        name: 'ScreenGridLayer',
        content: getDocUrl('layers/screen-grid-layer.md'),
        embedded: 'ScreenGridLayerDemo'
      },
      {
        name: 'GridCellLayer',
        content: getDocUrl('layers/grid-cell-layer.md')
      },
      {
        name: 'HexagonLayer',
        content: getDocUrl('layers/hexagon-layer.md'),
        embedded: 'HexagonLayerDemo'
      },
      {
        name: 'HexagonCellLayer',
        content: getDocUrl('layers/hexagon-cell-layer.md')
      }
    ]
  },
  {
    name: 'Deprecated Layers',
    children: [
      {
        name: 'ChoroplethLayer',
        content: getDocUrl('layers/deprecated/choropleth-layer.md')
      },
      {
        name: 'ChoroplethLayer64',
        content: getDocUrl('layers/deprecated/choropleth-layer-64.md')
      },
      {
        name: 'ExtrudedChoroplethLayer64',
        content: getDocUrl('layers/deprecated/extruded-choropleth-layer.md')
      }
    ]
  },
  {
    name: 'Custom Layers',
    children: [
      {
        name: 'Customizing Layers',
        content: getDocUrl('composite-layers.md')
      },
      {
        name: 'Subclassing Layers',
        content: getDocUrl('subclassing-layers.md')
      },
      {
        name: 'Writing New Layers',
        content: getDocUrl('custom-layers.md')
      },
      {
        name: 'Layer Lifecycle',
        content: getDocUrl('layer-lifecycle.md')
      },
      {
        name: 'Attribute Management',
        content: getDocUrl('attribute-management.md')
      },
      {
        name: 'Writing Shaders',
        content: getDocUrl('writing-shaders.md')
      }
    ]
  },
  {
    name: 'Advanced Topics',
    children: [
      {
        name: 'Performance',
        content: getDocUrl('performance.md')
      },
      {
        name: 'Using Standalone',
        content: getDocUrl('using-standalone.md')
      },
      {
        name: 'Tips and Tricks',
        content: getDocUrl('tips-and-tricks.md')
      }
    ]
  },
  {
    name: 'API Reference',
    children: [
      {
        name: 'AttributeManager',
        content: getDocUrl('api-reference/attribute-manager.md')
      },
      {
        name: 'Viewport',
        content: getDocUrl('api-reference/viewport.md')
      },
      {
        name: 'PerspectiveViewport',
        content: getDocUrl('api-reference/perspective-viewport.md')
      },
      {
        name: 'OrthographicViewport',
        content: getDocUrl('api-reference/orthographic-viewport.md')
      },
      {
        name: 'WebMercatorViewport',
        content: getDocUrl('api-reference/web-mercator-viewport.md')
      }
    ]
  }]);
