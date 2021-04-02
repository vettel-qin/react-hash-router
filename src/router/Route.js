// Route组件是根据当前的hash地址判断当前的Route承载的组件是否应该显示
import React, { useContext } from 'react';
import { RouterContext } from './Router';

export default function Route(props) {
  // 获得当前hash地址
  const context = useContext(RouterContext);

  console.log(props, 'rrr', context);

  return (
    // 当前的hash地址和组件配置的地址比较，相等就进入路由对应的组件，不相等则不显示组件
    context.path === props.path ? <props.component /> : null
  )
}