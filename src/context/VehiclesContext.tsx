import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Api from 'services/api'

import { VehiclesType } from 'types/VehiclesType'

interface IContextProps {
  something: string
}

interface IVehiclesProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const VehiclesProvider: React.FC<IVehiclesProviderProps> = ({
  children,
}) => {
  const [vehicles, setVehicles] = useState<VehiclesType[]>([])
  const [isLoading, setIsloading] = useState(false)

  const fetchVehicles = useCallback(async () => {
    setIsloading(true)

    try {
      const {
        data: { results },
      } = await Api.get(`/vehicles`)
      setVehicles(results)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsloading(false)
    }
  }, [])

  useEffect(() => {
    fetchVehicles()
  }, [fetchVehicles])

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
