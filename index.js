module.exports.mockComponent = (componentName, props) => {
  const defaultTab = '\n      ';
  const functionTerm = 'function(){ [native code] }'
  const passedProps = Object.keys(props);

  const generatedProps = passedProps
    .map(passedProperty => {
      const propValue = props[passedProperty];
      const value = typeof propValue === 'function' && !propValue.name
        ? functionTerm
        : propValue.name || propValue;
      const parsedValue = typeof value === 'string'
        ? `'${value}'`
        : JSON.stringify(value)

      return `${passedProperty}={${parsedValue === passedProperty ? passedProperty: parsedValue}}`;
    })
    .join(defaultTab);

  return `
  🚀
    ≺${componentName}
      ${generatedProps}
    ∕≻
  🚀
  `;
};
