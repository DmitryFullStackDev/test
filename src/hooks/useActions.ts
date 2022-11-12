import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCommon } from '../store/common/slices'

const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators({ setCommon }, dispatch)
}

export default useActions
