import { useContext } from 'react';
import NavigationConext from '../context/navigation';

function useNavigation() {
  return useContext(NavigationConext);
}

export default useNavigation;
