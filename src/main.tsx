import register from 'preact-custom-element';
import WidgetComponent from "./widget-component.tsx";

//render(<App />, document.getElementById('app') as HTMLElement)

//@ts-ignore
window.init = () => {
  register(WidgetComponent, 'widget-component');
};

