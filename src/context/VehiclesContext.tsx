import { createContext, useContext, useMemo } from 'react'

interface IContextProps {
  something: string
}

interface IMyCustomProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const VehiclesProvider: React.FC<IMyCustomProviderProps> = ({
  children,
}) => {
  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          something: '',
        }),
        [],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useVehicles = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useuseVehicles must be within MyCustomProvider')
  }

  return context
}
