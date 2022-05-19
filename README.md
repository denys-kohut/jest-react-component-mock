Mock your React Components for the amazing snapshot testing. This package allows you to avoid lots of braking tests of parent components if one child was changed internally.

## Mock React components in your Snapshots

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
    ∕≻
  🚀
    </div>
  </div>
</div>
`;
```
