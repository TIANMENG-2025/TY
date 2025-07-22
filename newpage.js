// 页面加载完成后执行
 document.addEventListener('DOMContentLoaded', () => {
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
 });