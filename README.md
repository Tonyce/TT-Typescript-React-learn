参考：[react-typescript](http://blog.wolksoftware.com/working-with-react-and-typescript)

npm install

tsd install react react-dom classnames --save

### 关于demo   
参考文章有点老，使用的大概是0.13.3，期间遇到了一些版本升级的bug

* classSet 不再推荐，推荐使用classnames
* reactdom 在react中独立出来 有了单独react-dom
* 在使用namespace时，要添加全局的 import ReactDOM = __React.__DOM; import React = __React; 因为在window中没有__React, __DOM. 可能是 d.ts版本没有跟上最新的
