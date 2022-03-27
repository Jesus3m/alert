import { FC } from 'react'
import { useAlert } from './Alert'
import { AlertProps } from './Alert/alert.types'


export const MyAlert: FC<AlertProps> = ({alert, close}) => {
  return (
    <div id={alert.id} onClick={() => close()} style={{width: '90%', height: '100px', background: 'white', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', borderRadius: '10px'}}>{alert.message}</div>
  )
}

function App() {
  const { show } = useAlert({
    global: true,
    template: MyAlert
  })

  return (
    <div className="App">
      Show Alert
      <button onClick={()=> {
        show({
          type: 'success',
          title: "alert",
          message: "Esta es una alerta de ejemplo con todas las configuraciones",
          duration: 7000,
          hide: true,
          actions: {
            accept:{
              text: "Aceptar",
              action: (close: any) => console.log("accept")
            },
            cancel: {
              text: "cancelar",
              action: (close: any) => {
                close()
              }
            }
          }
        })
        }}>Alerta 1</button>


      <button onClick={()=> {
        show({
          title: "alert 2",
          hide: false,
          message: "Alerta sin configuraciones, solo con mensaje y titulo"
        })
        }}>Alerta 2</button>
        <button onClick={()=> {
              show({
                type: 'warning',
                title: "alert 3",
                message: "Alerta 3"
              })
        }}>Alerta 3</button>


        <div style={{position: 'fixed', right: '30px', bottom: '20px'}}>
          <button onClick={()=> console.log("Click")}>Click</button>
        </div>
    </div>
  )
}

export default App
