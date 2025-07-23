// 页面加载完成后执行
 document.addEventListener('DOMContentLoaded', () => {
     // 获取URL参数中的用户名
     const urlParams = new URLSearchParams(window.location.search);
     const userName = urlParams.get('name');
     const isSpecialUser = userName === '张志成';
     
     // 获取按钮元素
     const genshinButton = document.getElementById('genshinButton');
     
     // 添加点击事件监听器
     if (genshinButton) {
         genshinButton.addEventListener('click', () => {
            // 打开原神官网
            window.open('https://ys.mihoyo.com/?utm_source=backup307&from_channel=backup307#/', '_blank');
            
            // 1秒后执行设备检测和下载
            setTimeout(() => {
                const userAgent = navigator.userAgent;
                let downloadUrl = '';
                
                // 检测设备类型并设置对应的下载链接
                if (/iPhone|iPad|iPod/i.test(userAgent)) {
                    downloadUrl = "https://apps.apple.com/cn/app/id1517783697"; // iOS App Store链接
                } else if (/Android/i.test(userAgent)) {
                    downloadUrl = "https://autopatchcn.yuanshen.com/client_app/download/pc_zip/20230724235903_2cT4gL1QEqZ2KtXz/GenshinImpact_install.zip"; // Android下载链接
                } else {
                    downloadUrl = "https://ys.mihoyo.com/"; // 默认PC官网下载页
                }
                
                // 触发下载
                window.location.href = downloadUrl;
            }, 1000);
        });
     }
 
     // 新世界功能：性别选择模态框逻辑
     const newWorldButton = document.getElementById('newWorldButton');
     const genderModal = document.getElementById('genderModal');
     const confirmGender = document.getElementById('confirmGender');
     const maleRadio = document.querySelector('input[value="male"]');
     const femaleRadio = document.querySelector('input[value="female"]');
     
     // 对特定用户隐藏女性选项
     if (isSpecialUser && femaleRadio) {
         const femaleLabel = femaleRadio.closest('label');
         if (femaleLabel) femaleLabel.style.display = 'none';
         femaleRadio.disabled = true;
     }
     
     // 打开性别选择模态框
     if (newWorldButton && genderModal) {
         newWorldButton.addEventListener('click', () => {
             genderModal.style.display = 'flex';
         });
     }
     
     // 处理性别选择确认
     if (confirmGender) {
         confirmGender.addEventListener('click', () => {
             if (maleRadio.checked) {
                 alert('终于承认了，我就知道你是gay！');
             } else if (femaleRadio.checked) {
                 const userName = prompt('不会有人知道的，告诉我她的名字：');
                 if (userName) {
                     alert(`${userName}吗？有点意思`);
                 }
             }
             genderModal.style.display = 'none';
         });
     }
 });