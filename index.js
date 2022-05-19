module.exports.mockComponent = (componentName, props, emoji) => {
  const defaultTab = '\n      ';
  const functionTerm = 'function(){ [native code] }'
  const passedProps = Object.keys(props);

  const generatedProps = passedProps
    .map(passedProperty => {
      const propValue = props[passedProperty];
      const value = typeof propValue === 'function'
        ? functionTerm
        : propValue;
      const parsedValue = typeof value === 'string'
        ? `'${value}'`
        : JSON.stringify(value)

      return `${passedProperty}={${parsedValue}}`;
    })
    .join(defaultTab);

  const simpleComponent = `
    ≺${componentName}
      ${generatedProps}
    ∕≻`;

  const emojiComponent  = `
  ${emoji}
    ≺${componentName}
      ${generatedProps}
    ∕≻
  ${emoji}`

  return emoji ? emojiComponent : simpleComponent;
};
