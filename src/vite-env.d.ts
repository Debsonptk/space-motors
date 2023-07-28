/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string
  readonly VITE_I18N_DEBBUG?: 'true' | 'false'
  readonly PACKAGE_VERSION: string
  readonly VITE_API_URL: string
  // add more env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
