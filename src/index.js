import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // 注意这里的路径修正

const container = document.getElementById('root');
const root = createRoot(container); // 创建根节点
root.render(<App />); // 渲染组件
