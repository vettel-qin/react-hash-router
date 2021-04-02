import React, { createContext, useEffect, useState} from 'react';

// 用于共享路由当前hash地址
export const RouterContext = createContext();

const Router = (props) => {
  const [path, setPath] = useState('/');

  useEffect(() => {
    // 先解析第一次的hash值
    getPath();

    //监听之后hash值的变化,进入路由和返回
    window.onhashchange = (ev) => {
      getPath();
    }
  }, []);

  // 解析hash地址
  const getPath = () => {
    let paths = window.location.hash;

    if (paths) {
      paths = paths.replace('#', '');
    } else {
      paths = '/';
    }
    setPath(paths)
  };

  return (
    <RouterContext.Provider
      value={{path}}
    >
      {props.children}
    </RouterContext.Provider>
  )
}

export default Router;