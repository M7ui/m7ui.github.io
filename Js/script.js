//时间显示id="time" id="period"
function updateTime() {
    var now = new Date(); // 获取当前时间
    var hours = now.getHours(); // 获取小时

    // 根据小时判断时间段
    var period;
    if (hours >= 6 && hours < 12) {
        period = '早上好';
    } else if (hours >= 12 && hours < 14) {
        period = '中午好';
    } else if (hours >= 14 && hours < 18) {
        period = '下午好';
    } else {
        period = '晚上好';
    }

    // 更新页面上的元素内容
    document.getElementById('time').innerHTML = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    document.getElementById('period').innerHTML = period;
}

// 当网页加载完毕时开始更新时间
window.onload = function() {
    // 设置定时器，每1000毫秒（1秒）调用一次updateTime函数
    setInterval(updateTime, 1000);
    // 初始化时间显示
    updateTime();
};

//API
         var apiUrlnanning = 'https://restapi.amap.com/v3/weather/weatherInfo?city=450100&key=300ce55462e41cf5c4f2549c484de9cb';

         //获取天气
         fetch(apiUrlnanning)
             .then(function(response) {
                 return response.json();
             })
             .then(function(data) {
                 if (data.status === "1") {
                     var city = data.lives[0].city; 
                     var weather = data.lives[0].weather;  
                     var temperature = data.lives[0].temperature; 
                     var windPower = data.lives[0].windpower; 
                     var weatherInfo = document.getElementById('weather-info');
                     // 更新信息
                     weatherInfo.innerHTML = 
                         '<h2 class="city">' + city + "&nbsp" + weather + "&nbsp" + temperature + '℃'+ '&nbsp 风力' + windPower + '级' +'</h2>' ;
                 } else {
                     // 获取失败
                     weatherInfo.innerHTML = '<p>无法获取天气信息，请稍后再试。</p>';
                 }
             })
             .catch(function(error) {
                 // 网络错误
                 console.error('Error:', error);
                 document.getElementById('weather-info').innerHTML = '<p>网络错误，请检查您的连接。</p>';
             });

             var apiUrlpg = 'https://restapi.amap.com/v3/weather/weatherInfo?city=451082&key=300ce55462e41cf5c4f2549c484de9cb';

             // fetchAPI获取天气
             fetch(apiUrlpg)
                 .then(function(response) {
                     return response.json();
                 })
                 .then(function(data) {
                     // 检查数据状态
                     if (data.status === "1") {
                         // 获取天气信息
                         var city = data.lives[0].city; // 城市
                         var weather = data.lives[0].weather; // 天气状况
                         var temperature = data.lives[0].temperature; // 温度
                         var windPower = data.lives[0].windpower; // 风力
                         var weatherInfo = document.getElementById('weather-info-2');
                         // 更新信息
                         weatherInfo.innerHTML = 
                             '<h2 class="city">家：' + city + "&nbsp" + weather + "&nbsp" + temperature + '℃'+ '&nbsp 风力' + windPower + '级' +'</h2>' ;
                     } else {
                         // 获取失败
                         weatherInfo.innerHTML = '<p>无法获取天气信息，请稍后再试。</p>';
                     }
                 })
                 .catch(function(error) {
                     // 网络错误
                     console.error('Error:', error);
                     document.getElementById('weather-info').innerHTML = '<p>网络错误，请检查您的连接。</p>';
                 });

                 //xxxxxxxxxx
                 function err(){
                    location.href = '404.htm';
                 }
                 function baidu(){
                    location.href = 'https://pan.baidu.com/s/1FGnXwN-ZiKApmZqQLg4pHQ'; 
                 }
                function notfound(){
                    let momo = document.getElementById('momo');
                    let mome = document.getElementById('mome');
                    let loader = document.getElementById('loader');
                        loader.style.display = 'flex';
                        momo.style.left = "0";
                        mome.style.right = '0';
                    setTimeout("window.location.reload();",8000);
                    setTimeout("err();",8000);
                }
                function normal(){
                    let momo = document.getElementById('momo');
                    let mome = document.getElementById('mome');
                    let loader = document.getElementById('loader');
                        loader.style.display = 'flex';
                        momo.style.left = "0";
                        mome.style.right = '0';
                    setTimeout("window.location.reload();",8000);
                    setTimeout("baidu();",8000);
                }