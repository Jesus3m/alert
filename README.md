# React Alert
## Customizable react component

A react alert component, use to call notification or actions, like to a JS native alert or confirm, but with all benefits of the render of react

### features
- Allow custom templates
- Don't need Context Provider
- You will not call any alert component

## Installation

You require a react project.

Install the dependency.

```sh
yarn add "ingrese el nombre de la dependencia xD"
npm install "Nombre"
```

### With Typescript
If you work with typescript, install the types definitions
```sh
yarn add -D @types/"ingrese el nombre de la dependencia xD"
npm install -D @types/"Nombre"
```
### PeerDependencies
This package require the follow dependencies and versions
```json
 { "react": ">=16.0.0"}
```

## Usage

You only need import `useAlert` hook, from follow way:
```js
import { useAlert } from 'nombre-de-la-dependencia'
```

and invoke it
```js
 const { show } = useAlert()
```
That function  return an object with an only `show` function, this will be used to call alerts

show receives an object of options to configure the alert to display
```js
    show({
        massage: "Message to display on alert"
    })
```
show only needs a message property, but you can customize your alert by adding in more options

### Options
| Option      | Description | Type        |
| ----------- | ----------- | ----------- |
| type      | Type and style of alert       | `'success' | 'warning' | 'danger' | 'info'`       |
| title   | Heading to display in alert        | `string`        |
| message   | text to alert       | `string`        |
| hide   | auto hide alert  | `boolean` |
| duration   | timeout to hide alert after display it (`hide` require on `true)` | `number` |
| actions   | Object of actions to assert or decline alert, with two properties: `accept and cancel`  | `object` |

#### actions:
Each action contain an object to especify the button message and action on consequence
| Option      | Description | Type        |
| ----------- | ----------- | ----------- |
| text   | message to display       | `string`        |
| action   | function to exec when user assert or decline        | `string`        |

and each action function receives one param, a close function to hide the current called alert

## Custom template
right now, you was used the default alert template, thats is assign to the first time than you call the `useAlert` hook, but, if you want work with and custom template to the alert, you need create your own component and pass it to the first instance to the hook, follow way:
```js
    useAlert({
        template: MyCustomAlert,
        global: true
    })
```

`MyCustomAlert`is an react component without instance it (not brackets `<  />`)
that will assign for all next call's this template how component to render the alert

Each Custom template receives `AlertProps`:
| prop      | Description | Type        |
| ----------- | ----------- | ----------- |
| alert   | object with all option define on `show` call, and some property added in the hook     | `string`        |
| close   | function to close the current alert        | `function`        |

#### note:
The close function would receive and duration timeout to remove the alert of the DOM, this is for you can manage animation timings on the alert hide

### IMPORTANT

if you work with a custom template you should know that the alert property passed to your component has a unique id to identify it in the DOM, you should map this id to the main id of your alert container

```js
    const MyCustomAlert = ({alert, close}) => {

        return(
            <div id={alert.id}>
                ...
            </div>
        )

    }
```
And, finaly, you should manage the animations to your own component
## License
MIT


