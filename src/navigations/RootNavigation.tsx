import DrawerNavigation from './DrawerNavigation';

function RootNavigation() {
  const isLogin = true;
  return <>{isLogin ? <DrawerNavigation /> : <RootNavigation />}</>;
}

export default RootNavigation;
