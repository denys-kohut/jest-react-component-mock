module.exports.mockComponent = (componentName, props) => {
  const defaultTab = '\n      ';
  const passedProps = Object.keys(props);
  const generatedProps = passedProps
    .map(passedProperty => {
      const propValue = props[passedProperty];
      const value = typeof propValue === 'function'
        ? 'function(){ [native code] }'
        : propValue;

      return `${passedProperty}={${value}}`;
    })
    .join(defaultTab);

  return `🚀
    ≺${componentName}
      ${generatedProps}
    ∕≻
  🚀`;
};
