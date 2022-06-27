"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_components_AppLoading_jsx"],{

/***/ "./node_modules/@mui/material/AppBar/AppBar.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/material/AppBar/AppBar.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _appBarClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appBarClasses */ "./node_modules/@mui/material/AppBar/appBarClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "color", "enableColorOnDark", "position"];











const useUtilityClasses = ownerState => {
  const {
    color,
    position,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color)}`, `position${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(position)}`]
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _appBarClasses__WEBPACK_IMPORTED_MODULE_7__.getAppBarUtilityClass, classes);
};

const AppBarRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])(_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
  name: 'MuiAppBar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.position)}`], styles[`color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const backgroundColorDefault = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, ownerState.position === 'fixed' && {
    position: 'fixed',
    zIndex: theme.zIndex.appBar,
    top: 0,
    left: 'auto',
    right: 0,
    '@media print': {
      // Prevent the app bar to be visible on each printed page.
      position: 'absolute'
    }
  }, ownerState.position === 'absolute' && {
    position: 'absolute',
    zIndex: theme.zIndex.appBar,
    top: 0,
    left: 'auto',
    right: 0
  }, ownerState.position === 'sticky' && {
    // ⚠️ sticky is not supported by IE11.
    position: 'sticky',
    zIndex: theme.zIndex.appBar,
    top: 0,
    left: 'auto',
    right: 0
  }, ownerState.position === 'static' && {
    position: 'static'
  }, ownerState.position === 'relative' && {
    position: 'relative'
  }, ownerState.color === 'default' && {
    backgroundColor: backgroundColorDefault,
    color: theme.palette.getContrastText(backgroundColorDefault)
  }, ownerState.color && ownerState.color !== 'default' && ownerState.color !== 'inherit' && ownerState.color !== 'transparent' && {
    backgroundColor: theme.palette[ownerState.color].main,
    color: theme.palette[ownerState.color].contrastText
  }, ownerState.color === 'inherit' && {
    color: 'inherit'
  }, theme.palette.mode === 'dark' && !ownerState.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, ownerState.color === 'transparent' && (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    backgroundColor: 'transparent',
    color: 'inherit'
  }, theme.palette.mode === 'dark' && {
    backgroundImage: 'none'
  }));
});
const AppBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function AppBar(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_10__["default"])({
    props: inProps,
    name: 'MuiAppBar'
  });

  const {
    className,
    color = 'primary',
    enableColorOnDark = false,
    position = 'fixed'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    color,
    position,
    enableColorOnDark
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AppBarRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    square: true,
    component: "header",
    ownerState: ownerState,
    elevation: 4,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className, position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});
 true ? AppBar.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)]),

  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppBar);

/***/ }),

/***/ "./node_modules/@mui/material/AppBar/appBarClasses.js":
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/AppBar/appBarClasses.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getAppBarUtilityClass": () => (/* binding */ getAppBarUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");

function getAppBarUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiAppBar', slot);
}
const appBarClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiAppBar', ['root', 'positionFixed', 'positionAbsolute', 'positionSticky', 'positionStatic', 'positionRelative', 'colorDefault', 'colorPrimary', 'colorSecondary', 'colorInherit', 'colorTransparent']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appBarClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Grid/Grid.js":
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Grid/Grid.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "generateColumnGap": () => (/* binding */ generateColumnGap),
/* harmony export */   "generateDirection": () => (/* binding */ generateDirection),
/* harmony export */   "generateGrid": () => (/* binding */ generateGrid),
/* harmony export */   "generateRowGap": () => (/* binding */ generateRowGap),
/* harmony export */   "resolveSpacingClasses": () => (/* binding */ resolveSpacingClasses)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/breakpoints.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/requirePropFactory */ "./node_modules/@mui/material/utils/requirePropFactory.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _GridContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GridContext */ "./node_modules/@mui/material/Grid/GridContext.js");
/* harmony import */ var _gridClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridClasses */ "./node_modules/@mui/material/Grid/gridClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "lg", "md", "rowSpacing", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"];
// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/












function getOffset(val) {
  const parse = parseFloat(val);
  return `${parse}${String(val).replace(String(parse), '') || 'px'}`;
}

function generateGrid({
  theme,
  ownerState
}) {
  let size;
  return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    // Use side effect over immutability for better performance.
    let styles = {};

    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }

    if (!size) {
      return globalStyles;
    }

    if (size === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    } else if (size === 'auto') {
      styles = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    } else {
      const columnsBreakpointValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.resolveBreakpointValues)({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      });
      const columnValue = typeof columnsBreakpointValues === 'object' ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;

      if (columnValue === undefined || columnValue === null) {
        return globalStyles;
      } // Keep 7 significant numbers.


      const width = `${Math.round(size / columnValue * 10e7) / 10e5}%`;
      let more = {};

      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme.spacing(ownerState.columnSpacing);

        if (themeSpacing !== '0px') {
          const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      } // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41


      styles = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    } // No need for a media query for the first size.


    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }

    return globalStyles;
  }, {});
}
function generateDirection({
  theme,
  ownerState
}) {
  const directionValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.resolveBreakpointValues)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.handleBreakpoints)({
    theme
  }, directionValues, propValue => {
    const output = {
      flexDirection: propValue
    };

    if (propValue.indexOf('column') === 0) {
      output[`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_6__["default"].item}`] = {
        maxWidth: 'none'
      };
    }

    return output;
  });
}
function generateRowGap({
  theme,
  ownerState
}) {
  const {
    container,
    rowSpacing
  } = ownerState;
  let styles = {};

  if (container && rowSpacing !== 0) {
    const rowSpacingValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.resolveBreakpointValues)({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    });
    styles = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.handleBreakpoints)({
      theme
    }, rowSpacingValues, propValue => {
      const themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== '0px') {
        return {
          marginTop: `-${getOffset(themeSpacing)}`,
          [`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_6__["default"].item}`]: {
            paddingTop: getOffset(themeSpacing)
          }
        };
      }

      return {};
    });
  }

  return styles;
}
function generateColumnGap({
  theme,
  ownerState
}) {
  const {
    container,
    columnSpacing
  } = ownerState;
  let styles = {};

  if (container && columnSpacing !== 0) {
    const columnSpacingValues = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.resolveBreakpointValues)({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    });
    styles = (0,_mui_system__WEBPACK_IMPORTED_MODULE_5__.handleBreakpoints)({
      theme
    }, columnSpacingValues, propValue => {
      const themeSpacing = theme.spacing(propValue);

      if (themeSpacing !== '0px') {
        return {
          width: `calc(100% + ${getOffset(themeSpacing)})`,
          marginLeft: `-${getOffset(themeSpacing)}`,
          [`& > .${_gridClasses__WEBPACK_IMPORTED_MODULE_6__["default"].item}`]: {
            paddingLeft: getOffset(themeSpacing)
          }
        };
      }

      return {};
    });
  }

  return styles;
}
function resolveSpacingClasses(spacing, container, styles = {}) {
  // in case of grid item or undefined/null or `spacing` <= 0
  if (!container || !spacing || spacing <= 0) {
    return [];
  } // in case of string/number `spacing`


  if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
    return [styles[`spacing-xs-${String(spacing)}`] || `spacing-xs-${String(spacing)}`];
  } // in case of object `spacing`


  const {
    xs,
    sm,
    md,
    lg,
    xl
  } = spacing;
  return [Number(xs) > 0 && (styles[`spacing-xs-${String(xs)}`] || `spacing-xs-${String(xs)}`), Number(sm) > 0 && (styles[`spacing-sm-${String(sm)}`] || `spacing-sm-${String(sm)}`), Number(md) > 0 && (styles[`spacing-md-${String(md)}`] || `spacing-md-${String(md)}`), Number(lg) > 0 && (styles[`spacing-lg-${String(lg)}`] || `spacing-lg-${String(lg)}`), Number(xl) > 0 && (styles[`spacing-xl-${String(xl)}`] || `spacing-xl-${String(xl)}`)];
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',

const GridRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      container,
      direction,
      item,
      lg,
      md,
      sm,
      spacing,
      wrap,
      xl,
      xs,
      zeroMinWidth
    } = props.ownerState;
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...resolveSpacingClasses(spacing, container, styles), direction !== 'row' && styles[`direction-xs-${String(direction)}`], wrap !== 'wrap' && styles[`wrap-xs-${String(wrap)}`], xs !== false && styles[`grid-xs-${String(xs)}`], sm !== false && styles[`grid-sm-${String(sm)}`], md !== false && styles[`grid-md-${String(md)}`], lg !== false && styles[`grid-lg-${String(lg)}`], xl !== false && styles[`grid-xl-${String(xl)}`]];
  }
})(({
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  boxSizing: 'border-box'
}, ownerState.container && {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
}, ownerState.item && {
  margin: 0 // For instance, it's useful when used with a `figure` element.

}, ownerState.zeroMinWidth && {
  minWidth: 0
}, ownerState.wrap !== 'wrap' && {
  flexWrap: ownerState.wrap
}), generateDirection, generateRowGap, generateColumnGap, generateGrid);

const useUtilityClasses = ownerState => {
  const {
    classes,
    container,
    direction,
    item,
    lg,
    md,
    sm,
    spacing,
    wrap,
    xl,
    xs,
    zeroMinWidth
  } = ownerState;
  const slots = {
    root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth', ...resolveSpacingClasses(spacing, container), direction !== 'row' && `direction-xs-${String(direction)}`, wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, xs !== false && `grid-xs-${String(xs)}`, sm !== false && `grid-sm-${String(sm)}`, md !== false && `grid-md-${String(md)}`, lg !== false && `grid-lg-${String(lg)}`, xl !== false && `grid-xl-${String(xl)}`]
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_8__["default"])(slots, _gridClasses__WEBPACK_IMPORTED_MODULE_6__.getGridUtilityClass, classes);
};

const Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Grid(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiGrid'
  });
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"])(themeProps);

  const {
    className,
    columns: columnsProp,
    columnSpacing: columnSpacingProp,
    component = 'div',
    container = false,
    direction = 'row',
    item = false,
    lg = false,
    md = false,
    rowSpacing: rowSpacingProp,
    sm = false,
    spacing = 0,
    wrap = 'wrap',
    xl = false,
    xs = false,
    zeroMinWidth = false
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columnsContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_GridContext__WEBPACK_IMPORTED_MODULE_11__["default"]); // columns set with default breakpoint unit of 12

  const columns = container ? columnsProp || 12 : columnsContext;

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    columns,
    container,
    direction,
    item,
    lg,
    md,
    sm,
    rowSpacing,
    columnSpacing,
    wrap,
    xl,
    xs,
    zeroMinWidth
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GridContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
    value: columns,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GridRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      ownerState: ownerState,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
      as: component,
      ref: ref
    }, other))
  });
});
 true ? Grid.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string),

  /**
   * The number of columns.
   * @default 12
   */
  columns: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_12___default().number)), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)]),

  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().elementType),

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row']), prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)]),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string)]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)]),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['nowrap', 'wrap-reverse', 'wrap']),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOf(['auto']), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool)
} : 0;

if (true) {
  const requireProp = (0,_utils_requirePropFactory__WEBPACK_IMPORTED_MODULE_13__["default"])('Grid', Grid); // eslint-disable-next-line no-useless-concat

  Grid['propTypes' + ''] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Grid.propTypes, {
    direction: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('item')
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grid);

/***/ }),

/***/ "./node_modules/@mui/material/Grid/GridContext.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Grid/GridContext.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

const GridContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();

if (true) {
  GridContext.displayName = 'GridContext';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridContext);

/***/ }),

/***/ "./node_modules/@mui/material/Grid/gridClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/Grid/gridClasses.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getGridUtilityClass": () => (/* binding */ getGridUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");

function getGridUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiGrid', slot);
}
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth', // spacings
...SPACINGS.map(spacing => `spacing-xs-${spacing}`), // direction values
...DIRECTIONS.map(direction => `direction-xs-${direction}`), // wrap values
...WRAPS.map(wrap => `wrap-xs-${wrap}`), // grid sizes for all breakpoints
...GRID_SIZES.map(size => `grid-xs-${size}`), ...GRID_SIZES.map(size => `grid-sm-${size}`), ...GRID_SIZES.map(size => `grid-md-${size}`), ...GRID_SIZES.map(size => `grid-lg-${size}`), ...GRID_SIZES.map(size => `grid-xl-${size}`)]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gridClasses);

/***/ }),

/***/ "./node_modules/@mui/material/Paper/Paper.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/material/Paper/Paper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/chainPropTypes.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/integerPropType.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/composeClasses/composeClasses.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _paperClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paperClasses */ "./node_modules/@mui/material/Paper/paperClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["className", "component", "elevation", "square", "variant"];









 // Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61



const getOverlayAlpha = elevation => {
  let alphaValue;

  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }

  return (alphaValue / 100).toFixed(2);
};

const useUtilityClasses = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__["default"])(slots, _paperClasses__WEBPACK_IMPORTED_MODULE_6__.getPaperUtilityClass, classes);
};

const PaperRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__["default"])('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('box-shadow')
}, !ownerState.square && {
  borderRadius: theme.shape.borderRadius
}, ownerState.variant === 'outlined' && {
  border: `1px solid ${theme.palette.divider}`
}, ownerState.variant === 'elevation' && (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  boxShadow: theme.shadows[ownerState.elevation]
}, theme.palette.mode === 'dark' && {
  backgroundImage: `linear-gradient(${(0,_mui_system__WEBPACK_IMPORTED_MODULE_8__.alpha)('#fff', getOverlayAlpha(ownerState.elevation))}, ${(0,_mui_system__WEBPACK_IMPORTED_MODULE_8__.alpha)('#fff', getOverlayAlpha(ownerState.elevation))})`
})));
const Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Paper(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiPaper'
  });

  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    component,
    elevation,
    square,
    variant
  });

  const classes = useUtilityClasses(ownerState);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_10__["default"])();

    if (theme.shadows[elevation] === undefined) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join('\n'));
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(PaperRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: component,
    ownerState: ownerState,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    ref: ref
  }, other));
});
 true ? Paper.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: (0,_mui_utils__WEBPACK_IMPORTED_MODULE_12__["default"])(_mui_utils__WEBPACK_IMPORTED_MODULE_13__["default"], props => {
    const {
      elevation,
      variant
    } = props;

    if (elevation > 0 && variant === 'outlined') {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)]),

  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['elevation', 'outlined']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paper);

/***/ }),

/***/ "./node_modules/@mui/material/Paper/paperClasses.js":
/*!**********************************************************!*\
  !*** ./node_modules/@mui/material/Paper/paperClasses.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getPaperUtilityClass": () => (/* binding */ getPaperUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js");

function getPaperUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiPaper', slot);
}
const paperClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paperClasses);

/***/ }),

/***/ "./node_modules/@mui/material/styles/useTheme.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/material/styles/useTheme.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/useTheme.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@mui/material/styles/defaultTheme.js");



function useTheme() {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__["default"])(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@mui/material/utils/capitalize.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/material/utils/capitalize.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/capitalize.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/@mui/material/utils/requirePropFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mui/material/utils/requirePropFactory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/requirePropFactory.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extendSxProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils */ "./node_modules/@mui/utils/esm/deepmerge.js");
/* harmony import */ var _getThemeValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getThemeValue */ "./node_modules/@mui/system/esm/getThemeValue.js");


const _excluded = ["sx"];



const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (_getThemeValue__WEBPACK_IMPORTED_MODULE_2__.propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;

  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);

      if (!(0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(result)) {
        return systemProps;
      }

      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, systemProps, result);
    };
  } else {
    finalSx = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, systemProps, inSx);
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    sx: finalSx
  });
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/chainPropTypes.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/utils/esm/chainPropTypes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chainPropTypes)
/* harmony export */ });
function chainPropTypes(propType1, propType2) {
  if (false) {}

  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

/***/ }),

/***/ "./node_modules/@mui/utils/esm/integerPropType.js":
/*!********************************************************!*\
  !*** ./node_modules/@mui/utils/esm/integerPropType.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getTypeByValue": () => (/* binding */ getTypeByValue)
/* harmony export */ });
function getTypeByValue(value) {
  const valueType = typeof value;

  switch (valueType) {
    case 'number':
      if (Number.isNaN(value)) {
        return 'NaN';
      }

      if (!Number.isFinite(value)) {
        return 'Infinity';
      }

      if (value !== Math.floor(value)) {
        return 'float';
      }

      return 'number';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return value.constructor.name;

    default:
      return valueType;
  }
} // IE 11 support

function ponyfillIsInteger(x) {
  // eslint-disable-next-line no-restricted-globals
  return typeof x === 'number' && isFinite(x) && Math.floor(x) === x;
}

const isInteger = Number.isInteger || ponyfillIsInteger;

function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];

  if (propValue == null || !isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }

  return null;
}

function validator(props, propName, ...other) {
  const propValue = props[propName];

  if (propValue === undefined) {
    return null;
  }

  return requiredInteger(props, propName, ...other);
}

function validatorNoop() {
  return null;
}

validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ( false ? 0 : validator);

/***/ }),

/***/ "./node_modules/@mui/utils/esm/requirePropFactory.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/utils/esm/requirePropFactory.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requirePropFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

function requirePropFactory(componentNameInError, Component) {
  if (false) {} // eslint-disable-next-line react/forbid-foreign-prop-types


  const prevPropTypes = Component ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Component.propTypes) : null;

  const requireProp = requiredProp => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes == null ? void 0 : prevPropTypes[propFullNameSafe];

    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);

      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }

    if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }

    return null;
  };

  return requireProp;
}

/***/ }),

/***/ "./resources/assets/js/components/AppLoading.jsx":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/AppLoading.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppLoading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






function rand() {
  return Math.floor(Math.random() * 40) + 10;
}

function AppLoading() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: "fixed"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      xs: 2,
      children: _toConsumableArray(Array(10).keys()).map(function (key) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: rand()
        }, key);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      xs: 10,
      children: _toConsumableArray(Array(10).keys()).map(function (key) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
          height: rand()
        }, key);
      })
    })]
  });
}

/***/ })

}]);