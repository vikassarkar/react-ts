import {connect, createProvider} from 'react-redux'

const STORE_KEY = 'componentStore'

export const SecondProvider = createProvider(STORE_KEY)

function connectExtended(
  mapStateToProps?:any,
  mapDispatchToProps?:any,
  mergeProps?:any,
  options:any = {}
) {
  options.storeKey = STORE_KEY
  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options
  )
}
export {connectExtended as connect}