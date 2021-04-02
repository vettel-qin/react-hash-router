// Link组件只需要触发hash路由的切换
// Link组件实现hash路由的切换，故只需要通过a标签切换hash值
export default function Link({to, children}) {
  return (
    <a href={`#${to}`}>
      {children}
    </a>
  )
}