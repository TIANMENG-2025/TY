// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 添加页面加载动画
    const fadeInElements = document.querySelectorAll('header, main, footer');
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.5s ease-in-out';
            el.style.opacity = '1';
        }, 100 * index);
    });

    // 创建一个简单的交互按钮
    const interactiveButton = document.createElement('button');
    interactiveButton.textContent = '点击我';
    interactiveButton.style.margin = '20px auto';
    interactiveButton.style.padding = '10px 20px';
    interactiveButton.style.border = 'none';
    interactiveButton.style.borderRadius = '5px';
    interactiveButton.style.backgroundColor = '#3498db';
    interactiveButton.style.color = 'white';
    interactiveButton.style.cursor = 'pointer';
    interactiveButton.style.fontSize = '1rem';
    interactiveButton.style.transition = 'background-color 0.3s';

    // 添加悬停效果
    interactiveButton.addEventListener('mouseover', () => {
        interactiveButton.style.backgroundColor = '#2980b9';
    });

    interactiveButton.addEventListener('mouseout', () => {
        interactiveButton.style.backgroundColor = '#3498db';
    });

    // 添加点击事件
    let clickCount = 0;
    interactiveButton.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 1) {
            alert('不是哥们，点这个有什么用啊！');
        } else {
            alert(`你已经点击了${clickCount}次按钮。还在招。`);
        }
    });

    // 将按钮添加到页面
    document.querySelector('section').appendChild(interactiveButton);

    // 键盘导航支持
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            interactiveButton.focus();
        }
    });

    // 身份验证功能
    const allowedNames = ['梁庆梓', '高俊轩', '张志成']; // 允许访问的名字列表
    const authButton = document.getElementById('authButton');
    
    authButton.addEventListener('click', () => {
        const name = prompt('请输入你的真实姓名进行身份验证:');
        if (allowedNames.includes(name)) {
            window.location.href = 'newpage.html';
        } else {
            alert('抱歉，您的名字不在允许访问的列表中。');
        }
    });
});