Mock your React Components for the amazing snapshot testing. This package allows you to avoid lots of braking tests of parent components if one child was changed internally.

## Mock React components in your Snapshots

### How to use?

`anyJest.test.js`:
```jsx
/**
 * Function mock component and make string representation
 * @param    {String}   componentName    Name of the Component
 * @param    {Any}      props            properties, which component receives
 * @param    {Boolean}  emoji?           flag to use rocket or not
 * @return   {String}                    string representation of component
 */
function mockComponent (componentName, props, emoji) { [ 'native code' ] }

// using standard jest mocking mechanism
jest.mock('../../../pathToYourComponentWhichShouldBeMocked', () => ({
  Component: (props) => mockComponent('Component', props, true),
}));
```



### Example:

`tests/DemoComponent.test.js`:
``` jsx
import { create } from 'react-test-renderer';
import { mockComponent } from 'jest-react-component-mock';

import { oneMock, secondMock, thirdMock } from '../mocks';
import { DemoComponent } from '../DemoComponent';

jest.mock('../../../components/MyCoolItem', () => ({
  MyCoolItem: (props) => mockComponent('MyCoolItem', props, true),
}));

describe('DemoComponent', () => {
  it('should create simple "DemoComponent"', () => {
    const component = create(
      <DemoComponent
        prop1={oneMock}
        prop2={secondMock}
        prop3={thirdMock}
     />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
```

`tests/__snapshots__/DemoComponent.test.js.snap`
```
exports[`should create simple "DemoComponent" component`] = `
<div
  className="DemoClass"
>
  <div
    className="title"
  >
    Your Title:
  </div>
  <div
    className="lol"
  >
    <div
      className="content"
    >
      
  🚀
    ≺MyCoolItem
      config={{"id": "113wsdfsdf"}}
      handker={'myHandler'}
    />
  🚀
    </div>
  </div>
</div>
`;
```
